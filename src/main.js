import './assets/main.css'

import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import MintingPage from './components/pages/MintingPage.vue'
import Wallet from './components/pages/Wallet.vue'
import NftPage from './components/pages/NftPage.vue'
import NotFoundPage from './components/pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
