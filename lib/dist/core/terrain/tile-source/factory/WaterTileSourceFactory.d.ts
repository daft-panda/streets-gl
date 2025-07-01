import WaterTileSource from "../WaterTileSource";
import TileSourceFactory from "./TileSourceFactory";
export default class WaterTileSourceFactory extends TileSourceFactory<WaterTileSource> {
    create(x: number, y: number, zoom: number): Promise<WaterTileSource>;
}
//# sourceMappingURL=WaterTileSourceFactory.d.ts.map