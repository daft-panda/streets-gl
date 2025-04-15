/**
 * Declaration file for virtual modules created by Rollup plugins
 */

declare module 'shader-chunks-context' {
    const ShaderChunks: Record<string, string>;
    export default ShaderChunks;
  }
  
  declare module 'shader-files-context' {
    interface ShaderProgram {
      vertex?: string;
      fragment?: string;
    }
    
    const Shaders: Record<string, ShaderProgram>;
    export default Shaders;
  }