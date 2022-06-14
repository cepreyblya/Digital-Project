import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/vuex/store'
import Maska from 'maska'



const app = createApp(App)

app.use(Maska)
  .use(store)
  .use(router)
  .mount('#app')
