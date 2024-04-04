import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env.WS',env.WS);
  
  return{
    plugins: [react()],
    base:env.BASE,
    server:{
      proxy: {
        '/chatserver': {
          target: 'http://localhost:8530/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/chatserver/, '/chatserver/') // 不可以省略rewrite
        },
      }
    },
  }
})
