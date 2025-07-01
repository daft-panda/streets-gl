import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import AbstractTexture from "~/lib/renderer/abstract-renderer/AbstractTexture";
export default class TexturePool {
    private textures;
    constructor(renderer: AbstractRenderer);
    get(name: string): AbstractTexture;
}
//# sourceMappingURL=TexturePool.d.ts.map