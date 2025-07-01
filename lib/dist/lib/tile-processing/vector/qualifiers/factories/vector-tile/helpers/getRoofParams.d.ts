import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default function getRoofParams(tags: VectorTile.FeatureTags): {
    type: VectorAreaDescriptor['buildingRoofType'];
    material: VectorAreaDescriptor['buildingRoofMaterial'];
    color: number;
};
//# sourceMappingURL=getRoofParams.d.ts.map