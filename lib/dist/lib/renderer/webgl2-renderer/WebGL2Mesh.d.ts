import AbstractMesh, { AbstractMeshParams } from "~/lib/renderer/abstract-renderer/AbstractMesh";
import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import WebGL2Attribute from "~/lib/renderer/webgl2-renderer/WebGL2Attribute";
export default class WebGL2Mesh implements AbstractMesh {
    private readonly renderer;
    private readonly gl;
    indexed: boolean;
    indices: Uint32Array;
    instanced: boolean;
    instanceCount: number;
    private indexBuffer;
    private attributes;
    private materialsAttributes;
    private vaos;
    constructor(renderer: WebGL2Renderer, { indexed, indices, instanced, instanceCount, attributes }: AbstractMeshParams);
    private createIndexBuffer;
    setIndices(indices: Uint32Array): void;
    private bindVAO;
    draw(): void;
    getAttribute(name: string): WebGL2Attribute;
    addAttribute(attribute: WebGL2Attribute): void;
    delete(): void;
}
//# sourceMappingURL=WebGL2Mesh.d.ts.map