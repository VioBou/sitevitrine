import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Initialize theme and locale from localStorage on load
const savedTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', savedTheme)

const savedLocale = localStorage.getItem('locale') || 'fr'
document.documentElement.lang = savedLocale

const app = createApp(App)
app.use(router)
app.mount('#app')
