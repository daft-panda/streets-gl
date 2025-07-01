import Mat4 from "./Mat4";
import Vec2 from "./Vec2";
import Camera from "../core/Camera";
export default class Vec3 {
    x: number;
    y: number;
    z: number;
    static Empty: Vec3;
    constructor(x?: number, y?: number, z?: number);
    get xz(): Vec2;
    get xy(): Vec2;
    set(x: number, y: number, z: number): void;
    equals(v: Vec3): boolean;
    normalize(): Vec3;
    static add(v1: Vec3, v2: Vec3): Vec3;
    static sub(v1: Vec3, v2: Vec3): Vec3;
    static addScalar(v: Vec3, s: number): Vec3;
    static multiplyScalar(v: Vec3, s: number): Vec3;
    static multiplyPerComponent(v1: Vec3, v2: Vec3): Vec3;
    static applyMatrix4(v: Vec3, mat: Mat4): Vec3;
    static normalize(v: Vec3): Vec3;
    static getLength(v: Vec3): number;
    static cross(a: Vec3, b: Vec3): Vec3;
    static dot(a: Vec3, b: Vec3): number;
    static distance(a: Vec3, b: Vec3): number;
    static lerp(v1: Vec3, v2: Vec3, amount: number): Vec3;
    static nlerp(v1: Vec3, v2: Vec3, amount: number): Vec3;
    static project(v: Vec3, camera: Camera): Vec3;
    static unproject(v: Vec3, camera: Camera, useWorldMatrix?: boolean): Vec3;
    static rotateAroundAxis(v: Vec3, axis: Vec3, angle: number): Vec3;
    static clone(v: Vec3): Vec3;
    static toArray(v: Vec3): [number, number, number];
}
//# sourceMappingURL=Vec3.d.ts.map