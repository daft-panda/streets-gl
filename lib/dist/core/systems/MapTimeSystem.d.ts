import System from "../System";
import Vec3 from "~/lib/math/Vec3";
import Mat4 from "~/lib/math/Mat4";
export default class MapTimeSystem extends System {
    private state;
    private staticLights;
    private time;
    lightDirection: Vec3;
    lightIntensity: number;
    ambientIntensity: number;
    sunDirection: Vec3;
    moonDirection: Vec3;
    skyDirection: [Vec3, Vec3, Vec3];
    skyDirectionTarget: [Vec3, Vec3, Vec3];
    skyDirectionMatrix: Mat4;
    private transitionProgress;
    private sunTransitionStart;
    private moonTransitionStart;
    private skyTransitionStart;
    windowLightThreshold: number;
    postInit(): void;
    setState(state: number): void;
    private getTargetSunAndMoonDirection;
    private updateTargetSkyDirection;
    private updateSkyDirectionMatrix;
    private doTransition;
    private getSmoothedTransitionProgress;
    private updateTime;
    update(deltaTime: number): void;
}
//# sourceMappingURL=MapTimeSystem.d.ts.map