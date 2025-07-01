import { SettingsObjectEntry } from "./SettingsObject";
export default class SettingsEventEmitter {
    private readonly listeners;
    updateSetting(key: string, value: SettingsObjectEntry): void;
    onChange(key: string, callback: (value: SettingsObjectEntry) => void): void;
    removeOnChangeListener(key: string, callback: (value: SettingsObjectEntry) => void): void;
}
//# sourceMappingURL=SettingsEventEmitter.d.ts.map