import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
export default class TAAPass extends Pass<{
    Source: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    GBuffer: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    History: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    Output: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private taaMaterial;
    private fullScreenTriangle;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=TAAPass.d.ts.map