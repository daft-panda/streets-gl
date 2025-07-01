import { SegmentEntity } from "~/lib/tile-processing/powerline-graph/PowerlineGraph";
import Tile3DInstance from "~/lib/tile-processing/tile3d/features/Tile3DInstance";
export default class WireGroupBuilder {
    build(segment: SegmentEntity, startHeight: number, endHeight: number, mercatorScale: number): Tile3DInstance[];
    private dotProduct;
    private vectorToEulerRotation;
    private createWireSegment;
}
//# sourceMappingURL=WireGroupBuilder.d.ts.map