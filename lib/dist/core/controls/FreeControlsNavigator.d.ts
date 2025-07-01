import ControlsNavigator from "./ControlsNavigator";
import { ControlsState } from "../systems/ControlsSystem";
import PerspectiveCamera from "~/lib/core/PerspectiveCamera";
import TerrainHeightProvider from "../terrain/TerrainHeightProvider";
export default class FreeControlsNavigator extends ControlsNavigator {
    private readonly terrainHeightProvider;
    private readonly camera;
    private pitch;
    private yaw;
    private forwardKeyPressed;
    private leftKeyPressed;
    private rightKeyPressed;
    private backwardKeyPressed;
    private fastMovementKeyPressed;
    private pitchMinusKeyPressed;
    private pitchPlusKeyPressed;
    private yawMinusKeyPressed;
    private yawPlusKeyPressed;
    private pointerLocked;
    constructor(element: HTMLElement, camera: PerspectiveCamera, terrainHeightProvider: TerrainHeightProvider);
    private addEventListeners;
    lookAtNorth(): void;
    private pointerLockChange;
    private mouseDownEvent;
    private mouseMoveEvent;
    private keyDownEvent;
    private keyUpEvent;
    private getHeightmapValueAtPosition;
    syncWithCamera(prevNavigator: ControlsNavigator): void;
    private applyCameraPitchAndYaw;
    private clampPitchAndYaw;
    enable(): void;
    disable(): void;
    syncWithState(state: ControlsState): void;
    getCurrentState(): ControlsState;
    update(deltaTime: number): void;
}
//# sourceMappingURL=FreeControlsNavigator.d.ts.map