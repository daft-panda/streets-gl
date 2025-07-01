import * as RG from "~/lib/render-graph";
import TextureResourceDescriptor from "./TextureResourceDescriptor";
import { ColorClearValue } from "~/lib/renderer/abstract-renderer/AbstractRenderPass";
import { RendererTypes } from "~/lib/renderer/RendererTypes";
export interface AttachmentDescriptor {
    texture: TextureResourceDescriptor;
    slice?: number;
    loadOp: RendererTypes.AttachmentLoadOp;
    storeOp: RendererTypes.AttachmentStoreOp;
}
export interface ColorAttachmentDescriptor extends AttachmentDescriptor {
    clearValue: ColorClearValue;
}
export interface DepthAttachmentDescriptor extends AttachmentDescriptor {
    clearValue: number;
}
export default class RenderPassResourceDescriptor implements RG.ResourceDescriptor {
    colorAttachments: ColorAttachmentDescriptor[];
    depthAttachment: DepthAttachmentDescriptor;
    constructor({ colorAttachments, depthAttachment }: {
        colorAttachments: ColorAttachmentDescriptor[];
        depthAttachment?: DepthAttachmentDescriptor;
    });
    private deserializeAttachment;
    deserialize(): string;
    setSize(width: number, height: number, depth?: number): void;
}
//# sourceMappingURL=RenderPassResourceDescriptor.d.ts.map