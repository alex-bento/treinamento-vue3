import { createApp } from 'vue'
import Playground from '../src/views/Playaground/Playground.vue'
import { setup } from './utils/bootstrap'

import App from './App.vue'
import '../src/assets/css/tailwind.css'
import '../src/assets/css/fonts.css'
import 'animate.css'

setup({
  onProduction: () => {
    createApp(App).mount('#app')
  },
  onDevelopment: () => {
    createApp(Playground).mount('#app')
  }
})

// createApp(Playground).mount('#app')
