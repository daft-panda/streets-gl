import BMFont from '../types/BMFont';
interface LayoutProps {
    text: string;
    width?: number;
    letterSpacing?: number;
    lineHeight?: number;
    noWrap?: boolean;
    tabWidth?: number;
    xShift?: number;
    align?: 'left' | 'right' | 'center' | 'justify';
    computeLineY?: boolean;
    computeCharUvs?: boolean;
    computeCharIndex?: boolean;
    computeLineIndex?: boolean;
}
export default class LayoutGenerator {
    private font;
    private chars;
    private kernings;
    private baselineOffset;
    private wrapper;
    capHeight: number;
    xHeight: number;
    ascenderHeight: number;
    descenderHeight: number;
    private maxChar;
    constructor(font: BMFont);
    layout(props: LayoutProps): {
        verts: number[];
        uvs: number[];
        indices: number[];
        lineY: number[];
        charUvs: number[];
        charIndices: number[];
        lineIndices: number[];
        charCount: number;
        lineCount: number;
    };
    private computeMetrics;
}
export {};
//# sourceMappingURL=LayoutGenerator.d.ts.map