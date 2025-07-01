import HeightTileSource from "../HeightTileSource";
import TileSourceFactory from "./TileSourceFactory";
export default class HeightTileSourceFactory extends TileSourceFactory<HeightTileSource> {
    create(x: number, y: number, zoom: number): Promise<HeightTileSource>;
}
//# sourceMappingURL=HeightTileSourceFactory.d.ts.map