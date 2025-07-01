import Handler, { RequestedHeightParams } from "~/lib/tile-processing/tile3d/handlers/Handler";
import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import VectorPolyline from "~/lib/tile-processing/vector/features/VectorPolyline";
import RoadGraph from "~/lib/road-graph/RoadGraph";
import Road from "~/lib/road-graph/Road";
import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { TileMetadata } from "../buffers/Tile3DBuffers";
export default class VectorPolylineHandler implements Handler {
    private readonly osmReference;
    private readonly descriptor;
    private readonly vertices;
    private mercatorScale;
    private graph;
    private graphRoad;
    private graphGroup;
    private features;
    private mapping;
    constructor(feature: VectorPolyline, identifyFeatures?: boolean);
    getRequestedHeightPositions(): RequestedHeightParams;
    setMercatorScale(scale: number): void;
    process(): void;
    getFeatures(): Tile3DFeature[];
    getMetadata(): TileMetadata | null;
    setRoadGraph(graph: RoadGraph): void;
    getGraphRoad(): Road;
    private handlePath;
    private getPathBuilderVertices;
    private processPathEnd;
    private handleFence;
    private handleWall;
    private handleWaterway;
    getIntersectionMaterial(): VectorAreaDescriptor['intersectionMaterial'];
    private static getPathParams;
    private static getRoadSideFromDescriptor;
    private static getFenceParams;
    private static getWallParams;
}
//# sourceMappingURL=VectorPolylineHandler.d.ts.map