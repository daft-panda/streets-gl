import Handler, { RequestedHeightParams } from "~/lib/tile-processing/tile3d/handlers/Handler";
import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import VectorArea from "~/lib/tile-processing/vector/features/VectorArea";
import RoadGraph from "~/lib/road-graph/RoadGraph";
import { TileMetadata } from "../buffers/Tile3DBuffers";
export default class VectorAreaHandler implements Handler {
    private readonly osmReference;
    private readonly descriptor;
    private readonly rings;
    private mercatorScale;
    private terrainMinHeight;
    private terrainMaxHeight;
    private multipolygon;
    private instances;
    private features;
    constructor(feature: VectorArea);
    private simplify;
    setRoadGraph(graph: RoadGraph): void;
    setMercatorScale(scale: number): void;
    private getMultipolygon;
    getRequestedHeightPositions(): RequestedHeightParams;
    process(): void;
    getFeatures(): Tile3DFeature[];
    getMetadata(): TileMetadata | null;
    private handleRoadIntersection;
    private handleBuilding;
    private handleGenericSurface;
    private createTree;
    private createShrub;
    private createGenericInstance;
    private static getRoofTypeFromString;
    private getRoofParams;
    private getFacadeParams;
    private static simplifyNodes;
}
//# sourceMappingURL=VectorAreaHandler.d.ts.map