import Tile3DExtrudedGeometry from "~/lib/tile-processing/tile3d/features/Tile3DExtrudedGeometry";
import OSMReference from "~/lib/tile-processing/vector/features/OSMReference";
import Tile3DMultipolygon from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
import { RoofSkirt } from "~/lib/tile-processing/tile3d/builders/roofs/RoofBuilder";
import Tile3DTerrainMaskGeometry from "~/lib/tile-processing/tile3d/features/Tile3DTerrainMaskGeometry";
export declare enum RoofType {
    Flat = 0,
    Gabled = 1,
    Gambrel = 2,
    Hipped = 3,
    Pyramidal = 4,
    Onion = 5,
    Dome = 6,
    Round = 7,
    Skillion = 8,
    Mansard = 9,
    QuadrupleSaltbox = 10,
    Saltbox = 11
}
export default class Tile3DExtrudedGeometryBuilder {
    private readonly osmReference;
    private readonly arrays;
    private readonly terrainMaskPositions;
    private readonly multipolygon;
    private readonly boundingBox;
    constructor(osmReference: OSMReference, multipolygon: Tile3DMultipolygon);
    getAreaToOMBBRatio(): number;
    addWalls({ terrainHeight, minHeight, height, skirt, levels, windowWidth, color, textureIdWindow, textureIdWall, windowSeed }: {
        terrainHeight: number;
        minHeight: number;
        height: number;
        skirt: RoofSkirt;
        levels: number;
        windowWidth: number;
        color: number;
        textureIdWindow: number;
        textureIdWall: number;
        windowSeed: number;
    }): void;
    addRoof(params: {
        terrainHeight: number;
        type: RoofType;
        buildingHeight: number;
        minHeight: number;
        height: number;
        direction: number;
        angle: number;
        orientation: 'along' | 'across';
        color: number;
        textureId: number;
        scaleX: number;
        scaleY: number;
        isStretched: boolean;
        flip: boolean;
    }): {
        skirt?: RoofSkirt;
        facadeHeightOverride?: number;
    };
    private buildRoofSafe;
    private addAndPaintGeometry;
    private addMaskGeometry;
    private addVerticesToBoundingBox;
    private applyHeightOffsetToVertices;
    private getIDBuffer;
    getGeometry(): Tile3DExtrudedGeometry;
    getTerrainMaskGeometry(): Tile3DTerrainMaskGeometry;
}
//# sourceMappingURL=Tile3DExtrudedGeometryBuilder.d.ts.map