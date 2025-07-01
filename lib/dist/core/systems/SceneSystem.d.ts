import System from '../System';
import Object3D from '~/lib/core/Object3D';
import PerspectiveCamera from '~/lib/core/PerspectiveCamera';
import Skybox from '../objects/Skybox';
import RenderableObject3D from '../objects/RenderableObject3D';
import Vec2 from '~/lib/math/Vec2';
import CSM from "../render/CSM";
import Labels from "../objects/Labels";
import InstancedAircraftPart from "../objects/InstancedAircraftPart";
import Terrain from "../objects/Terrain";
import Camera from "~/lib/core/Camera";
import Tile from '../objects/Tile';
import InstancedObject from '../objects/InstancedObject';
import { AircraftPartType } from '../vehicles/aircraft/Aircraft';
interface SceneObjects {
    wrapper: Object3D;
    camera: PerspectiveCamera;
    skybox: Skybox;
    tiles: Tile[];
    csm: CSM;
    labels: Labels;
    terrain: Terrain;
    instancedObjects: Map<string, InstancedObject>;
    instancedAircraftParts: Map<AircraftPartType, InstancedAircraftPart>;
}
export default class SceneSystem extends System {
    scene: Object3D;
    objects: SceneObjects;
    pivotDelta: Vec2;
    postInit(): void;
    private initScene;
    private getCameraFoVFromSettings;
    private listenToSettings;
    private listenToScreenResize;
    private resize;
    getObjectsToUpdateMesh(): RenderableObject3D[];
    private updateTiles;
    updateInstancedObjectsBuffers(tiles: Tile[], camera: Camera, origin: Vec2): void;
    update(deltaTime: number): void;
}
export {};
//# sourceMappingURL=SceneSystem.d.ts.map