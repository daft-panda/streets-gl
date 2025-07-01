import Vec2 from "~/lib/math/Vec2";
import AABB2D from "~/lib/math/AABB2D";
export declare enum Tile3DRingType {
    Outer = 0,
    Inner = 1
}
export default class Tile3DRing {
    readonly type: Tile3DRingType;
    readonly nodes: Vec2[];
    private cachedFlattenVertices;
    private cachedGeoJSONVertices;
    private cachedAABB;
    private cachedArea;
    constructor(type: Tile3DRingType, nodes: Vec2[]);
    getFlattenVertices(): number[];
    getGeoJSONVertices(): [number, number][];
    getAABB(): AABB2D;
    getDistanceToPoint(point: Vec2): number;
    isContainsPoints(point: Vec2): boolean;
    getArea(): number;
}
//# sourceMappingURL=Tile3DRing.d.ts.map