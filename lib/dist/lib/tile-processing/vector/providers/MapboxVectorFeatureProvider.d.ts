import VectorFeatureCollection from "~/lib/tile-processing/vector/features/VectorFeatureCollection";
import { FeatureProvider } from "~/lib/tile-processing/types";
export default class MapboxVectorFeatureProvider implements FeatureProvider<VectorFeatureCollection> {
    private readonly endpointTemplate;
    constructor(endpointTemplate: string);
    getCollection({ x, y, zoom }: {
        x: number;
        y: number;
        zoom: number;
    }): Promise<VectorFeatureCollection>;
    private fetchTile;
    private buildRequestURL;
}
//# sourceMappingURL=MapboxVectorFeatureProvider.d.ts.map