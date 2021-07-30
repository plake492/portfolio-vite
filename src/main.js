import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'

import './assets/styles/main.scss'

import App from './App.vue'

createApp(App).use(store).use(router).mount('#app')
