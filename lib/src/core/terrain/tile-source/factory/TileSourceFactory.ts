import TileSource from "../TileSource";

export default abstract class TileSourceFactory<T extends TileSource<any>> {
	public abstract create(x: number, y: number, zoom: number): Promise<T>;
}