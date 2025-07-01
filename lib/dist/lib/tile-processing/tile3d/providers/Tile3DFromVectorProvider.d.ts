import Tile3DFeatureCollection from "~/lib/tile-processing/tile3d/features/Tile3DFeatureCollection";
import { FeatureProvider } from "~/lib/tile-processing/types";
export interface Tile3DProviderParams {
    overpassEndpoint: string;
    tileServerEndpoint: string;
    vectorTilesEndpointTemplate: string;
    heightPromise: (positions: Float64Array) => Promise<Float64Array>;
}
export default class Tile3DFromVectorProvider implements FeatureProvider<Tile3DFeatureCollection> {
    private readonly vectorProvider;
    private readonly params;
    constructor(params: Tile3DProviderParams);
    getCollection({ x, y, zoom }: {
        x: number;
        y: number;
        zoom: number;
    }): Promise<Tile3DFeatureCollection>;
    private static createHandlersFromVectorFeatureCollection;
    private static transformVectorFeaturesToWorldSpace;
    private static transformOMBBToWorldSpace;
    private static transformPOIToWorldSpace;
    private static transformVectorNodeToWorldSpace;
    private static addRoadGraphToHandlers;
    private static addIntersectionPolygonsToHandlers;
    private static getIntersectionMaterial;
    private static getCollectionFromHandlers;
    private static updateFeaturesMercatorScale;
    private static updateFeaturesHeight;
    private static splitHeightArray;
}
//# sourceMappingURL=Tile3DFromVectorProvider.d.ts.map