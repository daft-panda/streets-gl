import WebGL2Program from "~/lib/renderer/webgl2-renderer/WebGL2Program";
import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import { TypedArray } from "../RendererTypes";
export default class WebGL2UBO {
    private readonly renderer;
    private readonly gl;
    private readonly program;
    private readonly blockIndex;
    private readonly offsetMap;
    blockName: string;
    blockSize: number;
    private buffer;
    private data;
    private dataView;
    constructor(renderer: WebGL2Renderer, program: WebGL2Program, blockIndex: number);
    private createBuffer;
    private bind;
    bindToBindingPoint(bindingPoint: number): void;
    setUniformValue(uniformName: string, value: TypedArray): void;
    applyUpdates(): void;
}
//# sourceMappingURL=WebGL2UBO.d.ts.map