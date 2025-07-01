import VectorArea from "~/lib/tile-processing/vector/features/VectorArea";
import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
type RingInput = [number, number][];
export default class MapboxAreaHandler {
    private readonly rings;
    private readonly descriptor;
    constructor(descriptor: VectorAreaDescriptor);
    addRing(ring: RingInput): void;
    getFeatures(): VectorArea[];
    private static isRingClockwise;
    private static validateRing;
}
export {};
//# sourceMappingURL=MapboxAreaHandler.d.ts.map