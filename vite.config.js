import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'src/assets'),
			utils: path.resolve(__dirname, 'src/utils')
		}
	},
	plugins: [ vue() ]
});
