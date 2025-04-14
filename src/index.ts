export interface HostInterfaceSystemParameters {
    highlightObjects: {
        osmIds: [];
    };
}

export interface HostInterface {
    canvas: HTMLCanvasElement;
    systems: {
        vehicle: boolean;
        picking: boolean;
    };
    eventHandlers: {
        fileLoadingProgressUpdate: (percentDone: number) => void;
        loadingFile: (fileName: string) => void;
        frameTimeUpdate: (frameTime: number) => void;
    };
    parameterProvider: (deltaTime: number) => HostInterfaceSystemParameters;
}

export interface HostInterfaceSystemInterface {
    init(hostInterface: HostInterface): void;
    stopRendering(): void;
    startRendering(): void;
}

export function createHostInterfaceSystem(): HostInterfaceSystemInterface {
    const HostInterfaceSystem = require("./app/systems/HostInterfaceSystem").default;
    return new HostInterfaceSystem();
}