import Vec2 from "~/lib/math/Vec2";
export default class WallsBuilder {
    static build({ vertices, minHeight, height, heightPoints, levels, windowWidth, textureIdWindow, textureIdWall, uvOffset }: {
        vertices: Vec2[];
        minHeight: number;
        height: number;
        heightPoints?: number[];
        levels: number;
        windowWidth: number;
        textureIdWindow: number;
        textureIdWall: number;
        uvOffset?: Vec2;
    }): {
        position: number[];
        uv: number[];
        normal: number[];
        textureId: number[];
    };
    private static getNextVertex;
    private static getPreviousVertex;
    private static getEdgeSmoothness;
    private static getWalls;
    private static getSegmentsNormals;
    private static getNextSegmentNormal;
    private static getPreviousSegmentNormal;
    private static getWallNormals;
    private static getWallPositions;
    private static getWallUVsAndTextureIds;
}
//# sourceMappingURL=WallsBuilder.d.ts.map