import Vec2 from "~/lib/math/Vec2";
import Intersection from "~/lib/road-graph/Intersection";
export default class LinkedVertex {
    next: LinkedVertex;
    prev: LinkedVertex;
    vector: Vec2;
    private intersection;
    constructor(vector: Vec2);
    setIntersection(intersection: Intersection): void;
    getIntersection(): Intersection;
}
//# sourceMappingURL=LinkedVertex.d.ts.map