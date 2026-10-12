import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBars,
  faXmark,
  faArrowRight,
  faArrowUpRightFromSquare,
  faDownload,
  faCode,
  faMicrochip
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faVuejs,
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faPhone, faEnvelope, faLocationDot, faBars, faXmark, faArrowRight, faArrowUpRightFromSquare, faDownload, faCode, faMicrochip,
  faGithub, faLinkedinIn, faFacebookF, faVuejs, faHtml5, faCss3, faJs, faPython, faReact
)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
