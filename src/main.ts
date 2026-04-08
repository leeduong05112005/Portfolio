import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faThumbsUp, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faVuejs, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faThumbsUp, faPhone, faEnvelope, faLocationDot, faFacebook, faVuejs, faHtml5, faCss3, faJs)

createApp(App)
    .use(router)
    .use(ElementPlus)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
