import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/kor/api/tasty.html': {
        target: 'https://www.daegufood.go.kr',
        changeOrigin: true,
        secure: false,
      },
      '/gimhae/api': {
        target: 'https://www.gimhae.go.kr/openapi/tour', 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/gimhae\/api/, ''),
      },
    },
  },
});


