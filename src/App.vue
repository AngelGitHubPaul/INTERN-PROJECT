<script setup>
import HelloWorld from './components/HelloWorld.vue'


import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '3573bd0abc5671d2624f6e29d229f71a'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)
</script>

<template>
  <main>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Scan to connect wallet" />
      <!-- <p>Connect Wallet</p> -->
      <br>
      <w3m-core-button>Connect Wallet</w3m-core-button>
    </div>
  </header>
    <TheWelcome />
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 100vw) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    place-items: center;
    /* flex-wrap: wrap; */
    flex-direction: column;
  }
}
</style>
