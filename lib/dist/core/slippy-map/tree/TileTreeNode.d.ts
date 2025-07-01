import TileTreeImage from "./TileTreeImage";
export default class TileTreeNode {
    x: number;
    y: number;
    zoom: number;
    private parent;
    private children;
    private tile;
    constructor(x: number, y: number, zoom: number, parent?: TileTreeNode);
    insert(tile: TileTreeImage): void;
    onTileRemoved(): void;
    private tryRemoveSelf;
    removeChild(child: TileTreeNode): void;
    private fetchOrCreateChild;
    private getChildIndex;
}
//# sourceMappingURL=TileTreeNode.d.ts.map