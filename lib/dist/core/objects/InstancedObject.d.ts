import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import AABB3D from "~/lib/math/AABB3D";
import { InstanceStructureSchema } from "~/lib/tile-processing/tile3d/features/Tile3DInstance";
import AbstractAttributeBuffer from "~/lib/renderer/abstract-renderer/AbstractAttributeBuffer";
import RenderableObject3D from "./RenderableObject3D";
import { ModelSourceBuffers } from "./models/ModelManager";
export default abstract class InstancedObject extends RenderableObject3D {
    protected abstract schema: InstanceStructureSchema;
    mesh: AbstractMesh;
    protected instanceBuffers: ModelSourceBuffers;
    private interleavedBuffer;
    protected interleavedAttributeBuffer: AbstractAttributeBuffer;
    instanceCount: number;
    protected constructor(instanceBuffers: ModelSourceBuffers);
    setInstancesInterleavedBuffer(interleavedBuffer: Float32Array): void;
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    protected abstract createMesh(renderer: AbstractRenderer): AbstractMesh;
    getInstancesAABB(interleavedBuffer: Float32Array): AABB3D;
}
//# sourceMappingURL=InstancedObject.d.ts.map