import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
import VectorTileHandler from "~/lib/tile-processing/vector/handlers/VectorTileHandler";
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
export default class VectorTilePointHandler implements VectorTileHandler {
    private readonly x;
    private readonly y;
    private readonly tags;
    private readonly osmReference;
    constructor(feature: VectorTile.PointFeature);
    getFeatures(): VectorFeature[];
}
//# sourceMappingURL=VectorTilePointHandler.d.ts.map