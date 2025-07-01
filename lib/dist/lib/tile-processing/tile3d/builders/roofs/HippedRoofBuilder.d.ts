import RoofBuilder, { RoofGeometry, RoofParams, RoofSkirt } from "~/lib/tile-processing/tile3d/builders/roofs/RoofBuilder";
import Tile3DMultipolygon, { StraightSkeletonResult, StraightSkeletonResultPolygon } from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
import Vec2 from "~/lib/math/Vec2";
export default class HippedRoofBuilder implements RoofBuilder {
    build(params: RoofParams): RoofGeometry;
    protected getSkeletonMaxHeight(skeleton: StraightSkeletonResult): number;
    protected convertSkeletonToVertices({ multipolygon, skeleton, minHeight, height, maxSkeletonHeight, flip, scaleX, scaleY }: {
        multipolygon: Tile3DMultipolygon;
        skeleton: StraightSkeletonResult;
        minHeight: number;
        height: number;
        maxSkeletonHeight: number;
        flip: boolean;
        scaleX: number;
        scaleY: number;
    }): {
        position: number[];
        uv: number[];
        skirt?: RoofSkirt;
    };
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
    protected triangulatePolygon(flatVertices: number[], minHeight: number, height: number, maxSkeletonHeight: number, edgeLine: [Vec2, Vec2], uvScaleX: number, uvScaleY: number, dstModifier?: (n: number) => number): {
        position: number[];
        uv: number[];
    };
    private calculateNormals;
    protected getVertexHeightFromEdge(vertex: Vec2, edge: [Vec2, Vec2], skeletonHeight: number, roofHeight: number): number;
}
//# sourceMappingURL=HippedRoofBuilder.d.ts.map