import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
import { VectorAreaDescriptor } from "~/lib/tile-processing/vector/qualifiers/descriptors";
export default function getBuildingParams(tags: VectorTile.FeatureTags): {
    label: string;
    buildingLevels: number;
    buildingHeight: number;
    buildingMinHeight: number;
    buildingRoofHeight: number;
    buildingRoofType: VectorAreaDescriptor['buildingRoofType'];
    buildingRoofOrientation: VectorAreaDescriptor['buildingRoofOrientation'];
    buildingRoofDirection: number;
    buildingRoofAngle: number;
    buildingFacadeMaterial: VectorAreaDescriptor['buildingFacadeMaterial'];
    buildingFacadeColor: number;
    buildingRoofMaterial: VectorAreaDescriptor['buildingRoofMaterial'];
    buildingRoofColor: number;
    buildingWindows: boolean;
    buildingFoundation: boolean;
};
//# sourceMappingURL=getBuildingParams.d.ts.map