import BMFont from '../types/BMFont';
type BreakPoint = {
    char: number;
    replace: string;
};
interface WordWrapperProps {
    font: BMFont;
    breakPoints?: BreakPoint[];
    useKernings?: boolean;
    kernings: Map<number, number>;
    maxChar: number;
}
interface WrapProps {
    text: string;
    width?: number;
    letterSpacing?: number;
    tabWidth?: number;
}
export default class WordWrapper {
    private breakPoints;
    private charAdvanceCache;
    private kernings;
    private maxChar;
    private breakCache;
    private letterSpacing;
    private tabWidth;
    private useKernings;
    constructor(props: WordWrapperProps);
    private greedy;
    private getCharWidth;
    wrap(props: WrapProps): string;
    measure(text: string): number;
}
export {};
//# sourceMappingURL=WordWrapper.d.ts.map