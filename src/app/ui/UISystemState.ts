
import { SettingsSchema } from "streets-gl-lib/dist/lib/src/core/settings/SettingsSchema";
import { OverpassEndpoint } from "streets-gl-lib/dist/lib/src/core/systems/TileLoadingSystem";
import RenderGraphSnapshot from "~/app/ui/RenderGraphSnapshot";

export default interface UISystemState {
	activeFeature: {type: number; id: number};
	fps: number;
	fpsSmooth: number;
	frameTime: number;
	frameTimeSmooth: number;
	mapTime: number;
	mapTimeMultiplier: number;
	mapTimeMode: number;
	renderGraph: RenderGraphSnapshot;
	resourcesLoadingProgress: number;
	resourceInProgressPath: string;
	northDirection: number;
	settingsSchema: SettingsSchema;
	overpassEndpoints: OverpassEndpoint[];
	dataTimestamp: Date;
}
