import * as RG from "~/lib/render-graph";
import RenderPassResourceDescriptor from "../resource-descriptors/RenderPassResourceDescriptor";
import RenderPassPhysicalResourceBuilder from "../physical-resource-builders/RenderPassPhysicalResourceBuilder";
export default class RenderPassResource extends RG.Resource<RenderPassResourceDescriptor, RenderPassPhysicalResourceBuilder> {
    constructor(name: string, descriptor: RenderPassResourceDescriptor, physicalResourceBuilder: RenderPassPhysicalResourceBuilder, isTransient: boolean, isUsedExternally: boolean);
}
//# sourceMappingURL=RenderPassResource.d.ts.map