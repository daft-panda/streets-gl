import AABB from "~/lib/math/AABB";
import Vec2 from "~/lib/math/Vec2";
export default class AABB2D extends AABB<Vec2> {
    constructor(min?: Vec2, max?: Vec2);
    includePoint(point: Vec2): void;
    includeAABB(aabb: AABB2D): void;
    includesPoint(point: Vec2): boolean;
    intersectsAABB(aabb: AABB2D): boolean;
    clone(): AABB2D;
    getCenter(): Vec2;
}
//# sourceMappingURL=AABB2D.d.ts.map