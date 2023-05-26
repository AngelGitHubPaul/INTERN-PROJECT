<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="nav-holder">
      <!--update "to" value for routes -->
      <RouterLink to="/" class="hover-link">Trade</RouterLink>
      <RouterLink to="/" class="hover-link">Earn</RouterLink>
      <RouterLink to="/mintnft" class="hover-link">NFT</RouterLink>
      <RouterLink to="/" class="hover-link">CrossChain</RouterLink>
      <RouterLink to="/wallet" class="hover-link">Wallet</RouterLink>
    </div>
    <w3m-core-button>Connect Wallet</w3m-core-button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  width: 100vw;
  height: 80px;
  background-color: rgba(127, 255, 212, 0.103);
  justify-content: end;
  padding-right: 4rem;
  place-items: center;
  gap: 50px;
}

nav .nav-holder {
  display: flex;
  gap: 50px;
}

.hover-link {
  font-weight: 500;
  font-size: large;
}

.hover-link:hover {
  color: whitesmoke;
  background-color: transparent;
}
</style>
