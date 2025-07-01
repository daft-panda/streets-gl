import Camera from "./Camera";
export default class PerspectiveCamera extends Camera {
    fov: number;
    near: number;
    far: number;
    aspect: number;
    constructor({ fov, near, far, aspect }: {
        fov: number;
        near: number;
        far: number;
        aspect: number;
    });
    updateProjectionMatrix(): void;
    getFocalLength(sensorHeight: number): number;
}
//# sourceMappingURL=PerspectiveCamera.d.ts.map