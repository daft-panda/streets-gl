import AbstractTexture, {AbstractTextureParams} from "~/lib/renderer/abstract-renderer/AbstractTexture";
import { TypedArray } from "../RendererTypes";

export interface AbstractTexture3DParams extends AbstractTextureParams {
	data?: TypedArray[] | HTMLImageElement[];
	depth: number;
}

export default interface AbstractTexture3D extends AbstractTexture {
	data: TypedArray[] | HTMLImageElement[];
	depth: number;
	updateFromData(): void;
}