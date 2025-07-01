import { ControlsState } from "../systems/ControlsSystem";
export default class URLControlsStateHandler {
    private hash;
    serializeControlsState(state: ControlsState): string;
    setHashFromState(state: ControlsState): void;
    getStateFromHash(): [ControlsState, boolean];
}
//# sourceMappingURL=URLControlsStateHandler.d.ts.map