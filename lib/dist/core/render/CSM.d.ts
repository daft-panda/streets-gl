import Object3D from "~/lib/core/Object3D";
import PerspectiveCamera from "~/lib/core/PerspectiveCamera";
import Vec3 from "~/lib/math/Vec3";
import CSMCascadeCamera from "./CSMCascadeCamera";
export default class CSM extends Object3D {
    private readonly camera;
    near: number;
    far: number;
    cascades: number;
    resolution: number;
    private readonly shadowBias;
    private readonly shadowNormalBias;
    biasScale: number;
    direction: Vec3;
    intensity: number;
    cascadeCameras: CSMCascadeCamera[];
    private mainFrustum;
    private frustums;
    private breaks;
    private fadeOffsets;
    constructor({ camera, near, far, cascades, resolution, shadowBias, shadowNormalBias, direction }: {
        camera: PerspectiveCamera;
        near: number;
        far: number;
        cascades: number;
        resolution: number;
        shadowBias: number;
        shadowNormalBias: number;
        direction?: Vec3;
    });
    updateCascades(): void;
    private createCameras;
    private updateFrustums;
    private updateBreaks;
    private updateShadowBounds;
    private checkForCameraChanges;
    private fixDirection;
    update(): void;
    private getBreaksForUniform;
    getUniformsBuffers(): Record<string, Float32Array>;
    private static uniformSplit;
    private static logarithmicSplit;
    private static practicalSplit;
}
//# sourceMappingURL=CSM.d.ts.map