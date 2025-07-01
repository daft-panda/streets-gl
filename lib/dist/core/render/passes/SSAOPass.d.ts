import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
export default class SSAOPass extends Pass<{
    GBuffer: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    BlurHorizontal: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    BlurVertical: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    RawSSAO: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    SSAOAccum: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    SSAOPrevDepth: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    SSAOResult: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private ssaoMaterial;
    private blurMaterial;
    private reprojectMaterial;
    private fullScreenTriangle;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=SSAOPass.d.ts.map