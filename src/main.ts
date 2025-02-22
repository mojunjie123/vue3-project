import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from './components'
import './styles/base.scss'
import './styles/ui.scss'
import { createPinia } from 'pinia'
// import store from './store/vuex'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(mUI)
  .mount('#app')
