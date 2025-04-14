import System from "../System";
import SystemManager from "../SystemManager";
import ResourceLoader, { ResourceJSON } from "../world/ResourceLoader";
import resourcesList from '../../resources/resources.json';
import ControlsSystem from "./ControlsSystem";
import CursorStyleSystem from "./CursorStyleSystem";
import MapTimeSystem from "./MapTimeSystem";
import MapWorkerSystem from "./MapWorkerSystem";
import PickingSystem from "./PickingSystem";
import RenderSystem from "./RenderSystem";
import SceneSystem from "./SceneSystem";
import SettingsSystem from "./SettingsSystem";
import SlippyMapSystem from "./SlippyMapSystem";
import TerrainSystem from "./TerrainSystem";
import TileLoadingSystem from "./TileLoadingSystem";
import TileObjectsSystem from "./TileObjectsSystem";
import TileSystem from "./TileSystem";
import VehicleSystem from "./VehicleSystem";

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

export default class HostInterfaceSystem extends System {
    private hostInterface: HostInterface;
    private loop = (deltaTime: number): void => this.update(deltaTime);
	private time = 0;
    private animationFrameRequestId: number;
    private cachedSystemParameters: HostInterfaceSystemParameters | null = null;
    
    public constructor(hostInterface: HostInterface) {
        super();
        this.hostInterface = hostInterface;
    }

    public override postInit(): void {
        
    }

	public async init(): Promise<void> {
        if (this.systemManager) {
            throw new Error("The HostInterfaceSystem needs to be the entry point, it cannot operate on a running instance");
        }
		this.systemManager = new SystemManager();

		this.systemManager.addSystems(SettingsSystem);

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

        if (this.hostInterface.systems.picking) {
            this.systemManager.addSystems(PickingSystem);
        }

        if (this.hostInterface.systems.vehicle) {
            this.systemManager.addSystems(VehicleSystem);
        }

		this.update();
	}

	public override update(rafTime = 0): void {
	    this.animationFrameRequestId = requestAnimationFrame(this.loop);

		const frameStart = performance.now();
		const deltaTime = (rafTime - this.time) / 1e3;
		this.time = rafTime;
        if (this.hostInterface.parameterProvider) {
            this.cachedSystemParameters = this.hostInterface.parameterProvider(deltaTime);
        }

		this.systemManager.updateSystems(deltaTime);

		const frameTime = performance.now() - frameStart;
		this.hostInterface.eventHandlers.frameTimeUpdate(frameTime);
	}

    public stopRendering(): void {
        cancelAnimationFrame(this.animationFrameRequestId);
    }

    public startRendering(): void {
        this.animationFrameRequestId = requestAnimationFrame(this.loop);
    }

    protected systemParameters(): HostInterfaceSystemParameters | null {
        return this.cachedSystemParameters;
    }
}