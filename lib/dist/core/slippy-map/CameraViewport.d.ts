import PerspectiveCamera from "~/lib/core/PerspectiveCamera";
import Vec3 from "~/lib/math/Vec3";
export default class CameraViewport {
    private boundingBox;
    private zoom;
    setFromPerspectiveCamera(camera: PerspectiveCamera, groundHeight: number): void;
    private getProjectionSize;
    private getCameraProjectionBoundingBox;
    getVisibleTiles(zoomMin: number, zoomMax: number, padding: number): Vec3[];
    get currentZoom(): number;
}
//# sourceMappingURL=CameraViewport.d.ts.map