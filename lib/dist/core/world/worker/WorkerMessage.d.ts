export declare namespace WorkerMessage {
    enum ToWorkerType {
        Start = 0,
        Height = 1
    }
    interface ToWorker {
        type: ToWorkerType;
        tile: [number, number];
        overpassEndpoint?: string;
        tileServerEndpoint?: string;
        vectorTilesEndpointTemplate?: string;
        isTerrainHeightEnabled?: boolean;
        height?: Float64Array;
    }
    enum FromWorkerType {
        Success = 0,
        Error = 1,
        RequestHeight = 2
    }
    interface FromWorker {
        type: FromWorkerType;
        tile: [number, number];
        payload?: any;
    }
}
//# sourceMappingURL=WorkerMessage.d.ts.map