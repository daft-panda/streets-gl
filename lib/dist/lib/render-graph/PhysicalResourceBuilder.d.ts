import ResourceDescriptor from "./ResourceDescriptor";
import PhysicalResource from "./PhysicalResource";
export default abstract class PhysicalResourceBuilder<T extends PhysicalResource> {
    readonly type: T;
    abstract createFromResourceDescriptor(descriptor: ResourceDescriptor): T;
}
//# sourceMappingURL=PhysicalResourceBuilder.d.ts.map