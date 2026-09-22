import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Bu satır telefondan veya aynı ağdaki başka bir cihazdan bağlanmanı sağlar
    port: 5173,
  },
})