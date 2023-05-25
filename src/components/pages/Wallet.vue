<script>
import { publicKey } from '../../custodianWallet/masterWallet.js';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import { sendEmail } from "../../lib/utils.js"
import Navigation from '../Navigation.vue';
import { fetchWallet } from '../../api/fetchDbData';

const chains = [arbitrum, mainnet, polygon]
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
        async triggerSendEmail() {
          try {
            await sendEmail()
            console.log("arovugj")
          } catch (error) {
            console.log(error)
          }
        },
    },
    components: { Navigation },
    async mounted() {
      fetchWallet();
    },
};

 
</script>

<template>
    <div class="wrapper">
        <HelloWorld msg="Metamask wallet" />
        <!-- <p>Connect Wallet</p> -->
        <br>
      </div>
      <div>
        <h1> Custodian Wallet </h1>
        <button @click="toggle">Show Public Key</button>
        <div v-if="showPublicKey">
          <span>Public Key: {{ publicKey }}</span>
        </div>
        <button @click="triggerSendEmail">Send Email</button>
        <br>
        
        <!-- <a href="/MintingPage">Mint Now!!</a> -->
      </div>

</template>