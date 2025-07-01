import TileSource from "../TileSource";
export default abstract class TileSourceFactory<T extends TileSource<any>> {
    abstract create(x: number, y: number, zoom: number): Promise<T>;
}
//# sourceMappingURL=TileSourceFactory.d.ts.map