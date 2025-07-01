import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import WebGL2Texture from "~/lib/renderer/webgl2-renderer/WebGL2Texture";
import AbstractTexture2DArray, { AbstractTexture2DArrayParams } from "~/lib/renderer/abstract-renderer/AbstractTexture2DArray";
import { TypedArray } from "../RendererTypes";
export default class WebGL2Texture2DArray extends WebGL2Texture implements AbstractTexture2DArray {
    protected textureTypeConstant: number;
    depth: number;
    data: TypedArray[] | HTMLImageElement[];
    constructor(renderer: WebGL2Renderer, params: AbstractTexture2DArrayParams);
    updateFromData(): void;
    private writeFromBuffer;
    private writeSliceFromImage;
    private writeSliceFromBuffer;
    copyFromCurrentRenderPass(x: number, y: number, width: number, height: number): void;
}
//# sourceMappingURL=WebGL2Texture2DArray.d.ts.map