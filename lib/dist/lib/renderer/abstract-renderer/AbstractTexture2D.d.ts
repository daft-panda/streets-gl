import AbstractTexture, { AbstractTextureParams } from "~/lib/renderer/abstract-renderer/AbstractTexture";
import { TypedArray } from "../RendererTypes";
export interface AbstractTexture2DParams extends AbstractTextureParams {
    data?: TypedArray | HTMLImageElement | ImageBitmap;
}
export default interface AbstractTexture2D extends AbstractTexture {
    data: TypedArray | HTMLImageElement | ImageBitmap;
    updateFromData(): void;
}
//# sourceMappingURL=AbstractTexture2D.d.ts.map