import { ControlsState } from "../systems/ControlsSystem";
export default abstract class ControlsNavigator {
    protected readonly element: HTMLElement;
    isEnabled: boolean;
    protected constructor(element: HTMLElement);
    enable(): void;
    disable(): void;
    protected get isInFocus(): boolean;
    abstract syncWithCamera(prevNavigator: ControlsNavigator): void;
    abstract syncWithState(state: ControlsState): void;
    abstract getCurrentState(): ControlsState;
    abstract lookAtNorth(): void;
    abstract update(deltaTime: number): void;
}
//# sourceMappingURL=ControlsNavigator.d.ts.map