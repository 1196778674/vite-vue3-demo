import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import '@/mock'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')
