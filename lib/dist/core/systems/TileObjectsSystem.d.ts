import Tile from "../objects/Tile";
import TileBuilding from "../world/TileBuilding";
import System from "../System";
export default class TileObjectsSystem extends System {
    private buildingsList;
    private activeTiles;
    postInit(): void;
    addTile(tile: Tile): void;
    removeTile(tile: Tile): void;
    getTileBuildingByPackedId(id: number): TileBuilding;
    update(deltaTime: number): void;
}
//# sourceMappingURL=TileObjectsSystem.d.ts.map