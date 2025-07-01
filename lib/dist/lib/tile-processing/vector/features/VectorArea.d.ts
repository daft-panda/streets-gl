import VectorNode from "~/lib/tile-processing/vector/features/VectorNode";
import OSMReference from "~/lib/tile-processing/vector/features/OSMReference";
import VectorFeatureBase from "~/lib/tile-processing/vector/features/VectorFeatureBase";
import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export declare enum VectorAreaRingType {
    Inner = 0,
    Outer = 1
}
export interface VectorAreaRing {
    nodes: VectorNode[];
    type: VectorAreaRingType;
}
export default interface VectorArea extends VectorFeatureBase {
    type: 'area';
    osmReference: OSMReference;
    descriptor: VectorAreaDescriptor;
    rings: VectorAreaRing[];
    isBuildingPartInRelation?: boolean;
}
//# sourceMappingURL=VectorArea.d.ts.map