import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import WebGL2Texture from "~/lib/renderer/webgl2-renderer/WebGL2Texture";
import AbstractTexture3D, { AbstractTexture3DParams } from "~/lib/renderer/abstract-renderer/AbstractTexture3D";
import { TypedArray } from "../RendererTypes";
export default class WebGL2Texture3D extends WebGL2Texture implements AbstractTexture3D {
    protected textureTypeConstant: number;
    depth: number;
    data: TypedArray[] | HTMLImageElement[];
    constructor(renderer: WebGL2Renderer, params: AbstractTexture3DParams);
    updateFromData(): void;
    private writeFromBuffer;
}
//# sourceMappingURL=WebGL2Texture3D.d.ts.map