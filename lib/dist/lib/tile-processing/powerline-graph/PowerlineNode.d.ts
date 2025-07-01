import Vec2 from "~/lib/math/Vec2";
import PowerlineSegment from "~/lib/tile-processing/powerline-graph/PowerlineSegment";
export declare enum NodeType {
    Tower = 0,
    Pole = 1,
    Ground = 2
}
declare class PowerlineNodeDirection {
    readonly vector: Vec2;
    constructor(start: Vec2, end: Vec2);
}
export default class PowerlineNode {
    readonly position: Vec2;
    readonly directions: PowerlineNodeDirection[];
    readonly type: NodeType;
    rotation: number;
    constructor(type: NodeType, position: Vec2);
    addSegment(segment: PowerlineSegment): void;
    updateRotation(): void;
}
export {};
//# sourceMappingURL=PowerlineNode.d.ts.map