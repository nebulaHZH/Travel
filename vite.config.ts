import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true, // 允许跨域  8月更新
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

