import System from "./System";
import SystemManager, { AbstractSystemType } from "./SystemManager";
import ResourceLoader, { ResourceJSON } from "./world/ResourceLoader";
import resourcesList from '../../../resources/resources.json';
import ControlsSystem from "./systems/ControlsSystem";
import CursorStyleSystem from "./systems/CursorStyleSystem";
import MapTimeSystem from "./systems/MapTimeSystem";
import MapWorkerSystem from "./systems/MapWorkerSystem";
import PickingSystem from "./systems/PickingSystem";
import RenderSystem from "./systems/RenderSystem";
import SceneSystem from "./systems/SceneSystem";
import SettingsSystem from "./systems/SettingsSystem";
import SlippyMapSystem from "./systems/SlippyMapSystem";
import TerrainSystem from "./systems/TerrainSystem";
import TileLoadingSystem from "./systems/TileLoadingSystem";
import TileObjectsSystem from "./systems/TileObjectsSystem";
import TileSystem from "./systems/TileSystem";
import VehicleSystem from "./systems/VehicleSystem";

export interface HostInterfaceParameters {
    mapTime: number;
    highlightObjects: {
        osmIds: [];
    };
}

export interface HostInterface {
    canvas: HTMLCanvasElement;
    systems: {
        vehicle?: boolean;
        picking?: boolean;
    };
    eventHandlers: {
        fileLoadingProgressUpdate: (percentDone: number) => void;
        loadingFile: (fileName: string) => void;
        frameTimeUpdate: (frameTime: number) => void;
        activeFeatureChanged: (type: number | null, id?: number) => void;
    };
    parameterProvider: (deltaTime: number) => HostInterfaceParameters;
    baseUrl?: string;
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
}

export interface HostInterfaceManagerInterface {
    init(hostInterface: HostInterface): Promise<void>;
    addSystem(system: AbstractSystemType): System;
    stopRendering(): void;
    startRendering(): void;
}


export default class HostInterfaceManager implements HostInterfaceManagerInterface {
    private systemManager: SystemManager;
    private hostInterface: MountedHostInterface;
    private loop = (deltaTime: number): void => this.update(deltaTime);
	private time = 0;
    private animationFrameRequestId: number;
    private hostParameterProvider: (deltaTime: number) => HostInterfaceParameters;
    private cachedSystemParameters: HostInterfaceParameters | null = null;

    constructor() {
        this.systemManager = new SystemManager();
        this.systemManager.addSystems(SettingsSystem);
    }

	public async init(hostInterface: HostInterface): Promise<void> {
        this.hostParameterProvider = hostInterface.parameterProvider;

        this.hostInterface = {
            parameters: () => {
                return this.cachedSystemParameters;
            },
            ...hostInterface
        };

		this.systemManager.setHostInterface(this.hostInterface);
        
        ResourceLoader.setBaseUrl(this.hostInterface.baseUrl);
		ResourceLoader.addFromJSON(resourcesList as ResourceJSON);
		await ResourceLoader.load({
			onFileLoad: (loaded: number, total: number) => {
                this.hostInterface.eventHandlers.fileLoadingProgressUpdate(loaded / total);
			},
			onLoadedFileNameChange: (name: string) => {
				this.hostInterface.eventHandlers.loadingFile(name);
			}
		});

        this.systemManager.addSystems(
            ControlsSystem,
            MapTimeSystem,
            TerrainSystem,
            TileSystem,
            SceneSystem,
            CursorStyleSystem,
            TileObjectsSystem,
            SlippyMapSystem,
            RenderSystem,
            MapWorkerSystem,
            TileLoadingSystem,
        );

        if (hostInterface.systems.picking) {
            this.systemManager.addSystems(PickingSystem);
        }

        if (hostInterface.systems.vehicle) {
            this.systemManager.addSystems(VehicleSystem);
        }

		this.update();
	}

	public update(rafTime = 0): void {
	    this.animationFrameRequestId = requestAnimationFrame(this.loop);

		const frameStart = performance.now();
		const deltaTime = (rafTime - this.time) / 1e3;
		this.time = rafTime;
        
        this.cachedSystemParameters = this.hostParameterProvider(deltaTime);
		this.systemManager.updateSystems(deltaTime);

		const frameTime = performance.now() - frameStart;
		this.hostInterface.eventHandlers.frameTimeUpdate(frameTime);
	}

    public addSystem(system: AbstractSystemType): System {
        return this.systemManager.addSystem(system);
    }

    public stopRendering(): void {
        cancelAnimationFrame(this.animationFrameRequestId);
    }

    public startRendering(): void {
        this.animationFrameRequestId = requestAnimationFrame(this.loop);
    }

    public parameters(): HostInterfaceParameters | null {
        return this.cachedSystemParameters;
    }

    public host(): MountedHostInterface {
        return this.hostInterface;
    }
}