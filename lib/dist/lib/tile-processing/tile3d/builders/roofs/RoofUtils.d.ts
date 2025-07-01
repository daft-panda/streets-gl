import Vec2 from "~/lib/math/Vec2";
import { StraightSkeletonResultPolygon } from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
export declare function calculateRoofNormals(vertices: number[], flip?: boolean): number[];
export declare function calculateSplitsNormals(splits: Vec2[]): Vec2[];
export declare function splitSkeletonPolygon(polygon: StraightSkeletonResultPolygon, splitAt: number): {
    verticesTop: number[];
    verticesBottom: number[];
};
//# sourceMappingURL=RoofUtils.d.ts.map