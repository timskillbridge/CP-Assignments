import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@pokemon-theme': '/full-stack/React/pokemon-theme-team-master/src',
      '@mute-speaker': '../../react-mute-button-master/src'
    },
  },
})
