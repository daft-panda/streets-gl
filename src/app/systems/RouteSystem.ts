// app/systems/RouteSystem.ts
import System from "../System";
import RenderSystem from "./RenderSystem";
import SceneSystem from "./SceneSystem";
import TileSystem from "./TileSystem";
import { Trip, RoadSegment } from "~/proto/trips"; // Path to your generated proto types
import { RendererTypes } from "~/lib/renderer/RendererTypes";
import Vec3 from "~/lib/math/Vec3";
import MaterialContainer from "~/lib/material/MaterialContainer";
import Shaders from "../shaders/Shaders";
import Tile from "../objects/Tile";

interface HighlightedSegment {
  osmWayId: number;
  interimStartIdx?: number;
  interimEndIdx?: number;
}

export default class RouteSystem extends System {
  private activeTrip: Trip | null = null;
  private routeMaterial: MaterialContainer | null = null;
  private highlightedSegments: Map<string, HighlightedSegment> = new Map();
  private processedTiles: Set<string> = new Set();

  public async postInit(): Promise<void> {
    this.createRouteMaterial();
  }

  private createRouteMaterial(): void {
    const renderer = this.systemManager.getSystem(RenderSystem).renderer;

    this.routeMaterial = new MaterialContainer(renderer);
    this.routeMaterial.material = renderer.createMaterial({
      name: "Route material",
      uniforms: [
        {
          name: "modelViewMatrix",
          block: "PerMesh",
          type: RendererTypes.UniformType.Matrix4,
          value: new Float32Array(16),
        },
        {
          name: "projectionMatrix",
          block: "PerMaterial",
          type: RendererTypes.UniformType.Matrix4,
          value: new Float32Array(16),
        },
        {
          name: "routeColor",
          block: "PerMaterial",
          type: RendererTypes.UniformType.Float3,
          value: new Float32Array([0.9, 0.4, 0.1]), // Orange highlight color
        },
        {
          name: "tMap",
          block: null,
          type: RendererTypes.UniformType.Texture2D,
          value: null, // Will be set when applying to a mesh
        },
      ],
      defines: {},
      primitive: {
        frontFace: RendererTypes.FrontFace.CCW,
        cullMode: RendererTypes.CullMode.None,
      },
      depth: {
        depthWrite: true,
        depthCompare: RendererTypes.DepthCompare.LessEqual,
      },
      blend: {
        color: {
          operation: RendererTypes.BlendOperation.Add,
          srcFactor: RendererTypes.BlendFactor.SrcAlpha,
          dstFactor: RendererTypes.BlendFactor.OneMinusSrcAlpha,
        },
        alpha: {
          operation: RendererTypes.BlendOperation.Add,
          srcFactor: RendererTypes.BlendFactor.One,
          dstFactor: RendererTypes.BlendFactor.Zero,
        },
      },
      vertexShaderSource: Shaders.route.vertex,
      fragmentShaderSource: Shaders.route.fragment,
    });
  }

  public setTrip(trip: Trip): void {
    this.clearActiveTrip();
    this.activeTrip = trip;
    this.processTrip();
  }

  private clearActiveTrip(): void {
    if (!this.activeTrip) return;

    // Reset all processed tiles
    const tileSystem = this.systemManager.getSystem(TileSystem);
    for (const tileKey of this.processedTiles) {
      const [x, y] = tileKey.split(",").map(Number);
      const tile = tileSystem.getTile(x, y);
      if (tile) {
        this.resetTileRoute(tile);
      }
    }

    this.highlightedSegments.clear();
    this.processedTiles.clear();
    this.activeTrip = null;
  }

  private processTrip(): void {
    if (!this.activeTrip || !this.activeTrip.matched_segments) return;

    for (const segment of this.activeTrip.matched_segments) {
      this.addSegmentToHighlight(segment);
    }

    // Process any already loaded tiles
    const tileSystem = this.systemManager.getSystem(TileSystem);
    for (const tile of tileSystem.tiles.values()) {
      this.processTileForRoute(tile);
    }
  }

