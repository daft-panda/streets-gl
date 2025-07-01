import AbstractQualifierFactory from "~/lib/tile-processing/vector/qualifiers/factories/AbstractQualifierFactory";
import { VectorNodeDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
export default class OSMNodeQualifierFactory extends AbstractQualifierFactory<VectorNodeDescriptor, Record<string, string>> {
    fromTags(osmId: number, tags: Record<string, string>): Qualifier<VectorNodeDescriptor>[];
}
//# sourceMappingURL=OSMNodeQualifierFactory.d.ts.map