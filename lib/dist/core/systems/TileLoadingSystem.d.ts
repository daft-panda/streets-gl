import System from "../System";
export interface OverpassEndpoint {
    url: string;
    isEnabled: boolean;
    isUserDefined: boolean;
}
export default class TileLoadingSystem extends System {
    private readonly overpassEndpointsDefault;
    overpassEndpoints: OverpassEndpoint[];
    constructor();
    postInit(): void;
    fetchTilesTimestamp(): Promise<Date>;
    setOverpassEndpoints(endpoints: OverpassEndpoint[]): void;
    resetOverpassEndpoints(): void;
    private getNextOverpassEndpoint;
    update(deltaTime: number): void;
    private loadTile;
}
//# sourceMappingURL=TileLoadingSystem.d.ts.map