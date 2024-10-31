import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})

/*
server: { proxy: { '/api': 'http://localhost:5000' } }

Configures the development server’s proxy.
proxy: Defines a proxy rule where any request to /api (e.g., /api/users) will be forwarded to http://localhost:5000/api/users. 
This setup is useful for avoiding CORS issues when your frontend (served on one port) communicates with a backend API (on another port).
*/