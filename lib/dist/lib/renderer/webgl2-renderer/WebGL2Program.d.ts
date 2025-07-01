import WebGL2Renderer from "~/lib/renderer/webgl2-renderer/WebGL2Renderer";
export default class WebGL2Program {
    private readonly renderer;
    private readonly gl;
    private readonly name;
    private readonly fragmentShaderSource;
    private readonly vertexShaderSource;
    private readonly defines;
    WebGLProgram: WebGLProgram;
    private fragmentShader;
    private vertexShader;
    constructor({ renderer, vertexShaderSource, fragmentShaderSource, defines, name }: {
        renderer: WebGL2Renderer;
        vertexShaderSource: string;
        fragmentShaderSource: string;
        defines: Record<string, string>;
        name: string;
    });
    private getShader;
    private createProgram;
    recompileShaders(): void;
    private compileShader;
    private formatShaderSource;
}
//# sourceMappingURL=WebGL2Program.d.ts.map