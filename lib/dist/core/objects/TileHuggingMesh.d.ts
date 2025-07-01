import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import { Tile3DBuffersHugging } from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
export default class TileHuggingMesh extends RenderableObject3D {
    private buffers;
    mesh: AbstractMesh;
    constructor(buffers: Tile3DBuffersHugging);
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    dispose(): void;
}
//# sourceMappingURL=TileHuggingMesh.d.ts.map