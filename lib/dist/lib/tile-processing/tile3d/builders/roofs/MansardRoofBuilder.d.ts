import HippedRoofBuilder from "~/lib/tile-processing/tile3d/builders/roofs/HippedRoofBuilder";
import Vec2 from "~/lib/math/Vec2";
import { StraightSkeletonResultPolygon } from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
export default class MansardRoofBuilder extends HippedRoofBuilder {
    protected splitProgress: number;
    protected edgeBumpFactor: number;
    protected convertSkeletonPolygonToVertices({ polygon, minHeight, height, maxSkeletonHeight, scaleX, scaleY }: {
        polygon: StraightSkeletonResultPolygon;
        minHeight: number;
        height: number;
        maxSkeletonHeight: number;
        scaleX: number;
        scaleY: number;
    }): {
        position: number[];
        uv: number[];
    };
    protected triangulateTopAndBottom({ verticesBottom, verticesTop, minHeight, height, maxSkeletonHeight, edge, scaleX, scaleY }: {
        verticesBottom: number[];
        verticesTop: number[];
        minHeight: number;
        height: number;
        maxSkeletonHeight: number;
        edge: [Vec2, Vec2];
        scaleX: number;
        scaleY: number;
    }): {
        position: number[];
        uv: number[];
    };
    private calculateRoofHeightBottom;
    private calculateRoofHeightTop;
}
//# sourceMappingURL=MansardRoofBuilder.d.ts.map