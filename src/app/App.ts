import { AbstractSystemType } from 'streets-gl-lib/dist/lib/src/core/SystemManager';
import UISystem from "./systems/UISystem";
import { createHostInterfaceManager, HostInterface, HostInterfaceManagerInterface } from "streets-gl-lib";
import System from "streets-gl-lib/dist/lib/src/core/System";

class App {
	private hostInterfaceSystem: HostInterfaceManagerInterface;
	private canvas: HTMLCanvasElement;
	private uiSystem: UISystem;

	public constructor() {
		this.init();
	}

	private async init(): Promise<void> {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
		
		// Initialize the core library
		this.hostInterfaceSystem = createHostInterfaceManager();
		this.uiSystem = this.hostInterfaceSystem.addSystem(UISystem) as UISystem;
		
		// Set up host interface with canvas and event handlers
		const hi: HostInterface = {
			canvas: this.canvas,
			systems: {
				vehicle: true,
				picking: true
			},
			eventHandlers: {
				fileLoadingProgressUpdate: (percentDone: number): void => {
					this.uiSystem.setResourcesLoadingProgress(percentDone);
				},
				loadingFile: (fileName: string): void => {
					this.uiSystem.setResourceInProgressPath(fileName);
				},
				frameTimeUpdate: (frameTime: number): void => {
					this.uiSystem.updateFrameTime(frameTime);
				},
				activeFeatureChanged(_type, _id): void {
					
				},
			},
			// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
			parameterProvider: (_deltaTime: number) => {
				// This is where we can provide parameters to the renderer
				return {
					highlightObjects: {
						osmIds: [] // ID of objects to highlight
					},
					mapTime: 0
				};
			},
			startPosition: {
				lat: 51.0538788,
				lon: 3.7199623,
			}
		};
		
		await this.hostInterfaceSystem.init(hi);
		
		
		// Handle window resize
		window.addEventListener('resize', this.handleResize.bind(this));
	}
	
	private handleResize(): void {
		// Update canvas dimensions
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		
		// Update UI dimensions
		// this.uiSystem.handleResize();
	}
}

export default new App();