  private addSegmentToHighlight(segment: RoadSegment): void {
    const osmWayId = Number(segment.osm_way_id);
    const key = `${osmWayId}`;

    this.highlightedSegments.set(key, {
      osmWayId,
      interimStartIdx: segment.interim_start_idx,
      interimEndIdx: segment.interim_end_idx,
    });
  }

  private processTileForRoute(tile: Tile): void {
    if (!tile.roadData || !tile.roadData.length || !this.activeTrip) return;

    let tileModified = false;
    const tileKey = `${tile.x},${tile.y}`;

    // Skip if already processed
    if (this.processedTiles.has(tileKey)) return;

    for (const roadData of tile.roadData) {
      const segmentKey = `${roadData.osmWayId}`;

      if (this.highlightedSegments.has(segmentKey)) {
        const highlightedSegment = this.highlightedSegments.get(segmentKey);

        // Check interim indices if they exist
        const startIdxMatch =
          highlightedSegment.interimStartIdx === undefined ||
          highlightedSegment.interimStartIdx === roadData.interimStartIdx;
        const endIdxMatch =
          highlightedSegment.interimEndIdx === undefined ||
          highlightedSegment.interimEndIdx === roadData.interimEndIdx;

        if (startIdxMatch && endIdxMatch) {
          this.applyRouteHighlighting(tile, roadData);
          tileModified = true;
        }
      }
    }

    if (tileModified) {
      this.processedTiles.add(tileKey);
    }
  }

  private applyRouteHighlighting(tile: Tile, roadData: any): void {
    // Check if the tile has projectedMesh (for roads)
    if (!tile.projectedMesh) return;

    // Clone the original material to create the route material
    const renderer = this.systemManager.getSystem(RenderSystem).renderer;

    // Create the route factor attribute for vertex-based coloring
    const routeFactorArray = new Float32Array(
      tile.projectedMesh.getAttribute("position").buffer.data.length / 3
    );

    // Set the route factor to 1.0 for vertices in the specified road segment
    for (
      let i = roadData.startIndex;
      i < roadData.startIndex + roadData.vertexCount;
      i++
    ) {
      routeFactorArray[i] = 1.0;
    }

    // Create a new attribute buffer and attribute for route factor
    const routeFactorBuffer = renderer.createAttributeBuffer({
      data: routeFactorArray,
      usage: RendererTypes.BufferUsage.StaticDraw,
    });

    const routeFactorAttribute = renderer.createAttribute({
      name: "routeFactor",
      size: 1,
      type: RendererTypes.AttributeType.Float32,
      format: RendererTypes.AttributeFormat.Float,
      normalized: false,
      buffer: routeFactorBuffer,
    });

    // Add the attribute to the mesh
    tile.projectedMesh.addAttribute(routeFactorAttribute);

    // Clone and modify the original material
    const originalTexture =
      tile.projectedMaterial.material.getUniform("tMap")?.value;

    // Set the material texture
    if (originalTexture) {
      const mapUniform = this.routeMaterial.material.getUniform("tMap");
      if (mapUniform) {
        mapUniform.value = originalTexture;
      }
    }

    // Apply the route material
    tile.projectedMaterial = this.routeMaterial;

    // Store original material for reset
    tile.originalProjectedMaterial = tile.projectedMaterial;
  }

  private resetTileRoute(tile: Tile): void {
    if (tile.originalProjectedMaterial) {
      tile.projectedMaterial = tile.originalProjectedMaterial;
      tile.originalProjectedMaterial = null;

      // Remove the routeFactor attribute if it exists
      if (
        tile.projectedMesh &&
        tile.projectedMesh.getAttribute("routeFactor")
      ) {
        // For now, we need to recreate the mesh without the attribute
        // or handle attribute removal in the renderer implementation
      }
    }
  }

  public update(deltaTime: number): void {
    if (!this.activeTrip) return;

    // Check for any new tiles that need processing
    const tileSystem = this.systemManager.getSystem(TileSystem);
    for (const tile of tileSystem.tiles.values()) {
      if (tile.isLoaded && !this.processedTiles.has(`${tile.x},${tile.y}`)) {
        this.processTileForRoute(tile);
      }
    }
  }
}
