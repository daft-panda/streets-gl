import AbstractRenderPass, { AbstractRenderPassParams, ColorAttachment, DepthAttachment } from "~/lib/renderer/abstract-renderer/AbstractRenderPass";
import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import WebGL2Texture from '~/lib/renderer/webgl2-renderer/WebGL2Texture';
import { TypedArray } from "../RendererTypes";
export default class WebGL2RenderPass implements AbstractRenderPass {
    private readonly renderer;
    readonly colorAttachments: ColorAttachment[];
    readonly depthAttachment: DepthAttachment;
    private framebuffer;
    constructor(renderer: WebGL2Renderer, { colorAttachments, depthAttachment }: AbstractRenderPassParams);
    private createFramebuffer;
    begin(): void;
    setSize(width: number, height: number): void;
    copyColorAttachmentToTexture(attachmentId: number, texture: WebGL2Texture): void;
    copyAttachmentsToRenderPass({ destination, sourceColorAttachment, targetColorAttachment, copyColor, copyDepth, linearFilter }: {
        destination: WebGL2RenderPass;
        sourceColorAttachment?: number;
        targetColorAttachment?: number;
        copyColor?: boolean;
        copyDepth?: boolean;
        linearFilter?: boolean;
    }): void;
    readColorAttachmentPixel<T extends TypedArray>(attachmentId: number, buffer: T, x: number, y: number, width?: number, height?: number): Promise<void>;
    clearAttachments(colorAttachmentIds: number[], clearDepth: boolean): void;
    delete(): void;
}
//# sourceMappingURL=WebGL2RenderPass.d.ts.map