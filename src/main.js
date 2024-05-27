import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import toast from "vue-toastification"

const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
    }
createApp(App).use(router).use(store).use(toast, options).mount('#app')
