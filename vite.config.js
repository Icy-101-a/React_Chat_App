import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();
console.log("Environment variables loaded:", process.env);

export default defineConfig({
  plugins: [react()],
  // Other configuration options
});
