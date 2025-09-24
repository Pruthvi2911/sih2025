import { defineConfig } from 'vite'
// Change this import line
import react from '@vitejs/plugin-react-swc' // Use the SWC plugin
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // This line now correctly uses the imported SWC plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173, // Keep the port set to 5173 to avoid conflicts
  }
})