
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'  // 引入 store
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
//将所有东西挂载到#app上
createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
