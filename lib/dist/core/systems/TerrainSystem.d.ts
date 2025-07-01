import System from "../System";
import Vec2 from "~/lib/math/Vec2";
import HeightTileSource from "../terrain/tile-source/HeightTileSource";
import WaterTileSource from "../terrain/tile-source/WaterTileSource";
import TileAreaLoader from "../terrain/TileAreaLoader";
import TerrainHeightProvider from "../terrain/TerrainHeightProvider";
export interface TerrainAreaLoaders {
    water0: TileAreaLoader<WaterTileSource>;
    water1: TileAreaLoader<WaterTileSource>;
    height0: TileAreaLoader<HeightTileSource>;
    height1: TileAreaLoader<HeightTileSource>;
}
export default class TerrainSystem extends System {
    maskOrigin: Vec2;
    areaLoaders: Readonly<TerrainAreaLoaders>;
    readonly terrainHeightProvider: TerrainHeightProvider;
    private loadTerrainHeight;
    postInit(): void;
    private createAreaLoaders;
    private listenToSettings;
    update(deltaTime: number): void;
    private updateAreaLoaders;
    private updateHeightLoaders;
    private updateWaterLoaders;
    private updateRingPositions;
    private updateRingAreaTransforms;
    private updateRingMaskTransforms;
}
//# sourceMappingURL=TerrainSystem.d.ts.map