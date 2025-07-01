import Vec2 from "~/lib/math/Vec2";
import GabledRoofBuilder from "~/lib/tile-processing/tile3d/builders/roofs/GabledRoofBuilder";
import { RoofSkirtPolyline } from "~/lib/tile-processing/tile3d/builders/roofs/RoofBuilder";
import { StraightSkeletonResultPolygon } from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
export default class GambrelRoofBuilder extends GabledRoofBuilder {
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
    protected getSkirtPart(edgeStart: Vec2, edgeEnd: Vec2, edgeCenter: Vec2, minHeight: number, height: number, centerHeight: number): RoofSkirtPolyline;
}
//# sourceMappingURL=GambrelRoofBuilder.d.ts.map