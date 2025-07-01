import HippedRoofBuilder from "~/lib/tile-processing/tile3d/builders/roofs/HippedRoofBuilder";
import { RoofSkirt, RoofSkirtPolyline } from "~/lib/tile-processing/tile3d/builders/roofs/RoofBuilder";
import Tile3DMultipolygon, { StraightSkeletonResult } from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
import Vec2 from "~/lib/math/Vec2";
export default class GabledRoofBuilder extends HippedRoofBuilder {
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
    private buildSkirtFromSegmentsParams;
    protected getSkirtPart(edgeStart: Vec2, edgeEnd: Vec2, edgeCenter: Vec2, minHeight: number, height: number, centerHeight: number): RoofSkirtPolyline;
}
//# sourceMappingURL=GabledRoofBuilder.d.ts.map