import Tile3DRing from "~/lib/tile-processing/tile3d/builders/Tile3DRing";
import AABB2D from "~/lib/math/AABB2D";
import Vec2 from "~/lib/math/Vec2";
import Vec3 from "~/lib/math/Vec3";
import { Skeleton } from 'straight-skeleton';
export type OMBBResult = [Vec2, Vec2, Vec2, Vec2];
export interface StraightSkeletonResultPolygon {
    vertices: Vec2[];
    edgeStart: Vec2;
    edgeEnd: Vec2;
}
export declare class StraightSkeletonResult {
    vertices: Vec2[];
    polygons: StraightSkeletonResultPolygon[];
    constructor(source?: Skeleton);
    clone(): StraightSkeletonResult;
}
export default class Tile3DMultipolygon {
    readonly rings: Tile3DRing[];
    private cachedStraightSkeleton;
    private cachedOMBB;
    private cachedPoleOfInaccessibility;
    constructor();
    addRing(ring: Tile3DRing): void;
    setOMBB(ombb: OMBBResult): void;
    setPoleOfInaccessibility(poi: Vec3): void;
    getFootprint({ height, flip }: {
        height: number;
        flip: boolean;
    }): {
        positions: number[];
        uvs: number[];
        normals: number[];
    };
    private getRingEarcutInput;
    getStraightSkeleton(): StraightSkeletonResult;
    private getStraightSkeletonInput;
    getAABB(): AABB2D;
    private getOMBBInput;
    getOMBB(): OMBBResult;
    getPoleOfInaccessibility(): Vec3;
    populateWithPoints(resolution: number, tileSize: number): Vec2[];
    private getCoveredTiles;
    getArea(): number;
}
//# sourceMappingURL=Tile3DMultipolygon.d.ts.map