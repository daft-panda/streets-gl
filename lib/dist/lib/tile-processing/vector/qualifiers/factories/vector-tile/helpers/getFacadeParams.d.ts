import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default function getFacadeParamsFromTags(tags: VectorTile.FeatureTags): {
    material: VectorAreaDescriptor['buildingFacadeMaterial'];
    color: number;
};
//# sourceMappingURL=getFacadeParams.d.ts.map