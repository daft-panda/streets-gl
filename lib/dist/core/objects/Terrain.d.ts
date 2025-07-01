import Object3D from "~/lib/core/Object3D";
import TerrainRing from "./TerrainRing";
import Vec2 from "~/lib/math/Vec2";
import Tile from "./Tile";
export default class Terrain extends Object3D {
    children: TerrainRing[];
    constructor();
    getTileParams(tile: Tile): {
        ring0: TerrainRing;
        ring1: TerrainRing;
        ring0Offset: Vec2;
        ring1Offset: Vec2;
        levelId: number;
    };
}
//# sourceMappingURL=Terrain.d.ts.map