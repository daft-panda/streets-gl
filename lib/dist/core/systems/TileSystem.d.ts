import Tile from "../objects/Tile";
import Vec2 from "~/lib/math/Vec2";
import System from "../System";
import TileData from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
interface QueueItem {
    position: Vec2;
    onBeforeLoad: () => Promise<void>;
    onLoad: (tileData: TileData) => Promise<void>;
}
export default class TileSystem extends System {
    readonly tiles: Map<string, Tile>;
    private readonly queue;
    private cameraFrustum;
    private objectsManager;
    enableTerrainHeight: boolean;
    postInit(): void;
    private listenToKeyPresses;
    private listenToSettings;
    addTile(x: number, y: number): void;
    getTile(x: number, y: number): Tile;
    removeTile(x: number, y: number): void;
    getTileByLocalId(localId: number): Tile;
    private claimHeightDataForTile;
    update(deltaTime: number): void;
    private updateTiles;
    getNextTileToLoad(): QueueItem;
    private updateTilesDistancesToCamera;
    private getTilesInFrustum;
    private getTilesInConvexHull;
    private sortTilesByDistanceToCamera;
    private removeCulledTiles;
    private purgeTiles;
}
export {};
//# sourceMappingURL=TileSystem.d.ts.map