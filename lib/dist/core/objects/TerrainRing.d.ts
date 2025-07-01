import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
export default class TerrainRing extends RenderableObject3D {
    mesh: AbstractMesh;
    segmentCount: number;
    holeSegmentCount: number;
    size: number;
    maskTextureTransform: Float32Array;
    waterTextureTransform0: Float32Array;
    waterTextureTransform1: Float32Array;
    heightTextureTransform0: Float32Array;
    heightTextureTransform1: Float32Array;
    morphOffset: Float32Array;
    isLastRing: boolean;
    constructor(segmentCount: number, holeSegmentCount: number, size: number);
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    private getBuffers;
    private static createSquareGridGeometryWithHoleNonIndexed;
}
//# sourceMappingURL=TerrainRing.d.ts.map