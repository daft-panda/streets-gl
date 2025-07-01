import * as RG from "~/lib/render-graph";
import PassManager from '../PassManager';
import AbstractRenderer from '~/lib/renderer/abstract-renderer/AbstractRenderer';
import RenderGraphResourceFactory from '../render-graph/RenderGraphResourceFactory';
export default abstract class Pass<T extends RG.ResourcePropMap = RG.ResourcePropMap> extends RG.Pass<T> {
    protected readonly manager: PassManager;
    protected readonly renderer: AbstractRenderer;
    protected readonly resourceFactory: RenderGraphResourceFactory;
    protected constructor(name: string, manager: PassManager, initialResources: T);
    abstract setSize(width: number, height: number): void;
}
//# sourceMappingURL=Pass.d.ts.map