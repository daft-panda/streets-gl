import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export default function getRoofParamsFromTags(tags: Record<string, string>): {
    type: VectorAreaDescriptor['buildingRoofType'];
    material: VectorAreaDescriptor['buildingRoofMaterial'];
    color: number;
};
//# sourceMappingURL=getRoofParamsFromTags.d.ts.map