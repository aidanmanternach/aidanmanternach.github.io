import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Make sure your base path is set correctly for GitHub Pages
  plugins: [react()],
});