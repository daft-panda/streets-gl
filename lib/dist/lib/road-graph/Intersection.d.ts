import Vec2 from "~/lib/math/Vec2";
import LinkedVertex from "~/lib/road-graph/LinkedVertex";
import Road from "~/lib/road-graph/Road";
export interface IntersectionDirection {
    road: Road;
    vertex: LinkedVertex;
    trimmedEnd?: Vec2;
}
export default class Intersection {
    center: Vec2;
    directions: IntersectionDirection[];
    userData: Record<string, any>;
    constructor(center: Vec2);
    addDirection(road: Road, vertex: LinkedVertex): void;
    getPolygon(): Vec2[];
}
//# sourceMappingURL=Intersection.d.ts.map