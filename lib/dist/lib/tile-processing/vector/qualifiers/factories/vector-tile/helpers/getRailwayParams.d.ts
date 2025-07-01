import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default function getRailwayParams(tags: VectorTile.FeatureTags): {
    type: VectorPolylineDescriptor['pathType'];
    width: number;
};
//# sourceMappingURL=getRailwayParams.d.ts.map