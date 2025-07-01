import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import { ColorAttachment, DepthAttachment } from "~/lib/renderer/abstract-renderer/AbstractRenderPass";
export default class WebGL2Framebuffer {
    private readonly renderer;
    private readonly gl;
    private readonly colorAttachments;
    private readonly depthAttachment;
    private width;
    private height;
    private WebGLFramebuffer;
    private attachedLayers;
    private attachedLevels;
    constructor(renderer: WebGL2Renderer, colorAttachments: ColorAttachment[], depthAttachment: DepthAttachment);
    private updateDimensionsFromAttachments;
    bind(): void;
    private createWebGLFramebuffer;
    bindAttachments(): void;
    private buildAttachmentsArray;
    copyAttachmentsToFramebuffer({ destination, sourceColorAttachment, targetColorAttachment, copyColor, copyDepth, linearFilter }: {
        destination: WebGL2Framebuffer;
        sourceColorAttachment?: number;
        targetColorAttachment?: number;
        copyColor?: boolean;
        copyDepth?: boolean;
        linearFilter?: boolean;
    }): void;
    clearAllAttachments(): void;
    clearColorAttachment(attachmentId: number): void;
    clearDepthAttachment(): void;
    private clearColorBuffer;
    private static clearValueToTypedArray;
    delete(): void;
}
//# sourceMappingURL=WebGL2Framebuffer.d.ts.map