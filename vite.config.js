import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	root: 'src',
	build: {
		outDir: path.join('..', 'dist'),
	},
})
