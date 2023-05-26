<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'

const nft = ref(null)
const route = useRoute()
const { id } = route.params

// change this when we have nft data from database
// onBeforeMount(() =>{
//     nft.value = nfts.find(nx => nx.id === parseInt(id))
// })
</script>

<template>
  <div class="container">
    <div v-if="nft">
      <h1>NFT</h1>
    </div>
    <div v-else>
      <h1>NFT does not exist</h1>
    </div>
  </div>
</template>
