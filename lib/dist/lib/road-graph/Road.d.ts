import Vec2 from "~/lib/math/Vec2";
import LinkedVertex from "~/lib/road-graph/LinkedVertex";
export default class Road {
    readonly width: number;
    readonly vertices: LinkedVertex[];
    private readonly startVertex;
    private readonly endVertex;
    constructor(vertices: Vec2[], width: number);
    get start(): LinkedVertex | null;
    get end(): LinkedVertex | null;
}
//# sourceMappingURL=Road.d.ts.map