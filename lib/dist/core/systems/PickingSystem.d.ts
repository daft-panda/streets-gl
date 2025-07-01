import Vec2 from "~/lib/math/Vec2";
import System from "../System";
import TileBuilding from "../world/TileBuilding";
export default class PickingSystem extends System {
    private enablePicking;
    private hoveredObjectId;
    private selectedObjectId;
    private pointerDownPosition;
    selectedTileBuilding: TileBuilding;
    pointerPosition: Vec2;
    constructor();
    postInit(): void;
    private updatePointerPositionFromEvent;
    readObjectId(buffer: Uint32Array): void;
    clearHoveredObjectId(): void;
    private updatePointer;
    private onClick;
    clearSelection(): void;
    update(deltaTime: number): void;
}
//# sourceMappingURL=PickingSystem.d.ts.map