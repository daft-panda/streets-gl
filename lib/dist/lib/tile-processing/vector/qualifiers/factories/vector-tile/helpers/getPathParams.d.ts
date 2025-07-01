import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export default function getPathParams(tags: VectorTile.FeatureTags): {
    type: VectorPolylineDescriptor['pathType'];
    material: VectorPolylineDescriptor['pathMaterial'];
    defaultLanes: number;
    defaultWidth?: number;
    defaultIsMarked: boolean;
};
//# sourceMappingURL=getPathParams.d.ts.map