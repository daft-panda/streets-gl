import { NodeElement } from "~/lib/tile-processing/vector/providers/OverpassDataObject";
import VectorNode from "~/lib/tile-processing/vector/features/VectorNode";
import OSMHandler from './OSMHandler';
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
export default class OSMNodeHandler implements OSMHandler {
    private readonly x;
    private readonly y;
    private readonly osmElement;
    private readonly tags;
    private disableFeatureOutput;
    private cachedFeatures;
    private cachedStructuralFeature;
    constructor(osmElement: NodeElement, x: number, y: number);
    private getFeaturesFromTags;
    getFeatures(): VectorFeature[];
    getStructuralFeature(): VectorNode;
    private getOSMReference;
    preventFeatureOutput(): void;
    markAsBuildingPartInRelation(): void;
    private static getCircleAreaRing;
}
//# sourceMappingURL=OSMNodeHandler.d.ts.map