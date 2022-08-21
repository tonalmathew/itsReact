import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

// export default defineConfig(({ command }) => {
//   if (command === 'serve') {
//       return {
//         base: '/',
//         plugins: [react()]
//       }
//     } else {
//       return {
//         base: '/itsReact/',
//         plugins: [react()]
//       }
//     }
// })
