import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import AABB3D from "~/lib/math/AABB3D";
export type Tile3DInstanceType = 'tree' | 'adColumn' | 'transmissionTower' | 'utilityPole' | 'wire' | 'hydrant' | 'trackedCrane' | 'towerCrane' | 'bench' | 'picnicTable' | 'busStop' | 'windTurbine' | 'shrubbery' | 'memorial' | 'statueSmall' | 'statueBig' | 'sculpture';
export declare enum InstanceStructure {
    Generic = 0,
    Tree = 1,
    Advanced = 2
}
export interface InstanceStructureSchema {
    componentsPerInstance: number;
    getComponents(instance: Tile3DInstance): number[];
    transformBoundingBox(boundingBox: AABB3D, components: number[]): AABB3D;
}
export declare const InstanceStructureSchemas: Record<InstanceStructure, InstanceStructureSchema>;
export interface LODConfig {
    structure: InstanceStructure;
    LOD0MaxDistance: number;
    LOD1MaxDistance: number;
    LOD1Fraction: number;
}
export declare const Tile3DInstanceLODConfig: Record<Tile3DInstanceType, LODConfig>;
export default interface Tile3DInstance extends Tile3DFeature {
    type: 'instance';
    instanceType: Tile3DInstanceType;
    x: number;
    y: number;
    z: number;
    scale?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    scaleZ?: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    textureId?: number;
    seed?: number;
}
//# sourceMappingURL=Tile3DInstance.d.ts.map