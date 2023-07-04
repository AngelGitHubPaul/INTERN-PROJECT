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
import HowToImport from './components/pages/HowToImport.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AOSPlugin from './aos-plugin';

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
    path: '/howtoimport',
    component: HowToImport,
  },
  {
    path: '/mintnft/claimnft',
    component: ClaimNftPage,
    meta: { requiresAuth: true },
    beforeEnter: async (to, from) => {
      try {
        const email = to.query.email;
        const response = await axios.get('https://the-intern-project.vercel.app/api/authenticate', {
          params: {
            email: email
          }
        });
        if (response.status === 200) {
          to.meta.email = email;
          return;
        }
      } catch (error) {
        console.error('Authentication error');
        router.replace('/NotFoundPage');
        return;
      }
    }
  },
]

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faAppleWhole } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faAppleWhole)

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes: routes,
})

const app = createApp(App)

app.use(router);
app.use(AOSPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')