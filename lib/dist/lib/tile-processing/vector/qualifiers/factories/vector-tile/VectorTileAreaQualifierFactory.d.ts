import AbstractQualifierFactory from "~/lib/tile-processing/vector/qualifiers/factories/AbstractQualifierFactory";
import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default class VectorTileAreaQualifierFactory extends AbstractQualifierFactory<VectorAreaDescriptor, VectorTile.FeatureTags> {
    private static isTagsContainOMBB;
    private static getOMBB;
    private static isTagsContainPOI;
    private static getPOI;
    fromTags(osmId: number, tags: VectorTile.FeatureTags): Qualifier<VectorAreaDescriptor>[];
}
//# sourceMappingURL=VectorTileAreaQualifierFactory.d.ts.map