import System from "../System";
import TileTreeImage from "../slippy-map/tree/TileTreeImage";
export default class SlippyMapSystem extends System {
    private readonly viewport;
    private readonly tileTree;
    private camera;
    private tiles;
    private queue;
    private isLoading;
    postInit(): void;
    private getTileImageRecursive;
    getRenderedTiles(): TileTreeImage[];
    private getCameraPositionNormalized;
    update(deltaTime: number): void;
    private deleteUnusedTiles;
    private processQueue;
    private loadTile;
    getCurrentWorldHeight(): number;
    private static packVec3;
}
//# sourceMappingURL=SlippyMapSystem.d.ts.map