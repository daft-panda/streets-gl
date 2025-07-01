import VectorFeatureProvider from "~/lib/tile-processing/vector/providers/VectorFeatureProvider";
import VectorFeatureCollection from "~/lib/tile-processing/vector/features/VectorFeatureCollection";
import { Tile3DProviderParams } from "~/lib/tile-processing/tile3d/providers/Tile3DFromVectorProvider";
export default class CombinedVectorFeatureProvider extends VectorFeatureProvider {
    private readonly overpassProvider;
    private readonly mapboxProvider;
    private readonly pbfProvider;
    constructor(params: Tile3DProviderParams);
    getCollection({ x, y, zoom }: {
        x: number;
        y: number;
        zoom: number;
    }): Promise<VectorFeatureCollection>;
    private mergeCollections;
    private clearFeaturesNotInTile;
    private isAreaInTile;
}
//# sourceMappingURL=CombinedVectorFeatureProvider.d.ts.map