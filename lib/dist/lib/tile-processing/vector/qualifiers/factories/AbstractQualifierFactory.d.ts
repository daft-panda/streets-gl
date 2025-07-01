import { Qualifier } from "~/lib/tile-processing/vector/qualifiers/Qualifier";
export default abstract class AbstractQualifierFactory<T, K> {
    abstract fromTags(osmId: number, tags: K): Qualifier<T>[];
}
//# sourceMappingURL=AbstractQualifierFactory.d.ts.map