import { TypedArray } from "~/lib/renderer/RendererTypes";
export default class Utils {
    static hexToRgb(hex: string): number[];
    static fillTypedArraySequence<T extends TypedArray>(typedArray: T, sequence: T): T;
    static mergeTypedArrays<T extends TypedArray>(type: {
        new (l: number): T;
    }, typedArrays: T[]): T;
    static isMobileBrowser(): boolean;
    static resolveEndpointTemplate({ values, template }: {
        values: Record<string, number | string>;
        template: string;
    }): string;
}
//# sourceMappingURL=Utils.d.ts.map