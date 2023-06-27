import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import HomePage from './components/pages/HomePage.vue'
import MintingPage from './components/pages/MintingPage.vue'
import Wallet from './components/pages/Wallet.vue'
import NftPage from './components/pages/NftPage.vue'
import NotFoundPage from './components/pages/NotFoundPage.vue'
import ClaimNftPage from './components/pages/ClaimNftPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/mintnft',
    component: MintingPage,
  },
  {
    path: '/wallet',
    component: Wallet,
  },
  {
    path: '/nft/:id',
    component: NftPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
  {
    path: '/mintnft/claimnft',
    component: ClaimNftPage,
    // meta: { requiresAuth: true },
    // beforeEnter: async (to, from) => {
    //   try {
    //     const email = to.query.email;
    //     const response = await axios.get('https://the-intern-project.vercel.app/api/authenticate', {
    //       params: {
    //         email: email
    //       }
    //     });
    //     if (response.status === 200) {
    //       return;
    //     }
    //   } catch (error) {
    //     console.error('Authentication error');
    //     router.replace('/NotFoundPage');
    //     return;
    //   }
    // }
  },
]

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faSpinner } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faSpinner)

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const app = createApp(App)

app.use(router)
app.use(
  AOS.init({
    once: false,
  })
)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')