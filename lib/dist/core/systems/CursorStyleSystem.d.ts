import System from "../System";
export default class CursorStyleSystem extends System {
    private element;
    private grabbingEnabled;
    private pointerEnabled;
    postInit(): void;
    enableGrabbing(): void;
    disableGrabbing(): void;
    enablePointer(): void;
    disablePointer(): void;
    private updateStyle;
    update(deltaTime: number): void;
}
//# sourceMappingURL=CursorStyleSystem.d.ts.map