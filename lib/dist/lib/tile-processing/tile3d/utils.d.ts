import Tile3DExtrudedGeometry from "~/lib/tile-processing/tile3d/features/Tile3DExtrudedGeometry";
import TileData from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
import { VectorNodeDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export declare function applyMercatorFactorToExtrudedFeatures(extruded: Tile3DExtrudedGeometry[], x: number, y: number, zoom: number): void;
export declare function getRoadUV(lanesForward: number, lanesBackward: number): {
    minX: number;
    maxX: number;
};
export declare function getTile3DBuffersTransferables(tileData: TileData): Transferable[];
export declare function getTreeTextureIdFromType(type: VectorNodeDescriptor['treeType']): number[];
export declare function getTreeHeightRangeFromTextureId(textureId: number): [number, number];
export declare function getTreeTextureScaling(textureId: number): number;
//# sourceMappingURL=utils.d.ts.map