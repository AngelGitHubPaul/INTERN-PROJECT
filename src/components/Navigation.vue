<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- <nav class="flex justify-end w-screen h-32 place-items-center gap-10 pr-10 pt-2 pb-2">
    <div class="flex gap-10">
      <RouterLink to="/" class="button">Trade</RouterLink>
      <RouterLink to="/" class="button">Earn</RouterLink>
      <RouterLink to="/mintnft" class="button">NFT</RouterLink>
      <RouterLink to="/" class="button">CrossChain</RouterLink>
      <RouterLink to="/wallet" class="button">Wallet</RouterLink>
    </div>
    <w3m-core-button class="button">Connect Wallet</w3m-core-button>
  </nav> -->
  <header class="mt-0">
    <nav class="flex justify-between items-center w-fit mx-auto">
      <RouterLink to="/" class="flex items-center hover:bg-black/0">
        <img class="flex-shrink-0 w-16 cursor-pointer" src="../assets/Fruitie/9424480543.png" alt="..."/>
        <div class="px-10">FRUITY NFT</div>
      </RouterLink>
      <div
        :class="['nav-links', { 'top-[12%]': isMenuOpen }]"
        class="duration-500 md:static absolute bg-black md:bg-transparent md:min-h-fit min-h-[85vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 z-50"
      >
        <ul
          class="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-8"
        >
          <li>
            <RouterLink to="/claimnft" class="button">Trade</RouterLink>
          </li>
          <li>
            <RouterLink to="" class="button">Earn</RouterLink>
          </li>
          <li>
            <RouterLink to="/mintnft" class="button">MINT</RouterLink>
          </li>
          <li>
            <RouterLink to="" class="button">CrossChain</RouterLink>
          </li>
          <li>
            <RouterLink to="/wallet" class="button">Wallet</RouterLink>
          </li>
          <li><w3m-core-button>Connect Wallet</w3m-core-button></li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon
          @click="toggleMenu"
          :name="isMenuOpen ? 'close' : 'menu'"
          class="text-3xl cursor-pointer md:hidden"
        ></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
.button {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 10px;
  display: block;
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.button span {
  background: linear-gradient(-45deg, #63a4ff 0%, #83eaf1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button:hover span {
  -webkit-text-fill-color: white;
}

.button::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(2);
  border: 3px solid;
  border-image: linear-gradient(-45deg, #63a4ff 0%, #83eaf1 100%);
  border-image-slice: 1;
  border-width: 2px 0 2px 0;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
}

.button:hover::before {
  transform: scaleY(0);
  opacity: 1;
}

.button::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ff1b2e 0%, #ff5f6c 100%);
  transform: scale(0);
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
}

.button:hover::after {
  transform: scaleY(1);
}

.button:active {
  scale: 0.9;
}
</style>
