import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import { Tile3DBuffersProjected } from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
export default class TileProjectedMesh extends RenderableObject3D {
    private buffers;
    mesh: AbstractMesh;
    constructor(buffers: Tile3DBuffersProjected);
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    dispose(): void;
}
//# sourceMappingURL=TileProjectedMesh.d.ts.map