import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import { defineConfig } from 'rollup';
import { createFilter } from '@rollup/pluginutils';
import fs from 'fs';
import path from 'path';
// import { babel } from '@rollup/plugin-babel';

// Custom plugin for handling shader files, similar to webpack's context functionality
function glslLoader(options = {}) {
  const filter = createFilter(options.include || ['**/*.{glsl,vert,frag}'], options.exclude);
  
  return {
    name: 'glsl-loader',
    transform(code, id) {
      if (!filter(id)) return null;
      
      // Return the shader code as a string that exports default
      return {
        code: `export default ${JSON.stringify(code)};`,
        map: { mappings: '' }
      };
    },
    
    // Add a resolver for shader chunk includes
    resolveId(importee, importer) {
      // Handle the #include <...> directives 
      if (importee.startsWith('#include <') && importee.endsWith('>')) {
        const chunkName = importee.slice(10, -1);
        const chunkPath = path.resolve(options.chunksDir || './resources/shaders/chunks', `${chunkName}.glsl`);
        return chunkPath;
      }
      
      return null;
    }
  };
}

// Plugin to handle shader context bundling
function shaderContextLoader(options = {}) {
  return {
    name: 'shader-context-loader',
    
    async buildStart() {
      // Scan shader directories and add files as watch files
      const vertDir = path.resolve(options.vertDir || './resources/shaders');
      const fragDir = path.resolve(options.fragDir || './resources/shaders');
      const chunksDir = path.resolve(options.chunksDir || './resources/shaders/chunks');
      
      // Add directories to watched files
      if (fs.existsSync(vertDir)) this.addWatchFile(vertDir);
      if (fs.existsSync(fragDir)) this.addWatchFile(fragDir);
      if (fs.existsSync(chunksDir)) this.addWatchFile(chunksDir);
      
      // Add individual files to watched files
      const addDirFiles = (dir) => {
        if (!fs.existsSync(dir)) return;
        fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
          const filePath = path.join(dir, dirent.name);
          if (dirent.isDirectory()) {
            addDirFiles(filePath);
          } else {
            this.addWatchFile(filePath);
          }
        });
      };
      
      addDirFiles(vertDir);
      addDirFiles(fragDir);
      addDirFiles(chunksDir);
    },
    
    resolveId(source) {
      // Handle special shader context imports
      if (source === 'shader-chunks-context') {
        return source;
      }
      if (source === 'shader-files-context') {
        return source;
      }
      return null;
    },
    
    async load(id) {
      if (id === 'shader-chunks-context') {
        // Generate chunks mapping code
        const chunksDir = path.resolve(options.chunksDir || './resources/shaders/chunks');
        let code = 'const ShaderChunks = {\n';
        
        // Read all chunk files
        if (fs.existsSync(chunksDir)) {
          const files = getGlslFiles(chunksDir);
          for (const file of files) {
            const relativePath = path.relative(chunksDir, file).replace(/\\/g, '/');
            const chunkName = relativePath.replace('.glsl', '');
            const content = fs.readFileSync(file, 'utf-8');
            code += `  "${chunkName}": ${JSON.stringify(content)},\n`;
          }
        }
        code += '};\n\nexport default ShaderChunks;';
        return code;
      }
      
      if (id === 'shader-files-context') {
        // First, we need to generate the ShaderChunks for include resolution
        const chunksDir = path.resolve(options.chunksDir || './resources/shaders/chunks');
        const shaderChunks = {};
        
        if (fs.existsSync(chunksDir)) {
          const files = getGlslFiles(chunksDir);
          for (const file of files) {
            const relativePath = path.relative(chunksDir, file).replace(/\\/g, '/');
            const chunkName = relativePath.replace('.glsl', '');
            const content = fs.readFileSync(file, 'utf-8');
            shaderChunks[chunkName] = content;
          }
        }
        
        // Function to resolve shader includes - similar to ShaderPrecompiler.resolveIncludes
        const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
        
        function includeReplacer(match, include, shaderChunks) {
          const string = shaderChunks[include];
          
          if (string === undefined) {
            throw new Error('Can not resolve #include <' + include + '>');
          }
          
          return resolveIncludes(string, shaderChunks);
        }
        
        function resolveIncludes(str, shaderChunks) {
          return str.replace(includePattern, (match, include) => includeReplacer(match, include, shaderChunks));
        }
        
        // Generate shader files mapping code with preprocessed includes
        const shadersDir = path.resolve(options.vertDir || './resources/shaders');
        let code = 'const Shaders = {\n';
        
        // Read shader files
        if (fs.existsSync(shadersDir)) {
          const vertFiles = getGlslFiles(shadersDir, '.vert');
          const fragFiles = getGlslFiles(shadersDir, '.frag');
          
          // Create map of shader programs
          const shaderPrograms = {};
          
          for (const file of vertFiles) {
            const relativePath = path.relative(shadersDir, file).replace(/\\/g, '/');
            const shaderName = relativePath.slice(0, -5); // Remove .vert
            if (!shaderPrograms[shaderName]) shaderPrograms[shaderName] = {};
            const content = fs.readFileSync(file, 'utf-8');
            // Preprocess includes
            shaderPrograms[shaderName].vertex = resolveIncludes(content, shaderChunks);
          }
          
          for (const file of fragFiles) {
            const relativePath = path.relative(shadersDir, file).replace(/\\/g, '/');
            const shaderName = relativePath.slice(0, -5); // Remove .frag
            if (!shaderPrograms[shaderName]) shaderPrograms[shaderName] = {};
            const content = fs.readFileSync(file, 'utf-8');
            // Preprocess includes
            shaderPrograms[shaderName].fragment = resolveIncludes(content, shaderChunks);
          }
          
          // Generate code for each shader program
          for (const [name, program] of Object.entries(shaderPrograms)) {
            code += `  "${name}": {\n`;
            if (program.vertex) {
              code += `    vertex: ${JSON.stringify(program.vertex)},\n`;
            }
            if (program.fragment) {
              code += `    fragment: ${JSON.stringify(program.fragment)},\n`;
            }
            code += '  },\n';
          }
        }
        
        code += '};\n\nexport default Shaders;';
        return code;
      }
      
      return null;
    }
  };
}

