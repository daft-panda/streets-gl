import TileData from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
export interface TileRequestParams {
    overpassEndpoint: string;
    tileServerEndpoint: string;
    vectorTilesEndpointTemplate: string;
    isTerrainHeightEnabled: boolean;
}
export default class MapWorker {
    private worker;
    queueLength: number;
    private tilesInProgress;
    private readonly terrainHeightCallback;
    constructor(terrainHeightCallback: (positions: Float64Array) => Float64Array);
    requestTile(x: number, y: number, params: TileRequestParams): Promise<TileData>;
    private sendMessage;
    private processMessage;
}
//# sourceMappingURL=MapWorker.d.ts.map