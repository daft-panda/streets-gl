import Vec3 from "~/lib/math/Vec3";
import System from "../System";
export interface ControlsState {
    x: number;
    z: number;
    pitch: number;
    yaw: number;
    distance: number;
}
export declare enum NavigationMode {
    Ground = 0,
    Free = 1,
    Slippy = 2
}
export default class ControlsSystem extends System {
    private element;
    mode: NavigationMode;
    private camera;
    private tick;
    target: Vec3;
    private state;
    private urlHandler;
    private wheelZoomScale;
    private wheelZoomScaleTarget;
    private groundNavigator;
    private freeNavigator;
    private slippyNavigator;
    private activeNavigator;
    constructor();
    postInit(): void;
    lookAtNorth(): void;
    private initCameraAndNavigators;
    private initStateFromHash;
    getLatLon(): {
        lat: number;
        lon: number;
    };
    setLatLon(lat: number, lon: number): void;
    setState(lat: number, lon: number, pitch: number, yaw: number, distance: number): void;
    private updateStateFromPosition;
    private updatePositionFromState;
    private keyDownEvent;
    private mouseDownEvent;
    private mouseUpEvent;
    private updateHash;
    getCurrentStateHash(): string;
    get isSlippyMapVisible(): boolean;
    get isTilesVisible(): boolean;
    get slippyMapAndTilesFactor(): number;
    get northDirection(): number;
    getGroundControlsTarget(): Vec3;
    update(deltaTime: number): void;
}
//# sourceMappingURL=ControlsSystem.d.ts.map