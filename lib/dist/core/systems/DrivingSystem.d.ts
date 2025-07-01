import System from "../System";
import Vec3 from "~/lib/math/Vec3";
interface DrivingWaypoint {
    position: Vec3;
    osmWayId: number;
}
export default class DrivingSystem extends System {
    private controlsSystem;
    private currentPath;
    private currentWaypointIndex;
    private isEnabled;
    private speed;
    private targetOsmWayIds;
    private autoFollow;
    postInit(): void;
    private updateDrivingParameters;
    private setEnabled;
    private buildPathFromOsmWays;
    private followPath;
    update(deltaTime: number): void;
    startDriving(osmWayIds: number[], speed?: number): void;
    stopDriving(): void;
    getCurrentWaypoint(): DrivingWaypoint | null;
    getPath(): DrivingWaypoint[];
}
export {};
//# sourceMappingURL=DrivingSystem.d.ts.map