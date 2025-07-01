import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
export type PBFPoint = [number, number];
export type PBFRing = PBFPoint[];
export type PBFPolygon = PBFRing[];
export default class PBFGeometryParser {
    static convertCommandsToPoints(arr: number[], extent: number, tileSize: number): VectorTile.Point[];
    static convertCommandsToLineString(arr: number[], extent: number, tileSize: number): VectorTile.Point[][];
    static convertCommandsToPolygon(arr: number[], extent: number, tileSize: number): VectorTile.Point[][];
    private static parseCoordinates;
    private static zigzagDecode;
    private static distance;
}
//# sourceMappingURL=PBFGeometryParser.d.ts.map