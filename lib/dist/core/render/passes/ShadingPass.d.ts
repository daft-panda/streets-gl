import Pass from "./Pass";
import * as RG from "~/lib/render-graph";
import { InternalResourceType } from "~/lib/render-graph";
import RenderPassResource from "../render-graph/resources/RenderPassResource";
import PassManager from "../PassManager";
import TextureResource from "../render-graph/resources/TextureResource";
export default class ShadingPass extends Pass<{
    GBuffer: {
        type: RG.InternalResourceType.Input;
        resource: RenderPassResource;
    };
    ShadowMaps: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SSAO: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SelectionMask: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SelectionBlurred: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    HDR: {
        type: InternalResourceType.Output;
        resource: RenderPassResource;
    };
    SkyViewLUT: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    AerialPerspectiveLUT: {
        type: InternalResourceType.Input;
        resource: TextureResource;
    };
    TransmittanceLUT: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    AtmosphereSkybox: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    SSR: {
        type: InternalResourceType.Local;
        resource: RenderPassResource;
    };
}> {
    private readonly shadingMaterial;
    private readonly fullScreenTriangle;
    constructor(manager: PassManager);
    private getShadowMapsTexture;
    private getSSAOTexture;
    private getSSRTexture;
    private updateShadingMaterialDefines;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=ShadingPass.d.ts.map