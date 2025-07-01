import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default function getFenceParams(tags: VectorTile.FeatureTags): {
    material: VectorPolylineDescriptor['fenceMaterial'];
    height: number;
    minHeight: number;
};
//# sourceMappingURL=getFenceParams.d.ts.map