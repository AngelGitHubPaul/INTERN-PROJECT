<script setup>
import { ref } from 'vue';
import RegistrationModal from './components/RegistrationModal.vue';
import HelloWorld from './components/HelloWorld.vue'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import Navigation from './components/Navigation.vue';

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

//for the register modal
const showModal = ref(false); // Initially, the modal is hidden

const openModal = () => {
  showModal.value = true; // Show the modal when the button is clicked
};

const closeModal = () => {
  showModal.value = false; // Close the modal when the close event is emitted
};

</script>

<template>
  <main>
      <Navigation/>  
  <header>
    <div class="wrapper">
      <HelloWorld msg="Welcome to Your Mint Wallet!" />
      <!-- <p>Connect Wallet</p> -->
      <br>
      <br>
      <button @click="openModal">Register Account</button>
      <RegistrationModal v-if="showModal" @close="closeModal"/>
    </div>

  </header>
  <section>
    <div class="box-container">
      <div class="container">1</div>
      <div class="container">2</div>
      <div class="container">3</div>
      <div class="container">4</div>
    </div>
  </section>
  </main>
</template>