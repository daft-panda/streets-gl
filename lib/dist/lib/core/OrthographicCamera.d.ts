import Camera from "./Camera";
export default class OrthographicCamera extends Camera {
    left: number;
    right: number;
    bottom: number;
    top: number;
    near: number;
    far: number;
    constructor({ left, right, bottom, top, near, far }: {
        left: number;
        right: number;
        bottom: number;
        top: number;
        near: number;
        far: number;
    });
    updateProjectionMatrix(): void;
}
//# sourceMappingURL=OrthographicCamera.d.ts.map