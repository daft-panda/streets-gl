import { PhysicalResourceBuilder, Resource, ResourceDescriptor } from "~/lib/render-graph";
export default class DummyResource<Desc extends ResourceDescriptor, Builder extends PhysicalResourceBuilder<any>> extends Resource<Desc, Builder> {
    constructor({ descriptor, builder, name, isUsedExternally, isTransient }: {
        descriptor: Desc;
        builder: Builder;
        name?: string;
        isUsedExternally?: boolean;
        isTransient?: boolean;
    });
}
//# sourceMappingURL=DummyResource.d.ts.map