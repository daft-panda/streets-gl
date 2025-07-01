import Tile3DMultipolygon from "~/lib/tile-processing/tile3d/builders/Tile3DMultipolygon";
export declare enum SurfaceBuilderOrientation {
    Along = 0,
    Across = 1
}
export default class SurfaceBuilder {
    static build({ multipolygon, isOriented, stretch, orientation, uvScale }: {
        multipolygon: Tile3DMultipolygon;
        isOriented: boolean;
        stretch: boolean;
        orientation: SurfaceBuilderOrientation;
        uvScale: number;
    }): {
        position: number[];
        uv: number[];
        normal: number[];
    };
}
//# sourceMappingURL=SurfaceBuilder.d.ts.map