import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Add this line to fix routing in production
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});