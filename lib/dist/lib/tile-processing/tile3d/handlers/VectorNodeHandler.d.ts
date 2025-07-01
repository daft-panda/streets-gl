import Handler, { RequestedHeightParams } from "~/lib/tile-processing/tile3d/handlers/Handler";
import VectorNode from "~/lib/tile-processing/vector/features/VectorNode";
import RoadGraph from "~/lib/road-graph/RoadGraph";
import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import { TileMetadata } from "../buffers/Tile3DBuffers";
export default class VectorNodeHandler implements Handler {
    private readonly osmReference;
    private readonly descriptor;
    private readonly x;
    private readonly y;
    private mercatorScale;
    private terrainHeight;
    private graph;
    private features;
    constructor(feature: VectorNode);
    setRoadGraph(graph: RoadGraph): void;
    setMercatorScale(scale: number): void;
    process(): void;
    getFeatures(): Tile3DFeature[];
    getMetadata(): TileMetadata | null;
    private getGenericInstanceFeature;
    private getTreeInstanceFeature;
    getRequestedHeightPositions(): RequestedHeightParams;
    private isOutOfBounds;
}
//# sourceMappingURL=VectorNodeHandler.d.ts.map