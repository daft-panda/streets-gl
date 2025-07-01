import TerrainHeightLoaderBitmap from "./TerrainHeightLoaderBitmap";
type AnyObject = any;
export declare class UsageTracker {
    private users;
    use(id: AnyObject): void;
    release(id: AnyObject): void;
    isUsed(): boolean;
}
export declare class HeightLoaderTile {
    tracker: UsageTracker;
    levels: Map<number, TerrainHeightLoaderBitmap>;
    setLevel(levelId: number, bitmap: TerrainHeightLoaderBitmap): void;
    getLevel(levelId: number): TerrainHeightLoaderBitmap;
}
export default class TerrainHeightLoader {
    private readonly tiles;
    private readonly maxConcurrentRequests;
    private readonly activeRequests;
    private readonly queue;
    getOrLoadTile(x: number, y: number, zoom: number, owner: AnyObject): Promise<HeightLoaderTile>;
    private processQueue;
    update(): void;
    private load;
    private removeUnusedTiles;
    getTile(x: number, y: number, zoom: number): HeightLoaderTile;
    private addTile;
    private addBitmap;
    getBitmap(x: number, y: number, zoom: number, level: number): TerrainHeightLoaderBitmap;
}
export {};
//# sourceMappingURL=TerrainHeightLoader.d.ts.map