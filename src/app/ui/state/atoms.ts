import {atom, Atom} from "jotai";
import {createSyncedAtom, StateStorage} from "~/app/ui/state/utils";
import RenderGraphSnapshot from "~/app/ui/RenderGraphSnapshot";
import { SettingsObjectEntry } from "streets-gl-lib/dist/lib/src/core/settings/SettingsObject";
import { SettingsSchema } from "streets-gl-lib/dist/lib/src/core/settings/SettingsSchema";
import { OverpassEndpoint } from "streets-gl-lib/dist/lib/src/core/systems/TileLoadingSystem";

export interface AtomsCollection {
	activeFeature: Atom<{type: number; id: number}>;
	fps: Atom<number>;
	frameTime: Atom<number>;
	mapTime: Atom<number>;
	mapTimeMultiplier: Atom<number>;
	mapTimeMode: Atom<number>;
	resourcesLoadingProgress: Atom<number>;
	resourceInProgressPath: Atom<string>;
	renderGraph: Atom<RenderGraphSnapshot>;
	northDirection: Atom<number>;
	settingsObject: (param: string) => Atom<SettingsObjectEntry>;
	settingsSchema: Atom<SettingsSchema>;
	overpassEndpoints: Atom<OverpassEndpoint[]>;
	dataTimestamp: Atom<Date>;
}

// Cache for settings objects to simulate atomFamily
const settingsObjectCache = new Map<string, Atom<SettingsObjectEntry>>();

export const getAtoms = (
	commonStorage: StateStorage,
	settingsStorage: StateStorage
): AtomsCollection => {
	return {
		activeFeature: createSyncedAtom('activeFeature', commonStorage, {type: 0, id: 0}),
		fps: createSyncedAtom('fpsSmooth', commonStorage, 0),
		frameTime: createSyncedAtom('frameTimeSmooth', commonStorage, 0),
		mapTime: createSyncedAtom('mapTime', commonStorage, 0),
		mapTimeMultiplier: createSyncedAtom('mapTimeMultiplier', commonStorage, 1),
		mapTimeMode: createSyncedAtom('mapTimeMode', commonStorage, 0),
		resourcesLoadingProgress: createSyncedAtom('resourcesLoadingProgress', commonStorage, 0),
		resourceInProgressPath: createSyncedAtom('resourceInProgressPath', commonStorage, ''),
		renderGraph: createSyncedAtom('renderGraph', commonStorage, null),
		northDirection: createSyncedAtom('northDirection', commonStorage, 0),
		settingsObject: (key: string) => {
			if (!settingsObjectCache.has(key)) {
				settingsObjectCache.set(key, createSyncedAtom(key, settingsStorage, {} as SettingsObjectEntry));
			}
			return settingsObjectCache.get(key)!;
		},
		settingsSchema: createSyncedAtom('settingsSchema', commonStorage, {} as SettingsSchema),
		overpassEndpoints: createSyncedAtom('overpassEndpoints', commonStorage, []),
		dataTimestamp: createSyncedAtom('dataTimestamp', commonStorage, new Date()),
	};
}
