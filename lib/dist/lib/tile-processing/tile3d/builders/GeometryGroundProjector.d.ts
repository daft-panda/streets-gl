import Vec2 from "~/lib/math/Vec2";
export default class GeometryGroundProjector {
    static project({ triangle, attributes, tileSize, segmentCount, height }: {
        triangle: [number, number][];
        attributes: {
            [name: string]: [number, number][];
        };
        tileSize: number;
        segmentCount: number;
        height?: number;
    }): {
        position: Float32Array;
        attributes: {
            [name: string]: Float32Array;
        };
    };
    static projectLineSegment({ lineStart, lineEnd, tileSize, segmentCount }: {
        lineStart: Vec2;
        lineEnd: Vec2;
        tileSize: number;
        segmentCount: number;
    }): {
        vertices: Vec2[];
        startProgress: number;
    };
    private static normalizeTriangle;
    private static getIntersectingGroundTrianglesForTriangle;
    private static getIntersectingGroundTrianglesForLine;
    private static mergePositionsAndAttributes;
    private static triangulateConvex;
    private static getTriangle;
}
//# sourceMappingURL=GeometryGroundProjector.d.ts.map