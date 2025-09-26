import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'], // keep this excluded if needed
  },

  server: {
    port: 5173,
    host: true, // allows access from LAN/IP
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // ✅ faster & no terser dependency
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },

  preview: {
    port: 4173,
    host: true,
    strictPort: true,
  },

  base: '/', // ensures correct routing for SPA
})
