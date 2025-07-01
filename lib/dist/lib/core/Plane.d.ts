import Vec3 from "../math/Vec3";
export default class Plane {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    normalize(): Plane;
    distanceToPoint(point: Vec3): number;
}
//# sourceMappingURL=Plane.d.ts.map