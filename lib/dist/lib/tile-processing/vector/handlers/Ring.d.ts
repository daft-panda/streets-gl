import { VectorAreaRing, VectorAreaRingType } from "~/lib/tile-processing/vector/features/VectorArea";
import VectorNode from "~/lib/tile-processing/vector/features/VectorNode";
import { VectorNodeDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export default class Ring {
    type: VectorAreaRingType;
    nodes: VectorNode[];
    constructor(nodes: VectorNode[], type: VectorAreaRingType);
    get firstNode(): VectorNode;
    get lastNode(): VectorNode;
    tryMerge(ring: Ring): boolean;
    private getGaussArea;
    fixDirection(): void;
    getVectorAreaRing(): VectorAreaRing;
    private calculateLength;
    distributeNodes(interval: number, randomness: number, descriptor: VectorNodeDescriptor): VectorNode[];
}
//# sourceMappingURL=Ring.d.ts.map