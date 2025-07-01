import VectorArea from "~/lib/tile-processing/vector/features/VectorArea";
export default class VectorBuildingOutlinesCleaner {
    private boundingBoxMap;
    private geoJSONMap;
    deleteBuildingOutlines(areas: VectorArea[]): VectorArea[];
    private getPartsAndOutlinesFromAreas;
    private getAreaBoundingBox;
    private getAreaGeoJSON;
    private isBoundingBoxesIntersect;
    private subtractPartFromOutline;
    private executePolygonDifference;
    private static logError;
    private static getMultiPolygonArea;
    private static getPolygonArea;
    private static getRingArea;
    private static getVectorAreaGeoJSON;
    private static getVectorAreaBoundingBox;
}
//# sourceMappingURL=VectorBuildingOutlinesCleaner.d.ts.map