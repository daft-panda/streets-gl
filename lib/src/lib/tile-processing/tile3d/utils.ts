import MathUtils from "~/lib/math/MathUtils";
import Tile3DExtrudedGeometry from "~/lib/tile-processing/tile3d/features/Tile3DExtrudedGeometry";
import TileData, {Tile3DBuffers} from "~/lib/tile-processing/tile3d/buffers/Tile3DBuffers";
import {VectorNodeDescriptor} from "~/lib/tile-processing/vector/qualifiers/descriptors";

export function applyMercatorFactorToExtrudedFeatures(extruded: Tile3DExtrudedGeometry[], x: number, y: number, zoom: number): void {
	const scale = MathUtils.getMercatorScaleFactorForTile(x, y, zoom);

	for (const geometry of extruded) {
		geometry.boundingBox.min.y *= scale;
		geometry.boundingBox.max.y *= scale;

		for (let i = 1; i < geometry.positionBuffer.length; i += 3) {
			geometry.positionBuffer[i] *= scale;
		}
	}
}

export function getRoadUV(lanesForward: number, lanesBackward: number): {minX: number; maxX: number} {
	const texLanes = 8;
	const laneMarkWidth = 1 / texLanes * 0.05;
	const laneWidth = 1 / texLanes;

	lanesForward = Math.min(texLanes, lanesForward);
	lanesBackward = Math.min(texLanes, lanesBackward);

	const minLane = -lanesForward;
	const maxLane = lanesBackward;

	const min = minLane * laneWidth + 0.5;
	const max = maxLane * laneWidth + 0.5;

	return {
		minX: min + laneMarkWidth,
		maxX: max - laneMarkWidth
	};
}

export function getTile3DBuffersTransferables(tileData: TileData): Transferable[] {
	const transferables: Transferable[] = [
		tileData.buffers.extruded.positionBuffer.buffer,
		tileData.buffers.extruded.uvBuffer.buffer,
		tileData.buffers.extruded.normalBuffer.buffer,
		tileData.buffers.extruded.textureIdBuffer.buffer,
		tileData.buffers.extruded.colorBuffer.buffer,
		tileData.buffers.extruded.idBuffer.buffer,
		tileData.buffers.extruded.offsetBuffer.buffer,
		tileData.buffers.extruded.localIdBuffer.buffer,
		tileData.buffers.projected.positionBuffer.buffer,
		tileData.buffers.projected.normalBuffer.buffer,
		tileData.buffers.projected.uvBuffer.buffer,
		tileData.buffers.projected.textureIdBuffer.buffer,
		tileData.buffers.hugging.positionBuffer.buffer,
		tileData.buffers.hugging.normalBuffer.buffer,
		tileData.buffers.hugging.uvBuffer.buffer,
		tileData.buffers.hugging.textureIdBuffer.buffer,
		tileData.buffers.terrainMask.positionBuffer.buffer,
		tileData.buffers.labels.position.buffer,
		tileData.buffers.labels.priority.buffer
	];

	for (const instance of Object.values(tileData.buffers.instances)) {
		transferables.push(instance.interleavedBufferLOD0.buffer);
		transferables.push(instance.interleavedBufferLOD1.buffer);
	}

	return transferables;
}

export function getTreeTextureIdFromType(type: VectorNodeDescriptor['treeType']): number[] {
	const lookup: Record<VectorNodeDescriptor['treeType'], number[]> = {
		beech: [0],
		fir: [1],
		linden: [2, 3],
		oak: [4],
		genericBroadleaved: [0, 2, 3, 4],
		genericNeedleleaved: [1]
	};

	return lookup[type] ?? lookup.genericBroadleaved;
}

export function getTreeHeightRangeFromTextureId(textureId: number): [number, number] {
	const lookup: Record<number, [number, number]> = {
		0: [14, 18],
		1: [25, 35],
		2: [14, 18],
		3: [14, 18],
		4: [12, 15]
	};

	return lookup[textureId];
}

export function getTreeTextureScaling(textureId: number): number {
	const lookup: Record<number, number> = {
		0: 1.35,
		1: 1.06,
		2: 1.19,
		3: 1.02,
		4: 1.43
	};

	return lookup[textureId];
}