import { RelationElement, RelationMember } from "~/lib/tile-processing/vector/providers/OverpassDataObject";
import OSMWayHandler from "~/lib/tile-processing/vector/handlers/OSMWayHandler";
import OSMHandler from "~/lib/tile-processing/vector/handlers/OSMHandler";
import VectorArea from "~/lib/tile-processing/vector/features/VectorArea";
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
export default class OSMRelationHandler implements OSMHandler {
    private readonly osmElement;
    private readonly tags;
    private readonly members;
    private disableFeatureOutput;
    private isBuildingPartInRelation;
    private cachedFeatures;
    constructor(osmElement: RelationElement);
    addMember(member: RelationMember, handler: OSMWayHandler | OSMRelationHandler): void;
    private getClosedMultipolygonRings;
    preventFeatureOutput(): void;
    markAsBuildingPartInRelation(): void;
    private getFeaturesFromAreaTags;
    private getVectorAreaRings;
    getFeatures(): VectorFeature[];
    getStructuralFeature(): VectorArea;
    private getOSMReference;
    private static resolvePartialRings;
    private static getRingTypeFromRole;
}
//# sourceMappingURL=OSMRelationHandler.d.ts.map