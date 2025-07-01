import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import InstancedObject from "./InstancedObject";
import { ModelSourceBuffers } from "./models/ModelManager";
export default class GenericInstancedObject extends InstancedObject {
    protected schema: import("~/lib/tile-processing/tile3d/features/Tile3DInstance").InstanceStructureSchema;
    constructor(instanceBuffers: ModelSourceBuffers);
    protected createMesh(renderer: AbstractRenderer): AbstractMesh;
}
//# sourceMappingURL=GenericInstancedObject.d.ts.map