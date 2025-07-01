import Pass from "./Pass";
import * as RG from "~/lib/render-graph";
import RenderPassResource from "../render-graph/resources/RenderPassResource";
import { InternalResourceType } from "~/lib/render-graph";
import PassManager from "../PassManager";
export default class BloomPass extends Pass<{
    Color: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    BloomHighLuminosity: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    Output: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private readonly luminosityMaterial;
    private readonly blurMaterial;
    private readonly combineMaterial;
    private readonly luminosityDownscaled;
    private readonly luminosityDownscaledBlurred;
    constructor(manager: PassManager);
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=BloomPass.d.ts.map