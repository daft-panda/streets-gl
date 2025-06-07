import System from "../System";
import ControlsSystem from "./ControlsSystem";
import Vec3 from "~/lib/math/Vec3";
import Vec2 from "~/lib/math/Vec2";
import MathUtils from "~/lib/math/MathUtils";

interface DrivingWaypoint {
  position: Vec3;
  osmWayId: number;
}

export default class DrivingSystem extends System {
  private controlsSystem: ControlsSystem;
  private currentPath: DrivingWaypoint[] = [];
  private currentWaypointIndex: number = 0;
  private isEnabled: boolean = false;
  private speed: number = 5; // meters per second
  private targetOsmWayIds: number[] = [];
  private autoFollow: boolean = true;

  public postInit(): void {
    this.controlsSystem = this.systemManager.getSystem(ControlsSystem);
  }

  private updateDrivingParameters(): void {
    const hostParams = this.systemManager.getHostInterface().parameters();
    const drivingMode = hostParams?.drivingMode;

    if (!drivingMode) {
      this.setEnabled(false);
      return;
    }

    this.setEnabled(drivingMode.enabled);
    
    if (drivingMode.speed !== undefined) {
      this.speed = drivingMode.speed;
    }

    if (drivingMode.autoFollow !== undefined) {
      this.autoFollow = drivingMode.autoFollow;
    }

    if (drivingMode.targetOsmWayIds && 
        JSON.stringify(drivingMode.targetOsmWayIds) !== JSON.stringify(this.targetOsmWayIds)) {
      this.targetOsmWayIds = [...drivingMode.targetOsmWayIds];
      this.buildPathFromOsmWays();
    }
  }

  private setEnabled(enabled: boolean): void {
    if (this.isEnabled === enabled) {
      return;
    }

    this.isEnabled = enabled;

    if (enabled) {
      // Switch to ground controls if not already
      if (this.controlsSystem.mode !== 0) { // NavigationMode.Ground
        // Force switch to ground mode - simplified approach
        this.controlsSystem.setLatLon(
          this.controlsSystem.getLatLon().lat,
          this.controlsSystem.getLatLon().lon
        );
      }
    }
  }

  private buildPathFromOsmWays(): void {
    // This is a simplified implementation that would need to be enhanced
    // to actually query the tile data for OSM way geometries
    // For now, we'll create a simple placeholder that demonstrates the concept
    
    this.currentPath = [];
    this.currentWaypointIndex = 0;

    if (this.targetOsmWayIds.length === 0) {
      return;
    }

    // TODO: In a real implementation, this would:
    // 1. Query the tile loading system for geometries matching the OSM IDs
    // 2. Extract the actual coordinate paths from the vector data
    // 3. Connect the paths in a logical order
    // 4. Convert lat/lon coordinates to world coordinates

    // For demonstration, create a simple path around the current position
    const currentLatLon = this.controlsSystem.getLatLon();
    const startPos = MathUtils.degrees2meters(currentLatLon.lat, currentLatLon.lon);
    
    // Create a simple circular path as a placeholder
    const radius = 100; // meters
    const numWaypoints = 20;
    
    for (let i = 0; i < numWaypoints; i++) {
      const angle = (i / numWaypoints) * 2 * Math.PI;
      const x = startPos.x + Math.cos(angle) * radius;
      const z = startPos.y + Math.sin(angle) * radius;
      
      this.currentPath.push({
        position: new Vec3(x, 0, z), // Y will be updated from terrain
        osmWayId: this.targetOsmWayIds[0] || 0
      });
    }
  }

  private followPath(deltaTime: number): void {
    if (!this.autoFollow || this.currentPath.length === 0) {
      return;
    }

    const currentTarget = this.controlsSystem.getGroundControlsTarget();
    const targetWaypoint = this.currentPath[this.currentWaypointIndex];

    if (!targetWaypoint) {
      return;
    }

    // Calculate distance to current waypoint
    const distance = Vec3.distance(currentTarget, targetWaypoint.position);
    const arrivalThreshold = 5; // meters

    // Move towards the waypoint
    if (distance > arrivalThreshold) {
      const direction = Vec3.normalize(Vec3.sub(targetWaypoint.position, currentTarget));
      const movement = Vec3.multiplyScalar(direction, this.speed * deltaTime);
      const newTarget = Vec3.add(currentTarget, movement);
      
      // Update the controls target
      const newLatLon = MathUtils.meters2degrees(newTarget.x, newTarget.z);
      this.controlsSystem.setLatLon(newLatLon.lat, newLatLon.lon);
    } else {
      // Move to next waypoint
      this.currentWaypointIndex = (this.currentWaypointIndex + 1) % this.currentPath.length;
    }
  }

  public update(deltaTime: number): void {
    this.updateDrivingParameters();

    if (this.isEnabled) {
      this.followPath(deltaTime);
    }
  }

  // Public API for programmatic control
  public startDriving(osmWayIds: number[], speed: number = 5): void {
    this.targetOsmWayIds = [...osmWayIds];
    this.speed = speed;
    this.autoFollow = true;
    this.setEnabled(true);
    this.buildPathFromOsmWays();
  }

  public stopDriving(): void {
    this.setEnabled(false);
    this.currentPath = [];
    this.currentWaypointIndex = 0;
  }

  public getCurrentWaypoint(): DrivingWaypoint | null {
    if (this.currentPath.length === 0 || this.currentWaypointIndex >= this.currentPath.length) {
      return null;
    }
    return this.currentPath[this.currentWaypointIndex];
  }

  public getPath(): DrivingWaypoint[] {
    return [...this.currentPath];
  }
}