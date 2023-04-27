import { createApp } from 'vue'
import './style.css'
import './assets/css/global.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import vue3videoPlay from 'vue3-video-play' 
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import 'vue3-video-play/dist/style.css' // 引入css
import markdownIt from 'markdown-it'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia();
pinia.use(piniaPersist);
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
  });
const app = createApp(App)
app.use(markdownIt)
app.use(pinia)
app.use(VueMarkdownEditor)
app.use(router)
app.use(vue3videoPlay)
app.use(Antd).mount('#app')
