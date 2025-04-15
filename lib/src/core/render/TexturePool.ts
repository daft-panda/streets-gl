import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import AbstractTexture from "~/lib/renderer/abstract-renderer/AbstractTexture";
import createExtrudedMeshTexture from "./textures/createExtrudedMeshTexture";
import createInstanceTexture from "./textures/createInstanceTexture";
import createProjectedMeshTexture from "./textures/createProjectedMeshTexture";
import createTreeTexture from "./textures/createTreeTexture";

export default class TexturePool {
	private textures: Map<string, AbstractTexture> = new Map();

	public constructor(renderer: AbstractRenderer) {
		this.textures.set('instance', createInstanceTexture(renderer));
		this.textures.set('tree', createTreeTexture(renderer));
		this.textures.set('projectedMesh', createProjectedMeshTexture(renderer));
		this.textures.set('extrudedMesh', createExtrudedMeshTexture(renderer));
		//this.textures.set('aircraft', createAircraftTexture(renderer));
	}

	public get(name: string): AbstractTexture {
		return this.textures.get(name);
	}
}
