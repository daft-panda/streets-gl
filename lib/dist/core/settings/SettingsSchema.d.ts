export declare enum SettingsSchemaRangeScale {
    Linear = 0,
    Logarithmic = 1
}
export type SettingsSchemaEntry = {
    status?: string[];
    statusDefault?: string;
    selectRange?: [number, number, number];
    selectRangeDefault?: number;
    label: string;
    parent?: string;
    parentStatusCondition?: string[];
    statusLabels?: string[];
    selectRangeScale?: SettingsSchemaRangeScale;
    category: string;
};
export type SettingsSchema = Record<string, SettingsSchemaEntry>;
//# sourceMappingURL=SettingsSchema.d.ts.map