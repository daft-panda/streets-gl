import System from "./System";
import { AbstractSystemType } from "./SystemManager";
export interface HostInterfaceParameters {
    mapTime: Date | number;
    highlightObjects: {
        osmIds: number[];
    };
    drivingMode?: {
        enabled: boolean;
        targetOsmWayIds?: number[];
        speed?: number;
        autoFollow?: boolean;
    };
}
export interface HostInterface {
    canvas: HTMLCanvasElement;
    systems: {
        vehicle?: boolean;
        picking?: boolean;
        driving?: boolean;
    };
    eventHandlers: {
        fileLoadingProgressUpdate: (percentDone: number) => void;
        loadingFile: (fileName: string) => void;
        frameTimeUpdate: (frameTime: number) => void;
        activeFeatureChanged: (type: number | null, id?: number) => void;
    };
    parameterProvider: (deltaTime: number) => HostInterfaceParameters;
    baseUrl?: string;
    startPosition?: {
        lat: number;
        lon: number;
        pitch?: number;
        yaw?: number;
        distance?: number;
    };
}
export interface MountedHostInterface {
    canvas: HTMLCanvasElement;
    eventHandlers: {
        fileLoadingProgressUpdate: (percentDone: number) => void;
        loadingFile: (fileName: string) => void;
        frameTimeUpdate: (frameTime: number) => void;
        activeFeatureChanged: (type: number | null, id?: number) => void;
    };
    parameters: () => HostInterfaceParameters;
    baseUrl?: string;
    startPosition?: {
        lat: number;
        lon: number;
        pitch?: number;
        yaw?: number;
        distance?: number;
    };
}
export interface HostInterfaceManagerInterface {
    init(hostInterface: HostInterface): Promise<void>;
    addSystem(system: AbstractSystemType): System;
    stopRendering(): void;
    startRendering(): void;
}
export default class HostInterfaceManager implements HostInterfaceManagerInterface {
    private systemManager;
    private hostInterface;
    private loop;
    private time;
    private animationFrameRequestId;
    private hostParameterProvider;
    private cachedSystemParameters;
    constructor();
    init(hostInterface: HostInterface): Promise<void>;
    update(rafTime?: number): void;
    addSystem(system: AbstractSystemType): System;
    stopRendering(): void;
    startRendering(): void;
    parameters(): HostInterfaceParameters | null;
    host(): MountedHostInterface;
}
//# sourceMappingURL=HostInterfaceManager.d.ts.map