import * as RG from "~/lib/render-graph";
import { RendererTypes } from "~/lib/renderer/RendererTypes";
export declare enum TextureResourceType {
    Texture2D = 0,
    TextureCube = 1,
    Texture2DArray = 2,
    Texture3D = 3
}
export default class TextureResourceDescriptor implements RG.ResourceDescriptor {
    type: TextureResourceType;
    width: number;
    height: number;
    depth: number;
    anisotropy: number;
    minFilter: RendererTypes.MinFilter;
    magFilter: RendererTypes.MagFilter;
    wrap: RendererTypes.TextureWrap;
    wrapS: RendererTypes.TextureWrap;
    wrapT: RendererTypes.TextureWrap;
    wrapR: RendererTypes.TextureWrap;
    format: RendererTypes.TextureFormat;
    flipY: boolean;
    mipmaps: boolean;
    isImmutable: boolean;
    immutableLevels: number;
    constructor({ type, width, height, depth, anisotropy, minFilter, magFilter, wrap, wrapS, wrapT, wrapR, format, flipY, mipmaps, isImmutable, immutableLevels }: {
        type: TextureResourceType;
        width: number;
        height: number;
        depth?: number;
        anisotropy?: number;
        minFilter?: RendererTypes.MinFilter;
        magFilter?: RendererTypes.MagFilter;
        wrap?: RendererTypes.TextureWrap;
        wrapS?: RendererTypes.TextureWrap;
        wrapT?: RendererTypes.TextureWrap;
        wrapR?: RendererTypes.TextureWrap;
        format?: RendererTypes.TextureFormat;
        flipY?: boolean;
        mipmaps?: boolean;
        isImmutable?: boolean;
        immutableLevels?: number;
    });
    setSize(width: number, height: number, depth?: number): void;
    deserialize(): string;
}
//# sourceMappingURL=TextureResourceDescriptor.d.ts.map