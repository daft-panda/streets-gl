import ControlsNavigator from "./ControlsNavigator";
import CursorStyleSystem from "../systems/CursorStyleSystem";
import { ControlsState } from "../systems/ControlsSystem";
import PerspectiveCamera from "~/lib/core/PerspectiveCamera";
import TerrainHeightProvider from "../terrain/TerrainHeightProvider";
export default class SlippyControlsNavigator extends ControlsNavigator {
    readonly camera: PerspectiveCamera;
    private readonly cursorStyleSystem;
    private readonly terrainHeightProvider;
    distance: number;
    private distanceTarget;
    private position;
    private isPointerDown;
    private pointerPosition;
    switchToGround: boolean;
    constructor(element: HTMLElement, camera: PerspectiveCamera, cursorStyleSystem: CursorStyleSystem, terrainHeightProvider: TerrainHeightProvider);
    private addEventListeners;
    lookAtNorth(): void;
    private mouseDownEvent;
    private doubleClickEvent;
    private mouseLeaveEvent;
    private mouseUpEvent;
    private mouseMoveEvent;
    private wheelEvent;
    private updateDistance;
    private getMaxHeight;
    private keyDownEvent;
    private keyUpEvent;
    private updateCameraProjectionMatrix;
    syncWithCamera(prevNavigator: ControlsNavigator): void;
    syncWithState(state: ControlsState): void;
    getCurrentState(): ControlsState;
    private getCurrentWorldHeight;
    update(deltaTime: number): void;
}
//# sourceMappingURL=SlippyControlsNavigator.d.ts.map