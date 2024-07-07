import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import { viteBrotli } from 'vite-plugin-brotli';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
    viteBrotli(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5002', // Your API server address
        changeOrigin: true,
        rewrite: (path) =>
          path.startsWith('/api') ? path : '/api' + path, // Adjusted path replacement
      },
    },
  },
  build: {
    outDir: 'build', // Specify the output directory as "build"
    chunkSizeWarningLimit: 2048, // 500
    rollupOptions: {
      input: {
        main: 'client/index.html',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 1024, //500
//     rollupOptions: {
//       input: {
//         main: 'client/index.html',
//       },
//     },
//   },
// })
