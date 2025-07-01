import RoofBuilder, { RoofGeometry, RoofParams } from "~/lib/tile-processing/tile3d/builders/roofs/RoofBuilder";
import Vec2 from "~/lib/math/Vec2";
export default abstract class OrientedRoofBuilder implements RoofBuilder {
    protected abstract splits: Vec2[];
    protected abstract isSmooth: boolean;
    protected abstract respectDirection: boolean;
    private splitsNormals;
    build(params: RoofParams): RoofGeometry;
    private processTriangle;
    private getSplitLine;
    private processRoofRing;
    private splitTriangle;
    private getSplitRingMaxDstToLine;
    private getSkirt;
    private getPointHeight;
    private calculateSplitsNormals;
}
//# sourceMappingURL=OrientedRoofBuilder.d.ts.map