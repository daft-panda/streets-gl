import {atom, Atom, createStore} from "jotai";

export interface StateStorage {
	getStateFieldValue(key: string): any;
	setStateFieldValue(key: string, value: any): void;
	addStateFieldListener(key: string, listener: (value: any) => void): void;
	removeStateFieldListener(key: string, listener: (value: any) => void): void;
}

// Create a store instance that we can use to trigger updates
let globalStore: ReturnType<typeof createStore> | null = null;

// Create a refresh atom that triggers re-renders when external state changes
const refreshAtom = atom(0);

export const setGlobalStore = (store: ReturnType<typeof createStore>) => {
	globalStore = store;
};

export const createSyncedAtom = <T>(key: string, storage: StateStorage, defaultValue?: T): Atom<T> => {
	const initialValue = storage.getStateFieldValue(key);
	
	const syncedAtom = atom(
		(get) => {
			// Subscribe to refresh atom to trigger re-reads
			get(refreshAtom);
			const currentStorageValue = storage.getStateFieldValue(key);
			return currentStorageValue !== undefined ? currentStorageValue : defaultValue;
		},
		(get, set, newValue: T) => {
			storage.setStateFieldValue(key, newValue);
			// Trigger a refresh for all atoms
			set(refreshAtom, (prev) => prev + 1);
		}
	);

	// Set up listener for external storage changes
	const listener = (newValue: T) => {
		if (globalStore) {
			// Trigger refresh to update all atoms
			globalStore.set(refreshAtom, (prev) => prev + 1);
		}
	};
	
	storage.addStateFieldListener(key, listener);

	return syncedAtom;
};