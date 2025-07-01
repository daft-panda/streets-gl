import AABB from "~/lib/math/AABB";
import Vec3 from "~/lib/math/Vec3";
import Mat4 from "~/lib/math/Mat4";
import Frustum from "~/lib/core/Frustum";
export default class AABB3D extends AABB<Vec3> {
    constructor(min?: Vec3, max?: Vec3);
    includePoint(point: Vec3): void;
    includeAABB(aabb: AABB3D): void;
    includesPoint(point: Vec3): boolean;
    intersectsAABB(aabb: AABB3D): boolean;
    clone(): AABB3D;
    move(x: number, y: number, z: number): AABB3D;
    scaleScalar(factor: number): AABB3D;
    getCornerPoints(): Vec3[];
    rotate2D(angle: number): AABB3D;
    rotateEuler(x: number, y: number, z: number): AABB3D;
    scale(x: number, y: number, z: number): AABB3D;
    toSpace(matrix: Mat4): AABB3D;
    getCenter(): Vec3;
    static fromFrustum(frustum: Frustum): AABB3D;
}
//# sourceMappingURL=AABB3D.d.ts.map