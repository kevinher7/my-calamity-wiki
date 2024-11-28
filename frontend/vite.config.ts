import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api/get-class-setups": "http://localhost:8050",
		},
	},
	plugins: [react()],
});
