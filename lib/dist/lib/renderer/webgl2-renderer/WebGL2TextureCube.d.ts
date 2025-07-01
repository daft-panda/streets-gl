import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import WebGL2Texture from "~/lib/renderer/webgl2-renderer/WebGL2Texture";
import AbstractTextureCube, { AbstractTextureCubeParams } from "~/lib/renderer/abstract-renderer/AbstractTextureCube";
import { TypedArray } from "../RendererTypes";
export default class WebGL2TextureCube extends WebGL2Texture implements AbstractTextureCube {
    protected textureTypeConstant: number;
    data: TypedArray[] | HTMLImageElement[];
    constructor(renderer: WebGL2Renderer, params: AbstractTextureCubeParams);
    updateFromData(): void;
    private writeSideFromImage;
    private writeSideFromBuffer;
}
//# sourceMappingURL=WebGL2TextureCube.d.ts.map