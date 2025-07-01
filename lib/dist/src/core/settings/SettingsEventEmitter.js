class s{listeners={};updateSetting(s,e){const t=this.listeners[s];if(t)for(const s of t)s(e)}onChange(s,e){this.listeners[s]||(this.listeners[s]=[]),this.listeners[s].push(e)}removeOnChangeListener(s,e){if(!this.listeners[s])return;const t=this.listeners[s].indexOf(e);-1!==t&&this.listeners[s].splice(t,1)}}export{s as default};
//# sourceMappingURL=SettingsEventEmitter.js.map
