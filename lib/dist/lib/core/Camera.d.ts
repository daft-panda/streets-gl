import Object3D from "./Object3D";
import Mat4 from "../math/Mat4";
import Plane from "./Plane";
import Vec3 from "~/lib/math/Vec3";
import AABB3D from "~/lib/math/AABB3D";
export default abstract class Camera extends Object3D {
    projectionMatrix: Mat4;
    projectionMatrixInverse: Mat4;
    jitteredProjectionMatrix: Mat4;
    jitteredProjectionMatrixInverse: Mat4;
    matrixWorldInverse: Mat4;
    frustumPlanes: Plane[];
    zoomFactor: number;
    protected constructor();
    updateMatrixWorldInverse(): void;
    updateProjectionMatrixInverse(): void;
    abstract updateProjectionMatrix(): void;
    updateFrustum(): void;
    frustumContainsPoint(point: Vec3): boolean;
    zoom(factor: number): void;
    updateJitteredProjectionMatrix(frameIndex: number, width: number, height: number, factor?: number): void;
    isFrustumIntersectsBoundingBox(boundingBox: AABB3D): boolean;
}
//# sourceMappingURL=Camera.d.ts.map