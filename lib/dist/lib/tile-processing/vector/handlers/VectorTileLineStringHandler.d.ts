import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
import VectorTileHandler from "~/lib/tile-processing/vector/handlers/VectorTileHandler";
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
export default class VectorTileLineStringHandler implements VectorTileHandler {
    private readonly tags;
    private readonly osmReference;
    private readonly geometry;
    constructor(feature: VectorTile.LineStringFeature);
    getFeatures(): VectorFeature[];
    private getVectorPolylineFromGeometry;
    private getVectorNodesFromGeometry;
}
//# sourceMappingURL=VectorTileLineStringHandler.d.ts.map