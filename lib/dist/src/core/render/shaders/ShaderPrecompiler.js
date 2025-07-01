class e{static resolveNameAndDefines(e,t,n){const s=e.split("\n");let i=0;for(let e=0;e<s.length;e++)s[e].startsWith("#version")&&(i=e+1);let l=`#define SHADER_NAME ${t}\n`;for(const[e,t]of Object.entries(n))l+=`#define ${e} ${t}\n`;return s.splice(i,0,l),s.join("\n")}}export{e as default};
//# sourceMappingURL=ShaderPrecompiler.js.map
