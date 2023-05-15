import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240 // 对大于 1mb 的文件进行压缩 需要更改大小可以自己进行换算
  })],
  server: {
    cors: true, // 允许跨域
    host:'0.0.0.0',
    port: 8090, // 端口号
    proxy: {
      "/api": {
        target: "http://175.178.127.100:8090/", // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        ws:true,// ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})


