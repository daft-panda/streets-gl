import Plane from './Plane';
import Vec3 from "../math/Vec3";
import Mat4 from "../math/Mat4";
interface FrustumVertices {
    near: Vec3[];
    far: Vec3[];
}
export default class Frustum {
    fov: number;
    aspect: number;
    near: number;
    far: number;
    vertices: FrustumVertices;
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    setVertices(vertices: FrustumVertices): void;
    updateViewSpaceVertices(): void;
    toSpace(matrix: Mat4): Frustum;
    split(breaks: number[][]): FrustumVertices[];
    static getPlanes(matrix: Mat4): Plane[];
}
export {};
//# sourceMappingURL=Frustum.d.ts.map