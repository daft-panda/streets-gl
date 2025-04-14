import Tile3DFeature from "~/lib/tile-processing/tile3d/features/Tile3DFeature";
import RoadGraph from "~/lib/road-graph/RoadGraph";
import { TileMetadata } from "../buffers/Tile3DBuffers";

export interface RequestedHeightParams {
	positions: Float64Array;
	callback: (heights: Float64Array) => void;
}

export default interface Handler {
	setRoadGraph(graph: RoadGraph): void;
	setMercatorScale(scale: number): void;
	process(): void;
	getFeatures(): Tile3DFeature[];
	getMetadata(): TileMetadata | null;
	getRequestedHeightPositions(): RequestedHeightParams;
}