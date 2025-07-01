export declare enum ResourceType {
    Image = 0,
    GLTF = 1
}
export type ResourceJSONTypes = "image" | "text";
export type ResourceJSON = Record<string, {
    url: string;
    type: ResourceJSONTypes;
}>;
export interface ResourceRequest {
    url: string;
    type: ResourceType;
}
//# sourceMappingURL=ResourceLoader.d.ts.map