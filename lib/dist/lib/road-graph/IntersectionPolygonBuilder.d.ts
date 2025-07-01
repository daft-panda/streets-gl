import Vec2 from "~/lib/math/Vec2";
export declare class LineIntersection {
    point: Vec2;
    isProjected: boolean;
    alpha: number;
    constructor(point: Vec2, isProjected: boolean);
}
export declare class Segment {
    private readonly start;
    private readonly end;
    private readonly width;
    readonly angle: number;
    private readonly leftDirection;
    private readonly rightDirection;
    segmentLeft: [Vec2, Vec2];
    segmentRight: [Vec2, Vec2];
    segmentLeftIntersections: LineIntersection[];
    segmentRightIntersections: LineIntersection[];
    trimTo: LineIntersection;
    constructor(start: Vec2, end: Vec2, width: number);
    projectIntersections(): void;
    updateIntersectionsAlpha(): void;
    updateIntersectionsAlphaForSide(intersections: LineIntersection[], segment: [Vec2, Vec2]): void;
    sortIntersectionsByAlpha(): void;
    getTrimmedEnd(): Vec2;
}
export default class IntersectionPolygonBuilder {
    private readonly center;
    private readonly segments;
    constructor(center: Vec2);
    addDirection(point: Vec2, width: number): Segment;
    getPolygon(): Vec2[];
    private sortSegments;
}
//# sourceMappingURL=IntersectionPolygonBuilder.d.ts.map