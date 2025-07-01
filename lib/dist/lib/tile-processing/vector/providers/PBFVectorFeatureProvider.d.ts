import VectorFeatureCollection from "~/lib/tile-processing/vector/features/VectorFeatureCollection";
import { FeatureProvider } from "~/lib/tile-processing/types";
export default class PBFVectorFeatureProvider implements FeatureProvider<VectorFeatureCollection> {
    constructor();
    getCollection({ x, y, zoom }: {
        x: number;
        y: number;
        zoom: number;
    }): Promise<VectorFeatureCollection>;
    private static fetchTile;
    private static getTileURL;
    private static getVectorTileHandlers;
    private static getFeaturesFromHandlers;
}
//# sourceMappingURL=PBFVectorFeatureProvider.d.ts.map