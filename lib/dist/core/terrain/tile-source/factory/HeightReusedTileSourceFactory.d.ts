import TerrainHeightProvider from "../../TerrainHeightProvider";
import HeightTileSource from "../HeightTileSource";
import TileSourceFactory from "./TileSourceFactory";
export default class HeightReusedTileSourceFactory extends TileSourceFactory<HeightTileSource> {
    private readonly terrainHeightProvider;
    private readonly level;
    constructor(terrainHeightProvider: TerrainHeightProvider, level: number);
    create(x: number, y: number, zoom: number): Promise<HeightTileSource>;
}
//# sourceMappingURL=HeightReusedTileSourceFactory.d.ts.map