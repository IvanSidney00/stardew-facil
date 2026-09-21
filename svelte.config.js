import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$types: "./codegen",
			$generated: "./generated",
		},
		paths: {
			base: "",
		},
		prerender: {
			handleHttpError: "warn",
		},
		csp: {
			mode: "auto",
			directives: {
				"connect-src": ["self", "*.sentry.io", "*.ingest.us.sentry.io"],
				"script-src": ["self", "unsafe-inline"],
				"worker-src": ["self", "blob:"],
			},
		},
	},
	vitePlugin: { inspector: true },
};

export default config;
