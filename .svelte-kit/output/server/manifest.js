export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BcQalMDp.js",app:"_app/immutable/entry/app.B9qodvYb.js",imports:["_app/immutable/entry/start.BcQalMDp.js","_app/immutable/chunks/CwWHAa5w.js","_app/immutable/chunks/BZSqidRg.js","_app/immutable/chunks/IQ6MdLvz.js","_app/immutable/entry/app.B9qodvYb.js","_app/immutable/chunks/BZSqidRg.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DF0YKfEK.js","_app/immutable/chunks/D-PEu8Jm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/404","/contact"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
