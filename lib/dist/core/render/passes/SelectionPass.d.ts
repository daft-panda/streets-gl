import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
export default class SelectionPass extends Pass<{
    GBuffer: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SelectionMask: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    SelectionBlurTemp: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    SelectionBlurred: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private fullScreenTriangle;
    private maskMaterial;
    private blurMaterial;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=SelectionPass.d.ts.map