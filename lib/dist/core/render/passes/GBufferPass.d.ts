import Pass from "./Pass";
import RenderPassResource from "../render-graph/resources/RenderPassResource";
import { InternalResourceType } from '~/lib/render-graph/Pass';
import PassManager from '../PassManager';
export default class GBufferPass extends Pass<{
    GBufferRenderPass: {
        type: InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainNormal: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    TerrainWater: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    TerrainWaterTileMask: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    TerrainRingHeight: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    TerrainUsage: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    TerrainUsageTileMask: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
}> {
    private extrudedMeshMaterial;
    private projectedMeshMaterial;
    private huggingMeshMaterial;
    private skyboxMaterial;
    private terrainMaterial;
    private treeMaterial;
    private genericInstanceMaterial;
    private advancedInstanceMaterial;
    private aircraftMaterial;
    private cameraMatrixWorldInversePrev;
    objectIdBuffer: Uint32Array;
    objectIdX: number;
    objectIdY: number;
    private fullScreenTriangle;
    constructor(manager: PassManager);
    private createMaterials;
    private updateMaterialsDefines;
    private getTileNormalTexturesTransforms;
    private getCameraPositionRelativeToTile;
    private renderSkybox;
    private renderExtrudedMeshes;
    private renderTerrain;
    private getTileDetailTextureOffset;
    private renderProjectedMeshes;
    private renderHuggingMeshes;
    private renderInstances;
    private renderAircraft;
    private writeToObjectIdBuffer;
    private getInstancesOrigin;
    render(): void;
    private saveCameraMatrixWorldInverse;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=GBufferPass.d.ts.map