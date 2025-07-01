import { VectorAreaDescriptor, VectorDescriptor, VectorNodeDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export declare enum ModifierType {
    NodeRow = 0,
    CircleArea = 1
}
interface BaseModifier {
    type: ModifierType;
    descriptor: VectorDescriptor;
}
export interface NodeRowModifier extends BaseModifier {
    type: ModifierType.NodeRow;
    spacing: number;
    randomness: number;
    descriptor: VectorNodeDescriptor;
}
export interface CircleAreaModifier extends BaseModifier {
    type: ModifierType.CircleArea;
    radius: number;
    descriptor: VectorAreaDescriptor;
}
export type Modifier = NodeRowModifier | CircleAreaModifier;
export {};
//# sourceMappingURL=modifiers.d.ts.map