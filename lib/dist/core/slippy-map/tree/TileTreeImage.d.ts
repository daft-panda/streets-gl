import AbstractTexture2D from "~/lib/renderer/abstract-renderer/AbstractTexture2D";
import TileTreeNode from "./TileTreeNode";
export default interface TileTreeImage {
    zoom: number;
    x: number;
    y: number;
    image: HTMLImageElement;
    texture: AbstractTexture2D;
    parent?: TileTreeNode;
}
//# sourceMappingURL=TileTreeImage.d.ts.map