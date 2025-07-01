import Vec2 from "~/lib/math/Vec2";
import TileSource from "./tile-source/TileSource";
import { TypedArray } from "~/lib/renderer/RendererTypes";
import TileSourceFactory from "./tile-source/factory/TileSourceFactory";
export declare enum TileAreaLoaderCellStateType {
    Empty = 0,
    Clear = 1,
    WithData = 2
}
export interface TileAreaLoaderCellState<TileSourceType extends TileSource<any>> {
    type: TileAreaLoaderCellStateType;
    lastRenderType: TileAreaLoaderCellStateType;
    localX: number;
    localY: number;
    x: number;
    y: number;
    tile: TileSourceType | null;
}
export default class TileAreaLoader<T extends TileSource<any>> {
    readonly zoom: number;
    readonly bufferSize: number;
    readonly maxStoredTiles: number;
    readonly viewportSize: number;
    readonly maxConcurrentRequests: number;
    private readonly states;
    private readonly tiles;
    private readonly sourceFactory;
    private tileLoadingCount;
    constructor({ sourceFactory, zoom, maxStoredTiles, viewportSize, bufferSize, maxConcurrentRequests }: {
        sourceFactory: TileSourceFactory<T>;
        zoom: number;
        maxStoredTiles: number;
        viewportSize: number;
        bufferSize: number;
        maxConcurrentRequests: number;
    });
    private initStates;
    private getState;
    private getTile;
    private setTile;
    update(viewportCenter: Vec2): void;
    private markDirtyTileStates;
    getDirtyTileStates(): TileAreaLoaderCellState<T>[];
    private loadTile;
    private tryDeleteLeastUsedTexture;
    transformToArray(quadOriginX: number, quadOriginY: number, quadSize: number, array: TypedArray): void;
    getSizeInMeters(): number;
}
//# sourceMappingURL=TileAreaLoader.d.ts.map