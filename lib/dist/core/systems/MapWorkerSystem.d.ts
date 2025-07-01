import MapWorker from "../world/worker/MapWorker";
import System from "../System";
export default class MapWorkerSystem extends System {
    private workers;
    postInit(): void;
    getFreeWorker(): MapWorker;
    update(deltaTime: number): void;
}
//# sourceMappingURL=MapWorkerSystem.d.ts.map