import Resource from "./Resource";
import Node from "./Node";
export declare enum InternalResourceType {
    Input = 0,
    Output = 1,
    Local = 2
}
export interface InternalResource {
    type: InternalResourceType;
    resource: Resource<any, any>;
}
export type ResourcePropMap = Record<string, InternalResource>;
export default abstract class Pass<T extends ResourcePropMap> extends Node {
    readonly isRenderable: boolean;
    protected readonly internalResources: Map<keyof T, T[keyof T]>;
    protected constructor(name: string, initialResources: T);
    setResource<K extends keyof T>(name: K, resource: T[K]['resource']): void;
    getResource<K extends keyof T>(name: K): T[K]['resource'];
    getPhysicalResource<K extends keyof T>(name: K): T[K]['resource']['physicalResourceBuilder']['type'];
    getOutputResourcesUsedExternally(): Set<Resource<any, any>>;
    getAllResources(): Resource<any, any>[];
    getAllResourcesOfType(type: InternalResourceType): Set<Resource<any, any>>;
    abstract render(): void;
}
//# sourceMappingURL=Pass.d.ts.map