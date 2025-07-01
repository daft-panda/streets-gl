import AbstractAttributeBuffer, { AbstractAttributeBufferParams } from "~/lib/renderer/abstract-renderer/AbstractAttributeBuffer";
import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import { RendererTypes, TypedArray } from "~/lib/renderer/RendererTypes";
export default class WebGL2AttributeBuffer implements AbstractAttributeBuffer {
    private readonly renderer;
    private readonly usage;
    buffer: WebGLBuffer;
    data: TypedArray;
    constructor(renderer: WebGL2Renderer, { usage, data }: AbstractAttributeBufferParams);
    private createBuffer;
    setData(data: TypedArray): void;
    bind(): void;
    unbind(): void;
    delete(): void;
    static convertUsageToWebGLConstant(usage: RendererTypes.BufferUsage): number;
}
//# sourceMappingURL=WebGL2AttributeBuffer.d.ts.map