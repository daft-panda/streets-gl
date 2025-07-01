import Pass from './Pass';
import * as RG from "~/lib/render-graph";
import RenderPassResource from '../render-graph/resources/RenderPassResource';
import PassManager from '../PassManager';
import TextureResource from "../render-graph/resources/TextureResource";
export default class AtmosphereLUTPass extends Pass<{
    Transmittance: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    MultipleScattering: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    SkyView: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
    AerialPerspective: {
        type: RG.InternalResourceType.Output;
        resource: TextureResource;
    };
    Skybox: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private fullScreenTriangle;
    private transmittanceMaterial;
    private multipleScatteringMaterial;
    private skyViewMaterial;
    private aerialPerspectiveMaterial;
    private skyboxMaterial;
    private staticLUTsReady;
    private aerialPerspectiveRenderPass;
    constructor(manager: PassManager);
    private init;
    render(): void;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=AtmosphereLUTPass.d.ts.map