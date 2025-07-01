import PBFTile from "~/lib/tile-processing/vector/providers/pbf/PBFTile";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export declare enum TagTypes {
    String = 0,
    Float = 1,
    Double = 2,
    Int = 3,
    UInt = 4,
    SInt = 5,
    Bool = 6
}
export type TagTypesMap = Record<string, TagTypes>;
export default class PBFTileDecoder {
    static decode(tile: PBFTile, tagTypes: TagTypesMap, tileSize: number): VectorTile.Tile;
    private static decodeFeature;
    private static decodeTags;
    private static decodeTagValue;
}
//# sourceMappingURL=PBFTileDecoder.d.ts.map