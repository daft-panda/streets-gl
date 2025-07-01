import Mat4 from "../math/Mat4";
import Vec3 from "../math/Vec3";
export default class Object3D {
    private static EmptyPosition;
    private static EmptyScale;
    private static IDCounter;
    id: number;
    children: Object3D[];
    parent: Object3D;
    matrix: Mat4;
    matrixWorld: Mat4;
    matrixOverwrite: boolean;
    position: Vec3;
    rotation: Vec3;
    scale: Vec3;
    constructor();
    updateMatrix(): Mat4;
    updateMatrixWorld(): Mat4;
    updateMatrixWorldRecursively(): void;
    updateMatrixRecursively(): void;
    add(...objects: Object3D[]): void;
    remove(...objects: Object3D[]): void;
    lookAt(target: Vec3, isWorldPosition?: boolean): void;
}
//# sourceMappingURL=Object3D.d.ts.map