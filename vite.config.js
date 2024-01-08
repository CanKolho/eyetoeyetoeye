import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // This line is for production
  //base: '/'

  // This line is for gh-pages development
  base: 'https://cankolho.github.io/eyetoeyetoeye'
})
