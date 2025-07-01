import Object3D from "~/lib/core/Object3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from '~/lib/renderer/abstract-renderer/AbstractRenderer';
import Camera from "~/lib/core/Camera";
import Vec3 from "~/lib/math/Vec3";
import AABB3D from "~/lib/math/AABB3D";
export default abstract class RenderableObject3D extends Object3D {
    abstract mesh: AbstractMesh;
    boundingBox: AABB3D;
    abstract updateMesh(renderer: AbstractRenderer): void;
    abstract isMeshReady(): boolean;
    draw(): void;
    setBoundingBox(min: Vec3, max: Vec3): void;
    inCameraFrustum(camera: Camera): boolean;
}
//# sourceMappingURL=RenderableObject3D.d.ts.map