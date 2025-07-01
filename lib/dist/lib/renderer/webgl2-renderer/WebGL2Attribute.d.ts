import AbstractAttribute, { AbstractAttributeParams } from "~/lib/renderer/abstract-renderer/AbstractAttribute";
import { RendererTypes } from "~/lib/renderer/RendererTypes";
import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import WebGL2Program from "./WebGL2Program";
import WebGL2AttributeBuffer from "~/lib/renderer/webgl2-renderer/WebGL2AttributeBuffer";
export default class WebGL2Attribute implements AbstractAttribute {
    private readonly renderer;
    private readonly gl;
    readonly buffer: WebGL2AttributeBuffer;
    divisor: number;
    instanced: boolean;
    name: string;
    normalized: boolean;
    size: number;
    stride: number;
    offset: number;
    type: RendererTypes.AttributeType;
    format: RendererTypes.AttributeFormat;
    constructor(renderer: WebGL2Renderer, { name, size, type, format, normalized, instanced, divisor, stride, offset, buffer }: AbstractAttributeParams);
    locate(program: WebGL2Program): void;
    delete(): void;
    static convertTypeToWebGLConstant(type: RendererTypes.AttributeType): number;
}
//# sourceMappingURL=WebGL2Attribute.d.ts.map