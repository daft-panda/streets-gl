import AbstractQualifierFactory from "~/lib/tile-processing/vector/qualifiers/factories/AbstractQualifierFactory";
import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
export default class OSMAreaQualifierFactory extends AbstractQualifierFactory<VectorAreaDescriptor, Record<string, string>> {
    fromTags(osmId: number, tags: Record<string, string>): Qualifier<VectorAreaDescriptor>[];
}
//# sourceMappingURL=OSMAreaQualifierFactory.d.ts.map