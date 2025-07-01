import System from "./System";
import { MountedHostInterface } from "./HostInterfaceManager";
export type AbstractSystemType = {
    new (): System;
};
export default class SystemManager {
    private systems;
    private onReadyListeners;
    private hostInterface;
    addSystems(...systemTypes: AbstractSystemType[]): void;
    addSystem(systemType: AbstractSystemType): System;
    updateSystems(deltaTime: number): void;
    getHostInterface(): MountedHostInterface | null;
    setHostInterface(hostInterface: MountedHostInterface): void;
    getSystem<T extends System>(systemType: {
        new (): T;
    }): T;
    onSystemReady<T extends System>(systemType: {
        new (): T;
    }, callback: (system: T) => void): void;
    private runSystemReadyCallbacks;
}
//# sourceMappingURL=SystemManager.d.ts.map