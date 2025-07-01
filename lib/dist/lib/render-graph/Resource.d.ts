import Node from "./Node";
import ResourceDescriptor from "./ResourceDescriptor";
import PhysicalResourceBuilder from "./PhysicalResourceBuilder";
import ResourcePool from "~/lib/render-graph/PhysicalResourcePool";
export default abstract class Resource<TDescriptor extends ResourceDescriptor, TBuilder extends PhysicalResourceBuilder<any>> extends Node {
    isRenderable: boolean;
    descriptor: TDescriptor;
    physicalResourceBuilder: TBuilder;
    isTransient: boolean;
    isUsedExternally: boolean;
    attachedPhysicalResource: TBuilder['type'];
    attachedPhysicalResourceId: string;
    protected constructor({ name, descriptor, physicalResourceBuilder, isTransient, isUsedExternally }: {
        name: string;
        descriptor: TDescriptor;
        physicalResourceBuilder: TBuilder;
        isTransient: boolean;
        isUsedExternally: boolean;
    });
    private createPhysicalResource;
    attachPhysicalResource(pool: ResourcePool): void;
    resetAttachedPhysicalResource(): void;
}
//# sourceMappingURL=Resource.d.ts.map