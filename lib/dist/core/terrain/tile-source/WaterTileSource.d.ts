import TileSource from "./TileSource";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
export default class WaterTileSource extends TileSource<Float32Array> {
    private mask;
    constructor(x: number, y: number, zoom: number);
    private fetchTile;
    load(): Promise<void>;
    private polygonsToTriangles;
    getMesh(renderer: AbstractRenderer): AbstractMesh;
    private static isRingClockwise;
    delete(): void;
    private static getURL;
}
//# sourceMappingURL=WaterTileSource.d.ts.map