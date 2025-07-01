import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default function getWallParams(tags: VectorTile.FeatureTags): {
    material: VectorPolylineDescriptor['wallType'];
    height: number;
    minHeight: number;
};
//# sourceMappingURL=getWallParams.d.ts.map