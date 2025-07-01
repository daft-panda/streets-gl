import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import { InternalResourceType } from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
export default class SSRPass extends Pass<{
    GBuffer: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    LastFrame: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SSR: {
        type: InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private ssrMaterial;
    private fullScreenTriangle;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=SSRPass.d.ts.map