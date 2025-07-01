import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import TextureResource from "./resources/TextureResource";
import RenderPassResource from "./resources/RenderPassResource";
import TextureResourceDescriptor from "./resource-descriptors/TextureResourceDescriptor";
import RenderPassResourceDescriptor from "./resource-descriptors/RenderPassResourceDescriptor";
export default class RenderGraphResourceFactory {
    private readonly textureBuilder;
    private readonly renderPassBuilder;
    constructor(renderer: AbstractRenderer);
    createTextureResource({ name, descriptor, isTransient, isUsedExternally }: {
        name: string;
        descriptor: TextureResourceDescriptor;
        isTransient: boolean;
        isUsedExternally: boolean;
    }): TextureResource;
    createRenderPassResource({ name, descriptor, isTransient, isUsedExternally }: {
        name: string;
        descriptor: RenderPassResourceDescriptor;
        isTransient: boolean;
        isUsedExternally: boolean;
    }): RenderPassResource;
}
//# sourceMappingURL=RenderGraphResourceFactory.d.ts.map