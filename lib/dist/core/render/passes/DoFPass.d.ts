import Pass from "./Pass";
import * as RG from "~/lib/render-graph";
import { InternalResourceType } from "~/lib/render-graph";
import RenderPassResource from "../render-graph/resources/RenderPassResource";
import PassManager from "../PassManager";
export default class DoFPass extends Pass<{
    HDR: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    GBuffer: {
        type: InternalResourceType.Input;
        resource: RenderPassResource;
    };
    CoC: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    CoCHistory: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    CoCAntialiased: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    CoCWithColorDownscaled: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    DoFRaw: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    DoFBlurred: {
        type: RG.InternalResourceType.Local;
        resource: RenderPassResource;
    };
    DoF: {
        type: RG.InternalResourceType.Output;
        resource: RenderPassResource;
    };
}> {
    private readonly cocMaterial;
    private readonly cocAntialiasMaterial;
    private readonly cocDownscaleMaterial;
    private readonly dofMaterial;
    private readonly dofBlurMaterial;
    private readonly dofCombineMaterial;
    private readonly fullScreenTriangle;
    private readonly pointerPosition;
    constructor(manager: PassManager);
    private listenToSettings;
    private listenToPointerMovement;
    private updateCoCDefines;
    render(): void;
    private renderCoC;
    private antialiasCoC;
    private downscaleCoC;
    private renderDoF;
    private blurDoF;
    private combineDoFWithSource;
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=DoFPass.d.ts.map