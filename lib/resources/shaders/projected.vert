#include <versionPrecision>

in vec3 position;
in vec2 uv;
in vec3 normal;
in uint textureId;

#if USE_IDENTIFIABLE_FEATURES == 1
	in uint osmId;
	flat out uint vOsmId;
#endif

out vec2 vUv;
out vec3 vPosition;
out vec3 vLocalPosition;
out vec3 vNormal;
flat out int vNormalFollowsGround;
out vec4 vClipPos;
out vec4 vClipPosPrev;
out vec3 vCenter;
out vec4 vNormalUV;
flat out int vTextureId;
out float vNormalMixFactor;

uniform PerMesh {
	mat4 modelViewMatrix;
	mat4 modelViewMatrixPrev;
	vec4 transformNormal0;
	vec4 transformNormal1;
	float terrainRingSize;
	vec4 terrainRingOffset;
	int terrainLevelId;
	float segmentCount;
	vec2 cameraPosition;
	vec2 detailTextureOffset;
};

uniform PerMaterial {
	mat4 projectionMatrix;
	float time;
};

#if USE_IDENTIFIABLE_FEATURES == 1
uniform FeatureIdVertexMapping {
  uint vertexMappingCount;
  // Each pair is (startVertexIdx, vertexCount)
  uvec2 vertexMapping[128]; 
};

uniform HighlightedFeatures {
  vec4 highlightColor;
};

flat out uint vIsHighlighted;
#endif

uniform sampler2DArray tRingHeight;

float sampleHeight(vec2 uv, int level) {
	uv.y = 1. - uv.y;

	return texelFetch(
		tRingHeight,
		ivec3(
			uv * segmentCount + 0.5 / segmentCount,
			level
		),
		0
	).r;
}

void main() {
	vCenter = vec3(0);
	int centerIndex = gl_VertexID - 3 * int(float(gl_VertexID) / 3.);
	vCenter[centerIndex] = 1.;

	#if USE_IDENTIFIABLE_FEATURES == 1
    	// Default to not highlighted
		vIsHighlighted = 0u;
		
		// Check if this vertex is part of a highlighted way
		uint vertexId = uint(gl_VertexID);
		
		// Loop through way mappings to find which way this vertex belongs to
		for (uint i = 0u; i < vertexMappingCount; i++) {
			uvec2 mapping = vertexMapping[i];
			uint startIdx = mapping.x;
			uint count = mapping.y;
			
			// Check if vertex is within this way's range
			if (vertexId >= startIdx && vertexId < (startIdx + count)) {
				vIsHighlighted = 1u;
				break;
			}
		}
    #endif

	vTextureId = int(textureId);

	vUv = uv;
	vNormal = normal;
	vNormalFollowsGround = normal == vec3(0, 1, 0) ? 1 : 0;
	vLocalPosition = position;

	vec2 normalUV = position.zx / TILE_SIZE;
	vNormalUV = vec4(
		transformNormal0.xy + normalUV * transformNormal0.zw,
		transformNormal1.xy + normalUV * transformNormal1.zw
	);
	vNormalMixFactor = max(abs(cameraPosition.x - position.x), abs(cameraPosition.y - position.z));

	#if USE_HEIGHT == 1
		int level = terrainLevelId;
		vec2 positionUV = (terrainRingOffset.xy + terrainRingSize / 2. + position.xz) / terrainRingSize;

		if (positionUV.x < 0. || positionUV.y < 0. || positionUV.x > 1. || positionUV.y > 1.) {
			float nextSize = terrainRingSize * 2.;
			positionUV = (terrainRingOffset.zw + nextSize / 2. + position.xz) / nextSize;
			level++;
		}

		float segSize = 1. / segmentCount;
		vec2 segment = floor(positionUV * segmentCount);
		vec2 segmentUV = positionUV * segmentCount - segment;
		vec2 originUV = segment * segSize;
		vec2 segmentLocal = segmentUV;
		float type = mod(segment.x + segment.y, 2.);

		vec2 a, b, c;

		if (type == 0.) {
			if (segmentUV.x > segmentUV.y) {
				a = originUV + segSize * vec2(1, 0);
				b = originUV;
				c = originUV + segSize * vec2(1, 1);
				segmentLocal.x = 1. - segmentLocal.x;
			} else {
				a = originUV + segSize * vec2(0, 1);
				b = originUV + segSize * vec2(1, 1);
				c = originUV;
				segmentLocal.y = 1. - segmentLocal.y;
			}
		} else {
			if (segmentUV.x + segmentUV.y < 1.) {
				a = originUV;
				b = originUV + segSize * vec2(1, 0);
				c = originUV + segSize * vec2(0, 1);
			} else {
				a = originUV + segSize * vec2(1, 1);
				b = originUV + segSize * vec2(0, 1);
				c = originUV + segSize * vec2(1, 0);
				segmentLocal = 1. - segmentLocal;
			}
		}

		float ah = sampleHeight(a, level);
		float bh = sampleHeight(b, level);
		float ch = sampleHeight(c, level);
		float height = ah + (bh - ah) * segmentLocal.x + (ch - ah) * segmentLocal.y;
	#else
		float height = 0.;
	#endif

	vec3 transformedPosition = position + vec3(0, height, 0);
	vec4 cameraSpacePosition = modelViewMatrix * vec4(transformedPosition, 1);
	vec4 cameraSpacePositionPrev = modelViewMatrixPrev * vec4(transformedPosition, 1);

	vPosition = position;

	vClipPos = projectionMatrix * cameraSpacePosition;
	vClipPosPrev = projectionMatrix * cameraSpacePositionPrev;

	gl_Position = vClipPos;
}
