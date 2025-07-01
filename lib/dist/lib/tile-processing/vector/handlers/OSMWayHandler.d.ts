import OSMNodeHandler from "~/lib/tile-processing/vector/handlers/OSMNodeHandler";
import { WayElement } from "~/lib/tile-processing/vector/providers/OverpassDataObject";
import VectorPolyline from "~/lib/tile-processing/vector/features/VectorPolyline";
import OSMHandler from "~/lib/tile-processing/vector/handlers/OSMHandler";
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
export default class OSMWayHandler implements OSMHandler {
    private readonly osmElement;
    private readonly tags;
    private readonly nodes;
    private disableFeatureOutput;
    private isBuildingPartInRelation;
    private cachedFeatures;
    private cachedStructuralFeature;
    constructor(osmElement: WayElement, nodes: OSMNodeHandler[]);
    private isClosed;
    preventFeatureOutput(): void;
    markAsBuildingPartInRelation(): void;
    private getFeaturesFromPolylineTags;
    private getFeaturesFromAreaTags;
    getFeatures(): VectorFeature[];
    getStructuralFeature(): VectorPolyline;
    private getOSMReference;
}
//# sourceMappingURL=OSMWayHandler.d.ts.map