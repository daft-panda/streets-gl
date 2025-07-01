import Vec3 from "./Vec3";
import Vec2 from "./Vec2";
import { TypedArray } from "../renderer/RendererTypes";
export default class MathUtils {
    static clamp(num: number, min: number, max: number): number;
    static lerp(start: number, end: number, amt: number): number;
    static shortestAngleDistance(a0: number, a1: number): number;
    static lerpAngle(a0: number, a1: number, t: number): number;
    static toRad(degrees: number): number;
    static toDeg(radians: number): number;
    static mod(n: number, m: number): number;
    static normalizeAngle(angle: number): number;
    static polarToCartesian(azimuth: number, altitude: number): Vec3;
    static cartesianToPolar(position: Vec3): [number, number];
    static degrees2meters(lat: number, lon: number): Vec2;
    static meters2degrees(x: number, z: number): {
        lat: number;
        lon: number;
    };
    static degrees2tile(lat: number, lon: number, zoom?: number): Vec2;
    static tile2degrees(x: number, y: number, zoom?: number): {
        lat: number;
        lon: number;
    };
    static meters2tile(x: number, z: number, zoom?: number): Vec2;
    static tile2meters(x: number, y: number, zoom?: number): Vec2;
    static getTileSizeInMeters(zoom: number): number;
    static getTilesIntersectingLine(a: Vec2, b: Vec2): Vec2[];
    static getMercatorScaleFactor(lat: number): number;
    static getMercatorScaleFactorForTile(x: number, y: number, zoom: number): number;
    static shiftLeft(num: number, bits: number): number;
    static shiftRight(num: number, bits: number): number;
    static calculateNormal(vA: Vec3, vB: Vec3, vC: Vec3): Vec3;
    static getBarycentricCoordinatesOfPoint(point: Vec2, triangle: number[] | TypedArray): Vec3;
    static isTriangleDegenerate(triangle: number[]): boolean;
    static getTriangleAreaSigned(p1: number[], p2: number[], p3: number[]): number;
    static isPointInTriangle(point: [number, number], triangle: [number, number][]): boolean;
    static getIntersectionLineLine(l1p1: [number, number], l1p2: [number, number], l2p1: [number, number], l2p2: [number, number]): [number, number];
    static getIntersectionLineLineInfinite(l1p1: Vec2, l1p2: Vec2, l2p1: Vec2, l2p2: Vec2): Vec2;
    static getIntersectionsLineTriangle(lineStart: [number, number], lineEnd: [number, number], triangle: [number, number][]): [number, number][];
    static orderConvexPolygonPoints(points: [number, number][]): [number, number][];
    static findIntersectionTriangleTriangle(tri1: [number, number][], tri2: [number, number][]): [number, number][];
    static getPolygonCentroid(points: Vec2[]): Vec2;
    static isPointInsidePolygon(point: Vec2, vs: Vec2[]): boolean;
    static getPointProgressAlongLineSegment(start: Vec2, end: Vec2, point: Vec2, clamp?: boolean): number;
    static getTilesUnderTriangle(triangle: [number, number][], triangleScaleX: number, triangleScaleY: number, tileMinX?: number, tileMinY?: number, tileMaxX?: number, tileMaxY?: number): Vec2[];
    static getPolygonAreaSigned(points: Vec2[]): number;
}
//# sourceMappingURL=MathUtils.d.ts.map