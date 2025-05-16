import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Crucial for most Vercel deployments
  build: {
    outDir: 'dist', // Default and recommended
  },
});