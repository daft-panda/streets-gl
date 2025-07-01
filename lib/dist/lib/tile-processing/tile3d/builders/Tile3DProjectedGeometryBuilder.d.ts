import Vec2 from "~/lib/math/Vec2";
import Tile3DProjectedGeometry from "~/lib/tile-processing/tile3d/features/Tile3DProjectedGeometry";
import Tile3DMultipolygon from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
import { Tile3DRingType } from "~/lib/tile-processing/tile3d/builders/Tile3DRing";
import { SurfaceBuilderOrientation } from "~/lib/tile-processing/tile3d/builders/SurfaceBuilder";
import { RoadSide } from "~/lib/tile-processing/tile3d/builders/RoadBuilder";
import Tile3DTerrainMaskGeometry from "~/lib/tile-processing/tile3d/features/Tile3DTerrainMaskGeometry";
import { FeatureIdVertexMapping } from "../buffers/Tile3DBuffers";
export default class Tile3DProjectedGeometryBuilder {
    private readonly arrays;
    private readonly terrainMaskPositions;
    private readonly boundingBox;
    private readonly multipolygon;
    private zIndex;
    constructor(multipolygon?: Tile3DMultipolygon);
    addRing(type: Tile3DRingType, nodes: Vec2[]): void;
    setZIndex(value: number): void;
    addPolygon({ textureId, height, uvScale, isOriented, stretch, orientation, osmId, addUsageMask }: {
        height: number;
        textureId: number;
        uvScale?: number;
        isOriented?: boolean;
        stretch?: boolean;
        orientation?: SurfaceBuilderOrientation;
        osmId: number;
        addUsageMask?: boolean;
    }): void;
    addPath({ vertexAdjacentToStart, vertexAdjacentToEnd, width, uvFollowRoad, uvScale, uvScaleY, side, uvMinX, uvMaxX, height, osmId, textureId }: {
        vertexAdjacentToStart?: Vec2;
        vertexAdjacentToEnd?: Vec2;
        width: number;
        uvFollowRoad: boolean;
        uvScale?: number;
        uvScaleY?: number;
        side?: RoadSide;
        uvMinX?: number;
        uvMaxX?: number;
        height?: number;
        osmId: number;
        textureId: number;
    }): void;
    addFence({ minHeight, height, width, textureId }: {
        minHeight: number;
        height: number;
        width: number;
        textureId: number;
    }): void;
    addExtrudedPath({ width, height, textureId, osmId, textureScaleX, textureScaleY }: {
        width: number;
        height: number;
        textureId: number;
        osmId: number;
        textureScaleX: number;
        textureScaleY: number;
    }): void;
    private projectAndAddGeometry;
    private addGeometry;
    private addMaskGeometry;
    private addVerticesToBoundingBox;
    getGeometry(): Tile3DProjectedGeometry;
    getVertexIdMapping(): FeatureIdVertexMapping[];
    getTerrainMaskGeometry(): Tile3DTerrainMaskGeometry;
}
//# sourceMappingURL=Tile3DProjectedGeometryBuilder.d.ts.map