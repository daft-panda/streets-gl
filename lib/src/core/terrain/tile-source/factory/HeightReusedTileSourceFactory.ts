import TerrainHeightProvider from "../../TerrainHeightProvider";
import HeightTileSource from "../HeightTileSource";
import TileSourceFactory from "./TileSourceFactory";

export default class HeightReusedTileSourceFactory extends TileSourceFactory<HeightTileSource> {
	public constructor(
		private readonly terrainHeightProvider: TerrainHeightProvider,
		private readonly level: number
	) {
		super();
	}

	public async create(x: number, y: number, zoom: number): Promise<HeightTileSource> {
		const source = new HeightTileSource(x, y, zoom);
		await source.loadFromHeightLoader(this.terrainHeightProvider.heightLoader, this.level);

		return source;
	}
}