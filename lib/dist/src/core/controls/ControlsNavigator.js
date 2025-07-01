class e{element;isEnabled=!1;constructor(e){this.element=e}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}get isInFocus(){return!(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||null!==document.activeElement.attributes.getNamedItem("contenteditable"))}}export{e as default};
//# sourceMappingURL=ControlsNavigator.js.map
