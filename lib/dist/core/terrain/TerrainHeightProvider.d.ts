import TerrainHeightLoader from "./TerrainHeightLoader";
export default class TerrainHeightProvider {
    readonly heightLoader: TerrainHeightLoader;
    private readonly requestZoom;
    private readonly bitmapZoom;
    private readonly fallbackValue;
    private fallbackEnabled;
    constructor(requestZoom: number, bitmapZoom: number);
    update(): void;
    setFallbackState(value: boolean): void;
    private getHeightTexel;
    getHeightGlobalInterpolated(x: number, y: number, applyMercatorScale: boolean): number;
}
//# sourceMappingURL=TerrainHeightProvider.d.ts.map