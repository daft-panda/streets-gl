import Vec2 from "~/lib/math/Vec2";
export default class FenceBuilder {
    static build({ vertices, minHeight, height, uvWidth, uvHeight, uvHorizontalOffset }: {
        vertices: Vec2[];
        minHeight: number;
        height: number;
        uvWidth: number;
        uvHeight: number;
        uvHorizontalOffset?: number;
    }): {
        position: number[];
        uv: number[];
        normal: number[];
    };
}
//# sourceMappingURL=FenceBuilder.d.ts.map