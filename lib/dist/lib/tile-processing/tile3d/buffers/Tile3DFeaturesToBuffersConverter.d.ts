import { Tile3DBuffers } from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
import Tile3DFeatureCollection from "~/lib/tile-processing/tile3d/features/Tile3DFeatureCollection";
export declare class Tile3DFeaturesToBuffersConverter {
    static convert(collection: Tile3DFeatureCollection): Tile3DBuffers;
    private static mergeExtrudedGeometriesWithSameOsmRef;
    private static mergeExtrudedGeometries;
    private static getExtrudedBuffers;
    private static getProjectedBuffers;
    private static getHuggingBuffers;
    private static getTerrainMaskBuffers;
    private static getLabelsBuffers;
    private static getInstanceBuffers;
    private static getInstancesBuffers;
    private static clearInstancesWithHeatMap;
    private static createInstanceInterleavedBuffer;
    private static joinBoundingBoxes;
    private static sortProjectedFeatures;
    private static boundingBoxToFlatObject;
}
//# sourceMappingURL=Tile3DFeaturesToBuffersConverter.d.ts.map