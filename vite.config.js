import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		assetsInlineLimit: "91000", // 2kb
		rollupOptions: "https://rollupjs.org/guide/en/#outputmanualchunks",
	},
});
