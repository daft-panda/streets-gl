import Vec2 from "~/lib/math/Vec2";
import System from "../System";
import * as RG from "~/lib/render-graph";
import FullScreenTriangle from "../objects/FullScreenTriangle";
import Node from "../../lib/render-graph/Node";
import AbstractTexture2D from "~/lib/renderer/abstract-renderer/AbstractTexture2D";
export default class RenderSystem extends System {
    private renderer;
    private frameCount;
    private renderGraph;
    private renderGraphResourceFactory;
    private passManager;
    fullScreenTriangle: FullScreenTriangle;
    postInit(): void;
    private initScene;
    private resize;
    update(deltaTime: number): void;
    getLastRenderGraph(): Set<RG.Node>;
    getLastRenderGraphPassList(): RG.Pass<any>[];
    getRenderGraphNodeConnectionSets(): {
        indegree: Map<Node, Set<Node>>;
        outdegree: Map<Node, Set<Node>>;
    };
    createTileTexture(image: HTMLImageElement): AbstractTexture2D;
    private pickObjectId;
    get resolutionUI(): Vec2;
    get resolutionScene(): Vec2;
}
//# sourceMappingURL=RenderSystem.d.ts.map