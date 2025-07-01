import Pass from "./Pass";
import * as RG from "~/lib/render-graph";
import RenderPassResource from "../render-graph/resources/RenderPassResource";
import { InternalResourceType } from "~/lib/render-graph";
import PassManager from "../PassManager";
export default class ScreenPass extends Pass<{
    HDR: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    Labels: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SlippyMap: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    Output: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private readonly material;
    private readonly fullScreenTriangle;
    constructor(manager: PassManager);
    private getLabelsTexture;
    private getHDRTexture;
    private getSlippyMapTexture;
    private updateMaterialDefines;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=ScreenPass.d.ts.map