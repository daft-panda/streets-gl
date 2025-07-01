import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import { Tile3DBuffersExtruded } from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
interface MeshDisplayBufferPatch {
    start: number;
    size: number;
    value: number;
}
export default class TileExtrudedMesh extends RenderableObject3D {
    private buffers;
    mesh: AbstractMesh;
    private meshDisplayBufferPatches;
    constructor(buffers: Tile3DBuffersExtruded);
    addDisplayBufferPatch(patch: MeshDisplayBufferPatch): void;
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    dispose(): void;
}
export {};
//# sourceMappingURL=TileExtrudedMesh.d.ts.map