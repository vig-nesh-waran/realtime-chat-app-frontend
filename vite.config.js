import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/realtime-chat-app-frontend/",
  build: {
    chunkSizeWarningLimit: 1000  // Adjust the limit as needed
  }
})
