import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
import AbstractMaterial, { AbstractMaterialBlendParams, AbstractMaterialDepthParams, AbstractMaterialParams, AbstractMaterialPrimitiveParams } from "~/lib/renderer/abstract-renderer/AbstractMaterial";
import WebGL2Program from "~/lib/renderer/webgl2-renderer/WebGL2Program";
import { Uniform } from "~/lib/renderer/abstract-renderer/Uniform";
export default class WebGL2Material implements AbstractMaterial {
    private readonly renderer;
    private readonly gl;
    readonly name: string;
    readonly vertexShaderSource: string;
    readonly fragmentShaderSource: string;
    readonly uniforms: Uniform[];
    readonly defines: Record<string, string>;
    readonly primitive: AbstractMaterialPrimitiveParams;
    readonly depth: AbstractMaterialDepthParams;
    readonly blend: AbstractMaterialBlendParams;
    program: WebGL2Program;
    private ubos;
    private uniformLocations;
    private uniformTextureUnits;
    constructor(renderer: WebGL2Renderer, { name, vertexShaderSource, fragmentShaderSource, uniforms, defines, primitive, depth, blend }: AbstractMaterialParams);
    private createProgram;
    recompile(): void;
    private createUBOs;
    getUniform<T extends Uniform>(name: string, block?: string): T;
    private getUniformsInBlock;
    use(): void;
    updateUniform(name: string): void;
    updateUniformBlock(blockName: string): void;
    private getUniformLocation;
    private getUniformTextureUnit;
    private setUniformValueAtLocation;
}
//# sourceMappingURL=WebGL2Material.d.ts.map