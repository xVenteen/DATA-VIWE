import { createApp } from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'

createApp(App)
    .use(dataV)
    .mount('#app')
