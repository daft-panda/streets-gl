import AbstractQualifierFactory from "~/lib/tile-processing/vector/qualifiers/factories/AbstractQualifierFactory";
import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default class VectorTilePolylineQualifierFactory extends AbstractQualifierFactory<VectorPolylineDescriptor, VectorTile.FeatureTags> {
    fromTags(osmId: number, tags: VectorTile.FeatureTags): Qualifier<VectorPolylineDescriptor>[];
}
//# sourceMappingURL=VectorTilePolylineQualifierFactory.d.ts.map