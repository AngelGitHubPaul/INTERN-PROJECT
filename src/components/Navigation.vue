<template>
  <header class="mt-20">
    <nav class="z-50 flex items-center mx-auto fixed top-0 left-0 w-full px-2 py-1 bg-gray-800 shadow-sm">
      <RouterLink to="/" class="flex items-center hover:bg-black/0">
        <img class="flex-shrink-0 w-16 cursor-pointer" src="../assets/Fruitie/1.png" alt="..." />
        <div class="px-10 font-bold">FRUITY NFT</div>
      </RouterLink>
      <div :class="['nav-links', { 'top-[12%]': isMenuOpen }]"
        class="duration-500 md:static absolute ml-auto bg-black md:bg-transparent md:min-h-fit min-h-[85vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 z-50">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-8">
          <!--<li>
            <RouterLink to="/claimnft" class="button">Trade</RouterLink>
          </li>  
          <li>
            <RouterLink to="/mintnft" class="button">MINT</RouterLink>
          </li> 
          <li>
            <RouterLink to="/wallet" class="button">Wallet</RouterLink>
          </li> -->
          <li>
            <a class="px-6 py-3 rounded-lg cursor-pointer" @click="scrollToSection('#about')">About Us</a>
          </li>
          <li><w3m-core-button>Connect Wallet</w3m-core-button></li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <ion-icon @click="toggleMenu" :name="isMenuOpen ? 'close' : 'menu'"
          class="text-3xl z-50 cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, toRef, defineProps } from 'vue';
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false);
const props = defineProps({
  scrollToSection: Function,
});
const scrollToSection = toRef(props, 'scrollToSection');

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
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
