import SystemManager from "./SystemManager";
export default abstract class System {
    systemManager: SystemManager;
    abstract postInit(): void;
    abstract update(deltaTime: number): void;
}
//# sourceMappingURL=System.d.ts.map