type EventMap = Record<string, (...args: any[]) => void>;
export default class EventEmitter<T extends EventMap> {
    private listeners;
    on<K extends keyof T>(event: K, listener: T[K]): void;
    off<K extends keyof T>(event: K, listener: T[K]): void;
    emit<K extends keyof T>(event: K, data?: Parameters<T[K]> | []): void;
}
export {};
//# sourceMappingURL=EventEmitter.d.ts.map