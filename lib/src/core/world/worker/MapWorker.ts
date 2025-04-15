import Vec2 from "~/lib/math/Vec2";
import TileData from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
import { WorkerMessage } from "./WorkerMessage";
import WorkerInstance from 'web-worker:./WorkerInstance.ts';

export interface TileRequestParams {
	overpassEndpoint: string;
	tileServerEndpoint: string;
	vectorTilesEndpointTemplate: string;
	isTerrainHeightEnabled: boolean;
}

export default class MapWorker {
	private worker: Worker;
	public queueLength = 0;
	private tilesInProgress: Map<string, {
		resolve: (value: TileData) => void;
		reject: (reason?: any) => void;
	}> = new Map();
	private readonly terrainHeightCallback: (positions: Float64Array) => Float64Array;

	public constructor(terrainHeightCallback: (positions: Float64Array) => Float64Array) {
		this.terrainHeightCallback = terrainHeightCallback;
		this.worker = new WorkerInstance() as any as Worker;

		this.worker.addEventListener('message', (e: MessageEvent) => this.processMessage(e));
	}

	public async requestTile(x: number, y: number, params: TileRequestParams): Promise<TileData> {
		this.queueLength++;

		const promise = new Promise<TileData>((resolve, reject) => {
			this.tilesInProgress.set(`${x},${y}`, {resolve, reject});
		});

		this.sendMessage({
			type: WorkerMessage.ToWorkerType.Start,
			tile: [x, y],
			...params
		});

		return promise;
	}

	private sendMessage(msg: WorkerMessage.ToWorker, transferables: Transferable[] = []): void {
		this.worker.postMessage(msg, transferables);
	}

	private async processMessage(e: MessageEvent): Promise<void> {
		const data = e.data as WorkerMessage.FromWorker;
		const tilePosition = new Vec2(data.tile[0], data.tile[1]);
		const tileInProgress = this.tilesInProgress.get(`${tilePosition.x},${tilePosition.y}`);

		switch (data.type) {
			case WorkerMessage.FromWorkerType.Success:
				this.queueLength--;
				tileInProgress.resolve(data.payload);
				break;
			case WorkerMessage.FromWorkerType.Error:
				this.queueLength--;
				tileInProgress.reject(data.payload);
				break;
			case WorkerMessage.FromWorkerType.RequestHeight:
				const positions = data.payload as Float64Array;
				const heightArray = this.terrainHeightCallback(positions);

				this.sendMessage({
					type: WorkerMessage.ToWorkerType.Height,
					tile: [tilePosition.x, tilePosition.y],
					height: heightArray
				}, [heightArray.buffer]);
				break;
		}
	}
}
