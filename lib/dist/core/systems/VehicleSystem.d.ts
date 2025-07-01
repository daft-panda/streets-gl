import System from "../System";
import Vec2 from "~/lib/math/Vec2";
import Aircraft, { AircraftPartType } from "../vehicles/aircraft/Aircraft";
export default class VehicleSystem extends System {
    readonly aircraftMap: Map<string, Aircraft>;
    private lastUpdateTimestamp;
    private serverTimeOffset;
    private enabled;
    private lockAircraftPositions;
    aircraftPartsBuffers: Map<AircraftPartType, Float32Array>;
    postInit(): void;
    private addListeners;
    private listenToSettings;
    private startTimer;
    update(deltaTime: number): void;
    updateBuffers(origin: Vec2): void;
    private static getBufferFromAircraftParts;
    fetchData(): Promise<void>;
    private handleQueryResponse;
    private updateAircraftPosition;
    private lerpAircraftStates;
    private getActualAltitude;
    private static convertQueryAircraftToAircraftState;
    private static getAircraftType;
}
//# sourceMappingURL=VehicleSystem.d.ts.map