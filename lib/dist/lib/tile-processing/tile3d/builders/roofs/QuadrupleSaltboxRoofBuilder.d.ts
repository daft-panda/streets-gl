import Vec2 from "~/lib/math/Vec2";
import MansardRoofBuilder from "~/lib/tile-processing/tile3d/builders/roofs/MansardRoofBuilder";
export default class QuadrupleSaltboxRoofBuilder extends MansardRoofBuilder {
    protected splitProgress: number;
    protected edgeBumpFactor: number;
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
}
//# sourceMappingURL=QuadrupleSaltboxRoofBuilder.d.ts.map