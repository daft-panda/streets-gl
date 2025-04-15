import HeightTileSource from "../HeightTileSource";
import TileSourceFactory from "./TileSourceFactory";

export default class HeightTileSourceFactory extends TileSourceFactory<HeightTileSource> {
	public async create(x: number, y: number, zoom: number): Promise<HeightTileSource> {
		const source = new HeightTileSource(x, y, zoom);
		await source.load();

		return source;
	}
}