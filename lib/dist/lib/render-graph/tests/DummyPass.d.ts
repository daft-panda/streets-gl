import { Pass, ResourcePropMap } from "~/lib/render-graph";
export default class DummyPass<T extends ResourcePropMap> extends Pass<T> {
    constructor({ name, initialResources }: {
        name?: string;
        initialResources: T;
    });
    render(): void;
}
//# sourceMappingURL=DummyPass.d.ts.map