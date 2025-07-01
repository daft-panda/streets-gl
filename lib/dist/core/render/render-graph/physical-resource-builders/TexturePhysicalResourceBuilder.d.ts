import * as RG from "~/lib/render-graph";
import TextureResourceDescriptor from "../resource-descriptors/TextureResourceDescriptor";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import AbstractTexture from "~/lib/renderer/abstract-renderer/AbstractTexture";
export default class TexturePhysicalResourceBuilder extends RG.PhysicalResourceBuilder<AbstractTexture> {
    private renderer;
    constructor(renderer: AbstractRenderer);
    createFromResourceDescriptor(descriptor: TextureResourceDescriptor): AbstractTexture;
}
//# sourceMappingURL=TexturePhysicalResourceBuilder.d.ts.map