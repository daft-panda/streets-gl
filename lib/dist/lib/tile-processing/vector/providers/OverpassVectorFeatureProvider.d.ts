import VectorFeatureProvider from "~/lib/tile-processing/vector/providers/VectorFeatureProvider";
import VectorFeatureCollection from "~/lib/tile-processing/vector/features/VectorFeatureCollection";
export default class OverpassVectorFeatureProvider extends VectorFeatureProvider {
    private readonly overpassURL;
    constructor(overpassURL: string);
    getCollection({ x, y, zoom }: {
        x: number;
        y: number;
        zoom: number;
    }): Promise<VectorFeatureCollection>;
    private static getFeaturesFromHandlers;
    private static fetchOverpassTile;
    private static classifyElements;
}
//# sourceMappingURL=OverpassVectorFeatureProvider.d.ts.map