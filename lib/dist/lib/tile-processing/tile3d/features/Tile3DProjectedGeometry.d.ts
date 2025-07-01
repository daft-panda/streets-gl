import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import AABB3D from "~/lib/math/AABB3D";
export declare const ZIndexMap: {
    readonly Water: 0;
    readonly Grass: 1;
    readonly Sand: 2;
    readonly Rock: 3;
    readonly ManicuredGrass: 4;
    readonly Garden: 5;
    readonly Construction: 6;
    readonly Farmland: 7;
    readonly Waterway: 8;
    readonly Pitch: 9;
    readonly ShrubberySoil: 10;
    readonly Railway: 11;
    readonly RailwayOverlay: 12;
    readonly DirtRoadway: 13;
    readonly SandRoadway: 14;
    readonly RoadwayArea: 15;
    readonly Footway: 16;
    readonly WoodFootway: 17;
    readonly AsphaltFootway: 17;
    readonly FootwayArea: 18;
    readonly Cycleway: 19;
    readonly AsphaltRoadway: 20;
    readonly ConcreteRoadway: 21;
    readonly WoodRoadway: 22;
    readonly CobblestoneRoadway: 23;
    readonly AsphaltArea: 24;
    readonly ConcreteArea: 25;
    readonly CobblestoneArea: 26;
    readonly Runway: 27;
    readonly Rail: 28;
    readonly Helipad: 29;
};
export default interface Tile3DProjectedGeometry extends Tile3DFeature {
    type: 'projected';
    zIndex: number;
    boundingBox: AABB3D;
    positionBuffer: Float32Array;
    normalBuffer: Float32Array;
    uvBuffer: Float32Array;
    textureIdBuffer: Uint8Array;
}
//# sourceMappingURL=Tile3DProjectedGeometry.d.ts.map