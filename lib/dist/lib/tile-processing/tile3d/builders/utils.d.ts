import Vec2 from "~/lib/math/Vec2";
import { OMBBResult } from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
export declare function colorToComponents(color: number): [number, number, number];
export declare function signedDstToLine(point: Vec2, line: [Vec2, Vec2]): number;
export declare function projectGeometryOnTerrain({ position, uv, height }: {
    position: number[];
    uv: number[];
    height?: number;
}): {
    position: number[];
    uv: number[];
};
type ProjectedPolyline = {
    vertices: Vec2[];
    startProgress: number;
};
export declare function projectLineOnTerrain(vertices: Vec2[]): ProjectedPolyline[];
export declare function getNearestDirection(angle: number): number;
export declare function getRotationVectorsFromOMBB(ombb: OMBBResult, orientation: 'along' | 'across', direction: number): {
    origin: Vec2;
    rotVector0: Vec2;
    rotVector1: Vec2;
};
export {};
//# sourceMappingURL=utils.d.ts.map