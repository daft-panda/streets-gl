export default ConvexHullGrahamScan;
/**
 * Graham's Scan Convex Hull Algorithm
 * @desc An implementation of the Graham's Scan Convex Hull algorithm in JavaScript.
 * @author Brian Barnett, brian@3kb.co.uk, http://brianbar.net/ || http://3kb.co.uk/
 * @version 1.0.5
 * @internal
 */
declare function ConvexHullGrahamScan(): void;
declare class ConvexHullGrahamScan {
    anchorPoint: any;
    reverse: boolean;
    points: any[];
    Point: void;
    _findPolarAngle: (a: any, b: any) => number;
    addPoint: Function;
    _sortPoints: () => any[];
    _checkPoints: (p0: any, p1: any, p2: any) => boolean;
    getHull: Function;
}
//# sourceMappingURL=ConvexHullGrahamScan.d.ts.map