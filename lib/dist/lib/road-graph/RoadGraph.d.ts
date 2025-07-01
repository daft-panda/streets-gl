import Vec2 from "~/lib/math/Vec2";
import Road from "~/lib/road-graph/Road";
import Intersection from "~/lib/road-graph/Intersection";
export default class RoadGraph {
    private groups;
    private segmentGroups;
    addRoad(vertices: Vec2[], width: number, groupId: number): Road;
    private getGroup;
    private getSegmentGroup;
    initIntersections(): void;
    buildIntersectionPolygons(groupId: number): {
        intersection: Intersection;
        polygon: Vec2[];
    }[];
    private getClosestProjectionGlobal;
    getClosestProjection(point: Vec2, groupId?: number): Vec2;
}
//# sourceMappingURL=RoadGraph.d.ts.map