import Pass from "./Pass";
import { InternalResourceType } from "~/lib/render-graph";
import RenderPassResource from "../render-graph/resources/RenderPassResource";
import PassManager from "../PassManager";
export default class ShadowMappingPass extends Pass<{
    ShadowMaps: {
        type: InternalResourceType.Output;
        resource: RenderPassResource;
    };
    TerrainRingHeight: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
}> {
    private readonly extrudedMeshMaterial;
    private readonly huggingMeshMaterial;
    private readonly treeMaterial;
    private readonly genericInstanceMaterial;
    private readonly aircraftMaterial;
    constructor(manager: PassManager);
    private listenToSettings;
    private updateMaterialsDefines;
    private updateShadowMapDescriptor;
    private renderExtrudedMeshes;
    private renderHuggingMeshes;
    private renderInstances;
    private getInstancesOrigin;
    private renderAircraft;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=ShadowMappingPass.d.ts.map