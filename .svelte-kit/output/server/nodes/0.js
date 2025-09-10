import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CkFSXIbe.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BZSqidRg.js","_app/immutable/chunks/DIBY6rcZ.js","_app/immutable/chunks/Chy3I7E_.js","_app/immutable/chunks/DF0YKfEK.js","_app/immutable/chunks/Dg-evVW7.js","_app/immutable/chunks/IQ6MdLvz.js","_app/immutable/chunks/BZIQf2sC.js","_app/immutable/chunks/C4e6aNYT.js","_app/immutable/chunks/XMClxO4y.js","_app/immutable/chunks/KF4RE_yR.js","_app/immutable/chunks/CwWHAa5w.js"];
export const stylesheets = ["_app/immutable/assets/Title.CGXTfqP3.css","_app/immutable/assets/Button.H6Y3cpvN.css","_app/immutable/assets/Divider.Cdj2ngp_.css","_app/immutable/assets/0.C6g72RyZ.css"];
export const fonts = [];
