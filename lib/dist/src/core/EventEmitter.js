class s{listeners={};on(s,e){this.listeners[s]||(this.listeners[s]=[]),this.listeners[s].push(e)}off(s,e){if(!this.listeners[s])return;const t=this.listeners[s].indexOf(e);-1!==t&&this.listeners[s].splice(t,1)}emit(s,e=[]){if(this.listeners[s])for(const t of this.listeners[s])t(e)}}export{s as default};
//# sourceMappingURL=EventEmitter.js.map
