import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://movie-vault-production-53f2.up.railway.app',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
