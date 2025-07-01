import SettingsContainer from "../settings/SettingsContainer";
import { SettingsSchema } from "../settings/SettingsSchema";
import System from "../System";
export default class SettingsSystem extends System {
    private readonly settingsSchema;
    private readonly settingsContainer;
    constructor();
    postInit(): void;
    get settings(): SettingsContainer;
    get schema(): SettingsSchema;
    resetSettings(): void;
    update(deltaTime: number): void;
}
//# sourceMappingURL=SettingsSystem.d.ts.map