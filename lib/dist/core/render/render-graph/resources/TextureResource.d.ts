import TextureResourceDescriptor from "../resource-descriptors/TextureResourceDescriptor";
import * as RG from "~/lib/render-graph";
import TexturePhysicalResourceBuilder from "../physical-resource-builders/TexturePhysicalResourceBuilder";
export default class TextureResource extends RG.Resource<TextureResourceDescriptor, TexturePhysicalResourceBuilder> {
    constructor(name: string, descriptor: TextureResourceDescriptor, physicalResourceBuilder: TexturePhysicalResourceBuilder, isTransient: boolean, isUsedExternally: boolean);
}
//# sourceMappingURL=TextureResource.d.ts.map