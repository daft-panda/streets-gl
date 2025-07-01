import Vec3 from "~/lib/math/Vec3";
export default class TileLabelBuffers {
    positionBuffer: Float32Array;
    uvBuffer: Float32Array;
    indexBuffer: Uint32Array;
    priority: number;
    x: number;
    y: number;
    z: number;
    vertexCount: number;
    tempPosition: Vec3;
    distanceToCamera: number;
    text: string;
    width: number;
    height: number;
    constructor({ text, priority, x, y, z }: {
        text: string;
        priority: number;
        x: number;
        y: number;
        z: number;
    });
    updateBuffers(): void;
}
//# sourceMappingURL=TileLabelBuffers.d.ts.map