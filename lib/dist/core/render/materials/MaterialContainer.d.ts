import AbstractMaterial from "~/lib/renderer/abstract-renderer/AbstractMaterial";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
export default abstract class MaterialContainer {
    protected renderer: AbstractRenderer;
    material: AbstractMaterial;
    protected constructor(renderer: AbstractRenderer);
}
//# sourceMappingURL=MaterialContainer.d.ts.map