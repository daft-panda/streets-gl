import RenderableObject3D from "./RenderableObject3D";
import AbstractMesh from "~/lib/renderer/abstract-renderer/AbstractMesh";
import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import Tile from "./Tile";
import Camera from "~/lib/core/Camera";
import Vec2 from "~/lib/math/Vec2";
interface AttributeBuffers {
    position: Float32Array;
    offset: Float32Array;
    uv: Float32Array;
    index: Uint32Array;
}
export default class Labels extends RenderableObject3D {
    mesh: AbstractMesh;
    attributeBuffers: AttributeBuffers;
    private attributeBuffersDirty;
    private tree;
    constructor();
    isMeshReady(): boolean;
    updateMesh(renderer: AbstractRenderer): void;
    private getVisibleLabels;
    private sortLabelsByPriority;
    private declutterLabels;
    private mergeLabelsIntoBuffers;
    updateFromTiles(tiles: Tile[], camera: Camera, resolution: Vec2): void;
}
export {};
//# sourceMappingURL=Labels.d.ts.map