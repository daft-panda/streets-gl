import AABB3D from "~/lib/math/AABB3D";
export interface ModelSourceBuffers {
    position: Float32Array;
    normal: Float32Array;
    uv: Float32Array;
    indices: Uint32Array;
    boundingBox: AABB3D;
}
export default class ModelManager {
    static getGLTFModel(name: string): ModelSourceBuffers;
}
//# sourceMappingURL=ModelManager.d.ts.map