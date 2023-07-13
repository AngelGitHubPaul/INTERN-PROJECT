<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { isConnected, contract, userAddress, signInToMetamask, setContractInstance } from "../../lib/FruityNftInstance"
import swal from 'sweetalert';
import NftDetailsModal from "./modals/claimNFTPage/nftDetails.vue";
import { nftMinted } from '../../api/getAxios.js'

let isMinted = ref(false);
let mintedNftTokenId = ref(null);
let mintedNftURI = ref(null);
let mintedNftDetails = ref({});
let openModal = ref(false);
let openLoadingModal = ref(true);
let loadingModalMessage = ref("");
let currentSupply = ref(null);
let maxSupply = ref(11);

onMounted(async ()=>{
  openLoadingModal.value = true;
  
  loadingModalMessage.value = "Checking Metamask..."
  if(window.ethereum == undefined){
    alert("Please Install Metamask first!")
  }
  
  loadingModalMessage.value = "Establishing wallet connection..."
  if(!isConnected){
    await signInToMetamask().then(async ()=>{
      loadingModalMessage.value = "Setting Contract Instance..."
      await setContractInstance()
      console.log(contract)
      currentSupply.value = parseInt(await contract.currentSupply())
      loadingModalMessage.value = "Validating Your Minting Information..."
      isMinted.value = await getTokenIdMinted(userAddress) != 0;

      if(isMinted.value){
        swal("This wallet have already minted a Fruity NFT", "", "warning")
      }

      console.log(currentSupply.value)
    })
  }

  loadingModalMessage.value = "";
  openLoadingModal.value = false;
})

async function mintNFT() {
  try {
    openLoadingModal.value = true;
    if (!isConnected) {
      swal("Connect your Metamask Wallet first!", "", "warning");
      loadingModalMessage.value = "Establishing Wallet Connection..."
      await signInToMetamask().then(async ()=>{
        loadingModalMessage.value = "Setting Contract Instance..."
        await setContractInstance();
        swal("Your wallet is now connected, you can now mint your NFT", "", "success");
        console.log("Setup Successful", contract);
      })
      await mintNFT();
      return;
    } 
    
    loadingModalMessage.value = "Checking Fruity NFT Supply`..."
    if(currentSupply.value >= maxSupply.value){
      swal("Max Fruity NFT supply has been reached", "", "warning");
      return;
    }
    loadingModalMessage.value = "Validating Minting Info..."
    if (isMinted.value && getTokenIdMinted(userAddress)) {
      swal("This wallet has already minted a Fruity NFT", "", "warning");
      return;
    }
    
    loadingModalMessage.value = "Paying Gas Fee..."
    const transaction = await contract.safeMint(userAddress);
    loadingModalMessage.value = "Minting..."
    await transaction.wait();
    console.log('NFT minted successfully!', 'Token Id: ' + mintedNftTokenId);
    const router = useRouter();
    nftMinted(router.currentRoute.value.meta.email);
    currentSupply.value = parseInt(await contract.currentSupply())
    await getNftDetails();
    isMinted.value = true;
    openModal.value = true;

  } catch (error) {
    if(openLoadingModal.value){
      openLoadingModal.value = false
    }
    swal(error.message, "", "warning")
    console.error('Error minting NFT:', error.message);
  } 
}

function returnToHomepage() {
  this.$router.push('/')
}

async function getTokenIdMinted(userAddress) {
  return parseInt(await contract.walletMints(userAddress));
}

async function getNftDetails() {
  if(!openLoadingModal.value){
    openLoadingModal.value = true;
  }

  loadingModalMessage.value = "Fetching your Fruity details..."
  const tokenIdMinted = await getTokenIdMinted(userAddress);
  console.log(tokenIdMinted)
  const nftURI = await contract.tokenURI(tokenIdMinted);
  console.log(tokenIdMinted, nftURI)
  mintedNftTokenId.value = tokenIdMinted;
  mintedNftURI.value = nftURI;

  // get the image url from the minted nft's uri through XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', mintedNftURI.value);
  xhr.responseType = "json";
  xhr.onload = () => {
    mintedNftDetails.value.image = xhr.response.image;
    mintedNftDetails.value.name = xhr.response.name;
    mintedNftDetails.value.description = xhr.response.description;
    mintedNftDetails.value.id = mintedNftTokenId.value;

    console.log("Image Url >> " + mintedNftDetails.value.image)
    console.log("Fruity Name >> " + mintedNftDetails.value.name)
    console.log("Description >> " + mintedNftDetails.value.description)
    openModal.value = true;
  }
  xhr.send();

  loadingModalMessage.value = "";
  openLoadingModal.value = false;
}


</script>

<template>
  <body>
    <section class="relative flex items-center justify-center w-screen h-screen">
      <div id="#main" class="relative flex flex-col items-center justify-center">
        <!-- <Carousel :autoplay="2000" class="border-2 border-teal-400 rounded-md shadow-lg outline-black hover:shadow-2xl shadow-teal-950 bg-teal-400/50"></Carousel> -->
        <div v-if="openLoadingModal" class="fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-black/60 z-10">
          <font-awesome-icon icon="fa-solid fa-apple-whole" class="w-16 h-16" bounce style="color: #fff;" />
          <p class="text-white">{{ loadingModalMessage }}</p>
        </div>
        <div
          class="w-full border-2 border-teal-400 rounded-md shadow-lg aspect-ratio outline-black hover:shadow-2xl shadow-teal-950 bg-teal-400/50">
          <img src="../../assets/Fruitie/1.png" alt="">
        </div>
        <div class="py-5 text-3xl">FRUITY NFT Claim</div>
        <div>
          <button v-if="isMinted == false" class="button" @click="mintNFT">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Mint</span>
            </span>
          </button>
          <RouterLink v-else to="/">
            <div class="button">
              <span class="text-center button_lg">
                <span class="button_sl"></span>
                <span class="button_text">Return to Homepage</span>
              </span>
            </div>
          </RouterLink>
          <p>Current Fruities Minted: {{ currentSupply }} / {{ maxSupply }}</p>
          <button v-if="isMinted == true" class="text-white button" @click="getNftDetails()" >
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Get Nft Image and MetaData</span>
            </span>
          </button>
        </div>
        <div v-if="openModal == true"
          class="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-black/60 z-50">
          <NftDetailsModal v-bind:nftDetails="mintedNftDetails" v-on:close="()=>openModal = false"/>
        </div>
      </div>
    </section>
  </body>
</template>

   
<style scoped>
img {
  width: 300px;
  height: auto;
  padding: 5px;
}

/* Minting button css */

.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  width: 12rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  width: 12rem;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f2031;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

/* Bg css */

body {
  position: relative;
  background: linear-gradient(-45deg, #ff4848, #00000077, #04081f, #111d33);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100%;
  width: 100%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
   