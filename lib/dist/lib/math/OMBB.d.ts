export function Vector(x: any, y: any): void;
export class Vector {
    constructor(x: any, y: any);
    x: any;
    y: any;
    min: (vec: any) => void;
    max: (vec: any) => void;
    midpoint: (vec: any) => Vector;
    clone: () => Vector;
    normalize: () => void;
    normalized: () => Vector;
    /**
     * @type {Function}
     */
    negate: Function;
    sqrLength: () => number;
    length: () => number;
    scale: (len: any) => void;
    add: (vec: any) => void;
    sub: (vec: any) => void;
    diff: (vec: any) => Vector;
    distance: (vec: any) => number;
    dot: (vec: any) => number;
    equals: (vec: any) => boolean;
    orthogonal: () => Vector;
    distanceToLine: (v0: any, v1: any) => number;
}
export function CalcConvexHull(points: any): any;
export function ComputeOMBB(convexHull: any): any[];
//# sourceMappingURL=OMBB.d.ts.map