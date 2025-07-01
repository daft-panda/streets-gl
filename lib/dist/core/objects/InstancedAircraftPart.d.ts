import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import { ModelSourceBuffers } from "./models/ModelManager";
export default class InstancedAircraftPart extends RenderableObject3D {
    mesh: AbstractMesh;
    private interleavedAttributeBuffer;
    private instanceBuffers;
    private interleavedBuffer;
    private instanceCount;
    constructor(instanceBuffers: ModelSourceBuffers);
    setInstancesInterleavedBuffer(interleavedBuffer: Float32Array, instanceCount: number): void;
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
}
//# sourceMappingURL=InstancedAircraftPart.d.ts.map