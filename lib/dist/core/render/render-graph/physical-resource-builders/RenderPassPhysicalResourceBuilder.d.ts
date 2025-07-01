import * as RG from "~/lib/render-graph";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import RenderPassResourceDescriptor from "../resource-descriptors/RenderPassResourceDescriptor";
import TexturePhysicalResourceBuilder from "./TexturePhysicalResourceBuilder";
import AbstractRenderPass from "~/lib/renderer/abstract-renderer/AbstractRenderPass";
export default class RenderPassPhysicalResourceBuilder extends RG.PhysicalResourceBuilder<AbstractRenderPass> {
    private renderer;
    private textureBuilder;
    constructor(renderer: AbstractRenderer, textureBuilder: TexturePhysicalResourceBuilder);
    createFromResourceDescriptor(descriptor: RenderPassResourceDescriptor): AbstractRenderPass;
}
//# sourceMappingURL=RenderPassPhysicalResourceBuilder.d.ts.map