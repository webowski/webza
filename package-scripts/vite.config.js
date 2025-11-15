import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import path from 'path';

export default defineConfig({
	root: '.',
	plugins: [
		liveReload(['src/**/*.php'])
	],
	build: {
		outDir: 'dist/assets',
		rollupOptions: {
			input: path.resolve(__dirname, 'src/shared/config/bundle.ts')
		}
	},
	server: {
		watch: { ignored: ['**/dist/**'] }
	}
});
