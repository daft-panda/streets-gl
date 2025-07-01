import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import AbstractTexture2D, { AbstractTexture2DParams } from "~/lib/renderer/abstract-renderer/AbstractTexture2D";
import WebGL2Texture from "~/lib/renderer/webgl2-renderer/WebGL2Texture";
import { TypedArray } from "../RendererTypes";
export default class WebGL2Texture2D extends WebGL2Texture implements AbstractTexture2D {
    protected textureTypeConstant: number;
    data: TypedArray | HTMLImageElement | ImageBitmap;
    constructor(renderer: WebGL2Renderer, params: AbstractTexture2DParams);
    updateFromData(): void;
    private writeFromImage;
    private writeFromBuffer;
}
//# sourceMappingURL=WebGL2Texture2D.d.ts.map