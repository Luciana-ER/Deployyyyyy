import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // Esto es importante para que Vite sepa dónde colocar los archivos compilados
//   },
//   base: '/client/', // Especifica la ruta base de tu frontend si está dentro de una carpeta o subdominio
// });