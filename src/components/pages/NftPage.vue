<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import nfts from '../__tests__/testdata.json'

const nft = ref(null)
const route = useRoute()
const { id } = route.params

// change this when we have nft data from database
onBeforeMount(() => {
  nft.value = nfts.find((nx) => nx.id === parseInt(id))
})
</script>

<template>
  <div class="container">
    <div v-if="nft">
      <h1>NFT {{ nft.id }}</h1>
      <img :src="nft.imageURL" />
      <p>{{ nft.name }}</p>
      <p>Price: {{ nft.price }} ETH</p>
    </div>
    <div v-else>
      <h1>NFT does not exist</h1>
    </div>
  </div>
</template>

<style scoped>
h1 {
  justify-content: center;
  display: flex;
}

img {
  width: 300px;
  height: auto;
}
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgb(45, 94, 57);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
