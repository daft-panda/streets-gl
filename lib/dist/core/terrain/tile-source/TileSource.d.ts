export default abstract class TileSource<T> {
    readonly x: number;
    readonly y: number;
    readonly zoom: number;
    data: T;
    protected deleted: boolean;
    lastUsedTimestamp: number;
    isCurrentlyUsed: boolean;
    protected constructor(x: number, y: number, zoom: number);
    abstract load(): Promise<void>;
    markUnused(): void;
    markUsed(): void;
    abstract delete(): void;
}
//# sourceMappingURL=TileSource.d.ts.map