export declare function isTagIncludesString(tags: Record<string, string>, key: string, value: string): boolean;
export declare function getTagValues(tags: Record<string, string>, key: string): string[];
export declare function readTagAsFloat(tags: Record<string, string>, key: string): number;
export declare function readTagAsUnsignedFloat(tags: Record<string, string>, key: string): number;
export declare function readTagAsInt(tags: Record<string, string>, key: string): number;
export declare function readTagAsUnsignedInt(tags: Record<string, string>, key: string): number;
export declare function parseMeters(str?: string, defaultUnitsFactor?: number): number;
export declare function parseHeight(str?: string, fallback?: number): number;
export declare function parseRoofLevels(tags: Record<string, string>, key: string): number;
export declare function parseDirection(str?: string, fallback?: number): number;
export declare function parseColor(str?: string, fallback?: number): number;
//# sourceMappingURL=tagHelpers.d.ts.map