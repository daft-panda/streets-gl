import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
export default class LabelPass extends Pass<{
    Labels: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private textLabelMaterial;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=LabelPass.d.ts.map