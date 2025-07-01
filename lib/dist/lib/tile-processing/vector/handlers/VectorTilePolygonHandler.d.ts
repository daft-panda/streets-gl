import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
import VectorTileHandler from "~/lib/tile-processing/vector/handlers/VectorTileHandler";
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
export default class VectorTilePolygonHandler implements VectorTileHandler {
    private readonly rings;
    private readonly tags;
    private readonly osmReference;
    constructor(feature: VectorTile.PolygonFeature);
    addRing(ring: VectorTile.PolygonRingGeometry): void;
    getFeatures(): VectorFeature[];
    private getVectorAreasFromRings;
    private static isRingClockwise;
    private static validateRing;
    private static inputRingToVectorRing;
}
//# sourceMappingURL=VectorTilePolygonHandler.d.ts.map