import Vec3 from "~/lib/math/Vec3";
export declare enum AircraftType {
    B777 = 0,
    A321 = 1,
    Cessna208 = 2,
    ERJ135 = 3,
    Helicopter = 4
}
export interface AircraftState {
    x: number;
    y: number;
    altitude: number;
    heading: number;
    onGround: boolean;
    timestamp: number;
}
export interface AircraftPosition {
    x: number;
    y: number;
    height: number;
    heading: number;
    onGround: boolean;
}
export declare enum AircraftPartType {
    B777Body = 0,
    A321Body = 1,
    Cessna208Body = 2,
    ERJ135Body = 3,
    HelicopterBody = 4,
    HelicopterRotorStatic = 5,
    HelicopterTailRotorStatic = 6,
    HelicopterRotorSpinning = 7,
    HelicopterTailRotorSpinning = 8
}
export interface AircraftPart {
    type: AircraftPartType;
    position: Vec3;
    rotation: Vec3;
}
export default class Aircraft {
    readonly type: AircraftType;
    states: AircraftState[];
    isUpdatedTemp: boolean;
    position: AircraftPosition;
    private rotationOffset;
    constructor(type: AircraftType);
    update(states: AircraftState[]): void;
    getParts(): AircraftPart[];
    private getRotation;
}
//# sourceMappingURL=Aircraft.d.ts.map