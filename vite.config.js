import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) =>(
    {
      base: command == 'serve' ? '/':'/itsReact/',
      plugins: [react()]
    })
)
