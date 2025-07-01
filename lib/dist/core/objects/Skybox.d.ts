import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import RenderableObject3D from "./RenderableObject3D";
export default class Skybox extends RenderableObject3D {
    mesh: AbstractMesh;
    constructor();
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
}
//# sourceMappingURL=Skybox.d.ts.map