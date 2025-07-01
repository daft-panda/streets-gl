import TileSource from "./TileSource";
import AbstractTexture2D from "~/lib/renderer/abstract-renderer/AbstractTexture2D";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import TerrainHeightLoader from "../TerrainHeightLoader";
export default class HeightTileSource extends TileSource<Float32Array> {
    private texture;
    private heightLoaderTile;
    constructor(x: number, y: number, zoom: number);
    loadFromHeightLoader(heightLoader: TerrainHeightLoader, level: number): Promise<void>;
    load(): Promise<void>;
    getTexture(renderer: AbstractRenderer): AbstractTexture2D;
    delete(): void;
}
//# sourceMappingURL=HeightTileSource.d.ts.map