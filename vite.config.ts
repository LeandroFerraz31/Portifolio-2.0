// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Configurar alias para caminhos mais curtos, se necessário
      '@': '/src',
    },
    // Configurar regras para lidar com arquivos de imagem
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png', '.jpg', '.jpeg', '.gif'],
  },
});
