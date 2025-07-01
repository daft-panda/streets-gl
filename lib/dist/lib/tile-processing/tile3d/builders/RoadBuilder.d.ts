import Vec2 from "~/lib/math/Vec2";
export declare enum RoadSide {
    Both = 0,
    Left = 1,
    Right = 2
}
export default class RoadBuilder {
    static build({ vertices, vertexAdjacentToStart, vertexAdjacentToEnd, width, uvFollowRoad, uvScale, uvScaleY, side, uvMinX, uvMaxX }: {
        vertices: Vec2[];
        vertexAdjacentToStart?: Vec2;
        vertexAdjacentToEnd?: Vec2;
        width: number;
        uvFollowRoad: boolean;
        uvScale?: number;
        uvScaleY?: number;
        side?: RoadSide;
        uvMinX?: number;
        uvMaxX?: number;
    }): {
        position: number[];
        uv: number[];
        border: Vec2[];
    };
    private static getBorderVertices;
    private static buildConnectionAttributesStart;
    private static buildConnectionAttributesEnd;
    private static buildConnection;
    private static buildSegment;
    private static buildSegmentsFromControlPoints;
    private static fillUVsFromPositions;
    private static getControlPoints;
    private static calculateSlope;
    private static calculateYIntercept;
    private static reflectPoint;
}
//# sourceMappingURL=RoadBuilder.d.ts.map