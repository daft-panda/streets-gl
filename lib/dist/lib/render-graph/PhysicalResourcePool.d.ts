import PhysicalResource from "./PhysicalResource";
export default class PhysicalResourcePool {
    private unusedResourceLifeTime;
    private resourcesMap;
    constructor(unusedResourceLifeTime: number);
    pushPhysicalResource(id: string, physicalResource: PhysicalResource): void;
    getPhysicalResource(id: string): PhysicalResource;
    update(): void;
}
//# sourceMappingURL=PhysicalResourcePool.d.ts.map