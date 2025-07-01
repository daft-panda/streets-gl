import Tile from "../objects/Tile";
export default class TileBuilding {
    readonly id: number;
    readonly parents: Tile[];
    holder: Tile;
    constructor(id: number);
    addParent(tile: Tile): void;
    removeParent(tile: Tile): void;
    private getPotentialHolder;
}
//# sourceMappingURL=TileBuilding.d.ts.map