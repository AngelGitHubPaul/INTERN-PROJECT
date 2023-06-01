<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-end w-screen h-32 place-items-center gap-10 pr-10 pt-2 pb-2">
    <div class="flex gap-10">
      <!--update "to" value for routes -->
      <RouterLink to="/" class="button">Trade</RouterLink>
      <RouterLink to="/" class="button">Earn</RouterLink>
      <RouterLink to="/mintnft" class="button">NFT</RouterLink>
      <RouterLink to="/" class="button">CrossChain</RouterLink>
      <RouterLink to="/wallet" class="button">Wallet</RouterLink>
    </div>
    <w3m-core-button class="button">Connect Wallet</w3m-core-button>
  </nav>
</template>

<style scoped>

.button {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 30px;
  display: block;
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button span {
  background: linear-gradient(-45deg, #63A4FF 0%, #83EAF1 100% );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button:hover span {
  -webkit-text-fill-color: white;
}

.button::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(2);
  border: 3px solid;
  border-image: linear-gradient(-45deg, #63A4FF 0%, #83EAF1 100% );
  border-image-slice: 1;
  border-width: 2px 0 2px 0;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: -1;
}

.button:hover::before {
  transform: scaleY(0);
  opacity: 1;
}

.button::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ff1b2e 0%, #ff5f6c 100% );
  transform: scale(0);
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: -1;
}

.button:hover::after {
  transform: scaleY(1);
}

.button:active {
  scale: 0.90;
}



</style>