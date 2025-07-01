import { Tags } from "~/lib/tile-processing/vector/providers/OverpassDataObject";
import { VectorFeature } from "~/lib/tile-processing/vector/features/VectorFeature";
import VectorFeatureCollection from "~/lib/tile-processing/vector/features/VectorFeatureCollection";
import { VectorTile } from "~/lib/tile-processing/vector/providers/pbf/VectorTile";
import OSMReference from "~/lib/tile-processing/vector/features/OSMReference";
export declare function assertTags(tags?: Tags): Tags;
export declare function cleanupTags(tags?: Tags): Tags;
export declare function getCollectionFromVectorFeatures(features: VectorFeature[]): VectorFeatureCollection;
export declare function getOSMReferenceFromVectorTileFeatureTags(tags: VectorTile.FeatureTags): OSMReference;
//# sourceMappingURL=utils.d.ts.map