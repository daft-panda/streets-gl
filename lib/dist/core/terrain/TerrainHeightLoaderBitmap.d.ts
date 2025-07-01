export default class TerrainHeightLoaderBitmap {
    readonly data: Float32Array;
    private readonly width;
    private readonly height;
    constructor(data: Float32Array, width: number, height: number);
    fetchNearest(x: number, y: number): number;
    downscale(): TerrainHeightLoaderBitmap;
}
//# sourceMappingURL=TerrainHeightLoaderBitmap.d.ts.map