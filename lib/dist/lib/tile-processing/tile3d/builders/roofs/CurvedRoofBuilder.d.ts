import RoofBuilder, { RoofGeometry, RoofParams } from "./RoofBuilder";
import Vec2 from "~/lib/math/Vec2";
export default abstract class CurvedRoofBuilder implements RoofBuilder {
    protected readonly abstract splits: Vec2[];
    protected readonly abstract isEdgy: boolean;
    private splitsNormals;
    build(params: RoofParams): RoofGeometry;
    private getRoofPartPoints;
    private buildRoofPart;
    private getCenter;
    private getPolygonSplitFlags;
    private splitPolygon;
    private calculateSplitsNormals;
}
//# sourceMappingURL=CurvedRoofBuilder.d.ts.map