import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
  server: {
    port: 5000,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:5000',
  },
})
