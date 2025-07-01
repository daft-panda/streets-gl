import { SettingsObject, SettingsObjectEntry } from "./SettingsObject";
export default class SettingsContainer {
    private readonly emitter;
    private readonly settingsObject;
    constructor(settingsObject: SettingsObject);
    get(key: string): SettingsObjectEntry;
    update(key: string, value: SettingsObjectEntry): void;
    onChange(key: string, callback: (value: SettingsObjectEntry) => void, isImmediate?: boolean): void;
    removeOnChangeListener(key: string, callback: (value: SettingsObjectEntry) => void): void;
    private saveSettings;
}
//# sourceMappingURL=SettingsContainer.d.ts.map