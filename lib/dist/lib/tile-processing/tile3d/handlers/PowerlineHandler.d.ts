import Handler, { RequestedHeightParams } from "~/lib/tile-processing/tile3d/handlers/Handler";
import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import RoadGraph from "~/lib/road-graph/RoadGraph";
import VectorFeatureCollection from "~/lib/tile-processing/vector/features/VectorFeatureCollection";
import { TileMetadata } from "../buffers/Tile3DBuffers";
export default class PowerlineHandler implements Handler {
    private readonly graph;
    private mercatorScale;
    private heightMap;
    private instances;
    constructor(features: VectorFeatureCollection);
    private buildInstances;
    process(): void;
    getFeatures(): Tile3DFeature[];
    getMetadata(): TileMetadata | null;
    getRequestedHeightPositions(): RequestedHeightParams;
    setMercatorScale(scale: number): void;
    setRoadGraph(graph: RoadGraph): void;
    private getInstanceFromGraphNode;
    private getInstancesFromGraphSegment;
    private static isOutOfBounds;
}
//# sourceMappingURL=PowerlineHandler.d.ts.map