// Helper function to recursively get all GLSL files in a directory
function getGlslFiles(dir, extension = '.glsl') {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of list) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getGlslFiles(fullPath, extension));
    } else if (file.name.endsWith(extension)) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Main rollup config
export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    preserveModules: true,
  },
  external: [
    // External dependencies that should not be bundled
    // ...Object.keys(JSON.parse(fs.readFileSync('./package.json')).dependencies || {}),
    ...Object.keys(JSON.parse(fs.readFileSync('./package.json')).peerDependencies || {})
  ],
  plugins: [
    // Handle shader context imports
    shaderContextLoader({
      vertDir: './resources/shaders',
      fragDir: './resources/shaders',
      chunksDir: './resources/shaders/chunks'
    }),
    
    // Process .glsl, .vert, and .frag files
    glslLoader({
      include: ['**/*.{glsl,vert,frag}'],
      chunksDir: './resources/shaders/chunks'
    }),

    // Convert CommonJS modules to ES6
    commonjs({}),

    // Handle web workers
    webWorkerLoader(),
    
    // Resolve node modules
    resolve({
      browser: true,
      extensions: ['.ts', '.js', '.json'],
    }),

    {
      name: 'alias-resolver',
      resolveId(source) {
        if (source === '~/lib/math/ConvexHullGrahamScan') {
          return path.resolve('./src/lib/math/ConvexHullGrahamScan.js');
        }
        if (source === '~/lib/math/OMBB') {
          return path.resolve('./src/lib/math/OMBB.js');
        }
        if (source === '~/lib/tile-processing/vector/providers/pbf/vector_tile') {
          return path.resolve('./src/lib/tile-processing/vector/providers/pbf/vector_tile.js');
        }
          
        return null;
      }
    },
    
    // Handle JSON imports
    json({
      compact: true,
      namedExports: true
    }),
    
    // TypeScript compilation
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      declaration: true,
    }),
  
    // Copy resources to dist folder
    copy({
      targets: [
        // Copy necessary resources
        { src: './resources/textures', dest: 'dist/resources' },
        { src: './resources/models', dest: 'dist/resources' },
        { src: './resources/shaders', dest: 'dist/resources' },
        { src: './resources/images', dest: 'dist/resources' },
        { src: './resources/misc', dest: 'dist/resources' },
        { src: 'src/lib/**/*.worker.ts', dest: 'dist/workers', flatten: true }
      ],
      hook: 'writeBundle'
    }),
    
    // Minify in production mode
    process.env.BUILD === 'production' && terser()
  ],
  
  // Preserve specified modules to avoid code duplication
  preserveEntrySignatures: 'strict',
  
  // Show performance hints
  perf: true
});