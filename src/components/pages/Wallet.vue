<script>
import { publicKey } from '../../custodianWallet/masterWallet.js';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig, sepolia } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import Navigation from '../Navigation.vue';
import { fetchWallet } from '../../api/getAxios.js';

const chains = [arbitrum, mainnet, polygon, sepolia]
const projectId = import.meta.env.VITE_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

// on click event MASTER WALLET
export default {
    name: 'App',
    data() {
        return {
            showPublicKey: false,
            publicKey: publicKey,
        };
    },
    methods: {
        toggle() {
            this.showPublicKey = !this.showPublicKey;
        },
    },
    components: { Navigation },
    async mounted() {
      fetchWallet();
    },
};

 
</script>

<template>
    <div class="flex flex-col items-center justify-center w-screen h-screen gap-10 bg-slate-800/50">
      <h1> Custodian Wallet </h1>
        <div class="flex gap-10">
          <button class="p-2 bg-black rounded-md hover:scale-105" @click="toggle">Show Public Key</button>
          <button class="p-2 bg-black rounded-md  btn hover:scale-105" @click="triggerSendEmail">Send Email</button>
            <div v-if="showPublicKey">
              <span>Public Key: {{ publicKey }}</span>
            </div>
        </div>
    </div>  

</template>