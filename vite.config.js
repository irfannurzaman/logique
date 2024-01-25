import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginImp from 'vite-plugin-imp';


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
//   css: {
//     preprocessorOptions: {
      // less: {
      //   math: "always",
      //   relativeUrls: true,
      //   javascriptEnabled: true,
      // },
//     },
//   },
// })

export default defineConfig({
  // base: '/vite-react/',
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    // open: true,
    port: 3000,
  },
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
  },
})
