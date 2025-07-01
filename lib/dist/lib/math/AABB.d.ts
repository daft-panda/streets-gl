export default abstract class AABB<T> {
    isEmpty: boolean;
    min: T;
    max: T;
    abstract includePoint(point: T): void;
    abstract includeAABB(aabb: AABB<T>): void;
    abstract includesPoint(point: T): boolean;
    abstract intersectsAABB(aabb: AABB<T>): boolean;
    abstract getCenter(): T;
    abstract clone(): AABB<T>;
}
//# sourceMappingURL=AABB.d.ts.map