import { VectorDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { Modifier } from "~/lib/tile-processing/vector/qualifiers/modifiers";
export declare enum QualifierType {
    Descriptor = 0,
    Modifier = 1
}
interface ModifierContainer {
    type: QualifierType.Modifier;
    data: Modifier;
}
interface DescriptorContainer<T extends VectorDescriptor> {
    type: QualifierType.Descriptor;
    data: T;
}
export type Qualifier<T extends VectorDescriptor> = ModifierContainer | DescriptorContainer<T>;
export {};
//# sourceMappingURL=Qualifier.d.ts.map