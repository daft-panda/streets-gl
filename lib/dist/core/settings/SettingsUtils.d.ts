import { SettingsObject } from "./SettingsObject";
import { SettingsSchema } from "./SettingsSchema";
export declare function fetchSettingsFromLocalStorage(): Record<string, any>;
export declare function saveSettingsToLocalStorage(settings: SettingsObject): void;
export declare function makeSettingsMatchSchema(stored: Record<string, any>, schema: SettingsSchema): SettingsObject;
//# sourceMappingURL=SettingsUtils.d.ts.map