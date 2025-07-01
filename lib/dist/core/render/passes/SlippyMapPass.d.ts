import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
export default class SlippyMapPass extends Pass<{
    SlippyMap: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private tileMaterial;
    private quad;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=SlippyMapPass.d.ts.map