import Mat3 from "./Mat3";
export default class Vec2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): void;
    equals(v: Vec2): boolean;
    static add(a: Vec2, b: Vec2): Vec2;
    static sub(a: Vec2, b: Vec2): Vec2;
    static addScalar(v: Vec2, s: number): Vec2;
    static multiplyScalar(v: Vec2, s: number): Vec2;
    static normalize(v: Vec2): Vec2;
    static getLength(v: Vec2): number;
    static dot(a: Vec2, b: Vec2): number;
    static distance(a: Vec2, b: Vec2): number;
    static angleClockwise(a: Vec2, b: Vec2): number;
    getAngle(): number;
    static rotate(v: Vec2, angle: number): Vec2;
    static rotateLeft(v: Vec2): Vec2;
    static rotateRight(v: Vec2): Vec2;
    static applyMatrix3(v: Vec2, mat: Mat3): Vec2;
    static lerp(v1: Vec2, v2: Vec2, amount: number): Vec2;
    static clone(v: Vec2): Vec2;
    static toArray(v: Vec2): [number, number];
}
//# sourceMappingURL=Vec2.d.ts.map