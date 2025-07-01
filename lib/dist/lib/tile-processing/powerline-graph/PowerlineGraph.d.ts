import Vec2 from "~/lib/math/Vec2";
import { NodeType } from "~/lib/tile-processing/powerline-graph/PowerlineNode";
export interface NodeEntity {
    readonly position: Vec2;
    readonly type: NodeType;
    readonly rotation: number;
}
export interface SegmentEntity {
    readonly start: NodeEntity;
    readonly end: NodeEntity;
}
export interface EntityList {
    readonly nodes: NodeEntity[];
    readonly segments: SegmentEntity[];
}
export default class PowerlineGraph {
    private readonly segmentInputs;
    private readonly nodeInputs;
    private readonly nodesMap;
    private readonly segments;
    entities: EntityList;
    addPowerlinePolyline(polyline: Vec2[]): void;
    addPowerlineNode(type: NodeType, position: Vec2): void;
    private addNode;
    private getNode;
    processGraph(): void;
    createEntities(): void;
    private static getNodeEntity;
    private static getPlaceholderNode;
}
//# sourceMappingURL=PowerlineGraph.d.ts.map