import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
export default class TerrainMask extends RenderableObject3D {
    mesh: AbstractMesh;
    private readonly verticesBuffer;
    constructor(vertices: Float32Array);
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    delete(): void;
}
//# sourceMappingURL=TerrainMask.d.ts.map