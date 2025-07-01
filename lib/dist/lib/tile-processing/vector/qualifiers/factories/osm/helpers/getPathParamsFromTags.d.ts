import { VectorPolylineDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export default function getPathParamsFromTags(tags: Record<string, string>): {
    type: VectorPolylineDescriptor['pathType'];
    material: VectorPolylineDescriptor['pathMaterial'];
    defaultLanes: number;
    defaultWidth?: number;
    defaultIsMarked: boolean;
};
//# sourceMappingURL=getPathParamsFromTags.d.ts.map