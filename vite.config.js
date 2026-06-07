import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    root: fileURLToPath(new URL('.',
        import.meta.url)),
    plugins: [react(), tailwindcss(), ],
})