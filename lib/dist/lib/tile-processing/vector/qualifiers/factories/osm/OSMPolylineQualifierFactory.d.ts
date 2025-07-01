import AbstractQualifierFactory from "~/lib/tile-processing/vector/qualifiers/factories/AbstractQualifierFactory";
import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
export default class OSMPolylineQualifierFactory extends AbstractQualifierFactory<VectorPolylineDescriptor, Record<string, string>> {
    fromTags(osmId: number, tags: Record<string, string>): Qualifier<VectorPolylineDescriptor>[];
}
//# sourceMappingURL=OSMPolylineQualifierFactory.d.ts.map