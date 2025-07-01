import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import PassManager from '../PassManager';
import RenderPassResource from "../render-graph/resources/RenderPassResource";
export default class TerrainTexturesPass extends Pass<{
    TerrainHeight: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    TerrainNormal: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainWater: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainWaterTileMask: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainRingHeight: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainUsage: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainUsageTemp0: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainUsageTemp1: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainUsageTemp2: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainUsageTileMask: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private quad;
    private heightMaterial;
    private ringHeightMaterial;
    private heightDownscaleMaterial;
    private normalMaterial;
    private waterMaterial;
    private usageMaterial;
    private usageBlurMaterial;
    private usageSDFMaterial;
    private usageSDFDownscaleMaterial0;
    private usageSDFDownscaleMaterial1;
    private uintClearMaterial;
    private tileMaskStorage;
    private shouldRenderHeight;
    constructor(manager: PassManager);
    private init;
    private listenToSettings;
    render(): void;
    private renderTerrainHeightAndNormals;
    private updateWaterTileMask;
    private updateWater;
    private renderTerrainRings;
    private getTileUsageTransform;
    private renderTileUsage;
    updateTerrainMask(): void;
    private updateTerrainTileMask;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=TerrainTexturesPass.d.ts.map