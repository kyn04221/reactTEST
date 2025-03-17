// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 클라이언트에서 /kor/api/tasty.html 로 요청하면 이 요청을 target URL로 프록시합니다.
      '/kor/api/tasty.html': {
        target: 'https://www.daegufood.go.kr',
        changeOrigin: true,
        secure: false, // 만약 target의 SSL 인증서를 신뢰하지 않는 경우
      },
    },
  },
});
