import AbstractQualifierFactory from "~/lib/tile-processing/vector/qualifiers/factories/AbstractQualifierFactory";
import { VectorNodeDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default class VectorTileNodeQualifierFactory extends AbstractQualifierFactory<VectorNodeDescriptor, VectorTile.FeatureTags> {
    fromTags(osmId: number, tags: VectorTile.FeatureTags): Qualifier<VectorNodeDescriptor>[];
}
//# sourceMappingURL=VectorTileNodeQualifierFactory.d.ts.map