import AbstractTexture, { AbstractTextureParams } from "~/lib/renderer/abstract-renderer/AbstractTexture";
import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import { RendererTypes } from "~/lib/renderer/RendererTypes";
export default abstract class WebGL2Texture implements AbstractTexture {
    width: number;
    height: number;
    anisotropy: number;
    minFilter: RendererTypes.MinFilter;
    magFilter: RendererTypes.MagFilter;
    wrap: RendererTypes.TextureWrap;
    wrapS: RendererTypes.TextureWrap;
    wrapT: RendererTypes.TextureWrap;
    wrapR: RendererTypes.TextureWrap;
    format: RendererTypes.TextureFormat;
    flipY: boolean;
    baseLevel: number;
    maxLevel: number;
    mipmaps: boolean;
    isImmutable: boolean;
    immutableLevels: number;
    protected abstract textureTypeConstant: number;
    protected renderer: WebGL2Renderer;
    protected gl: WebGL2RenderingContext;
    WebGLTexture: WebGLTexture;
    private pixelPackBuffer;
    protected deleted: boolean;
    protected constructor(renderer: WebGL2Renderer, { width, height, anisotropy, minFilter, magFilter, wrap, wrapS, wrapT, wrapR, format, flipY, baseLevel, maxLevel, mipmaps, isImmutable, immutableLevels }: AbstractTextureParams);
    private createWebGLTexture;
    bind(): void;
    unbind(): void;
    updateWrapping(): void;
    updateFilters(): void;
    updateBaseAndMaxLevel(): void;
    updateFlipY(): void;
    generateMipmaps(): void;
    updateAnisotropy(): void;
    getPixelPackBuffer(): WebGLBuffer;
    delete(): void;
    static convertWrapToWebGLConstant(wrap: RendererTypes.TextureWrap): number;
    static convertMinFilterToWebGLConstant(minFilter: RendererTypes.MinFilter): number;
    static convertMagFilterToWebGLConstant(magFilter: RendererTypes.MagFilter): number;
    static convertFormatToWebGLConstants(format: RendererTypes.TextureFormat): {
        format: number;
        internalFormat: number;
        type: number;
    };
    static getFormatByteSize(format: RendererTypes.TextureFormat): number;
}
//# sourceMappingURL=WebGL2Texture.d.ts.map