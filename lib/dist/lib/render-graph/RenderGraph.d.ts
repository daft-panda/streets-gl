import Pass from "./Pass";
import Node from "./Node";
import ResourcePool from "./PhysicalResourcePool";
export default class RenderGraph {
    private readonly resourcePool;
    passes: Set<Pass<any>>;
    lastGraph: Set<Node>;
    lastSortedPassList: Pass<any>[];
    indegreeSets: Map<Node, Set<Node>>;
    outdegreeSets: Map<Node, Set<Node>>;
    private nextNodes;
    private previousNodes;
    constructor(resourcePool?: ResourcePool);
    addPass(pass: Pass<any>): void;
    private sortRenderableNodes;
    private getResourcesUsedExternally;
    private buildGraphWithCulling;
    private updateAllNodesVertices;
    private attachPhysicalResources;
    private resetPhysicalResources;
    private renderPasses;
    render(): void;
}
//# sourceMappingURL=RenderGraph.d.ts.map