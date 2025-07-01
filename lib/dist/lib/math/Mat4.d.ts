import Vec3 from "./Vec3";
import Mat3 from "./Mat3";
export default class Mat4 {
    values: Float64Array;
    constructor(values?: Float64Array);
    static identity(): Mat4;
    static inverse(mat: Mat4): Mat4;
    static multiply(mat1: Mat4, mat2: Mat4): Mat4;
    static transpose(mat: Mat4): Mat4;
    static perspective(fieldOfViewInRadians: number, aspect: number, near: number, far: number): Mat4;
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4;
    static normalMatrix(mat: Mat4): Mat3;
    static lookAt(cameraPosition: Vec3, target: Vec3, up: Vec3): Mat4;
    static translation(tx: number, ty: number, tz: number): Mat4;
    static translate(mat: Mat4, tx: number, ty: number, tz: number): Mat4;
    static xRotation(angle: number): Mat4;
    static xRotate(mat: Mat4, angle: number): Mat4;
    static yRotation(angle: number): Mat4;
    static yRotate(mat: Mat4, angle: number): Mat4;
    static zRotation(angle: number): Mat4;
    static zRotate(mat: Mat4, angle: number): Mat4;
    static axisRotation(axis: Vec3, angle: number): Mat4;
    static axisRotate(mat: Mat4, axis: Vec3, angle: number): Mat4;
    static scaling(sx: number, sy: number, sz: number): Mat4;
    static scale(mat: Mat4, sx: number, sy: number, sz: number): Mat4;
    static copy(m: Mat4): Mat4;
}
//# sourceMappingURL=Mat4.d.ts.map