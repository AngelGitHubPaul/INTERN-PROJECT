<script>
import { contract, userAddress, signInToMetamask, setContractInstance } from "../../lib/FruityNftInstance"

export default {
  data() {
    return {
      mintedNftTokenId: null,
      mintedNftURI: null,
      mintedNftDetails: {},
    };
  },
  async mounted() {
    if (typeof window.ethereum === 'undefined') {
          throw new Error('Please install MetaMask to mint NFTs.');
      }
    await signInToMetamask()
    .then(async ()=>{
        await setContractInstance();
        console.log("Setup Successful")
    })
    .catch((err)=>{
      console.log(err.code, err.message);
    })
  },
  methods: {
    async mintNFT() {
      try {
        if(await contract.walletMints(userAddress) == 0){
          const transaction = await contract.safeMint(userAddress);
          await transaction.wait();
          this.getNftDetails();
          console.log('NFT minted successfully!', 'Token Id: ' +  tokenIdMinted);
        } else {
          alert("This wallet has already minted a Fruity NFT")
        }
      } catch (error) {
        console.error('Error minting NFT:', error);
      }
    },
    async getNftDetails() {
      const tokenIdMinted = await this.contract.walletMints(this.userAddress);
      const nftURI = await this.contract.tokenURI(tokenIdMinted);
      console.log("NFT URI >> " + nftURI)
      this.mintedNftTokenId = tokenIdMinted;
      this.mintedNftURI = nftURI;

      // get the image url from the minted nft's uri through XMLHttpRequest
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.mintedNftURI);
      xhr.responseType = "json";
      xhr.onload = () => {
        this.mintedNftDetails.image = xhr.response.image;
        this.mintedNftDetails.name = xhr.response.name;
        this.mintedNftDetails.description = xhr.response.description;
        
        console.log("Image Url >> " + this.mintedNftDetails.image)
        console.log("Fruity Name >> " + this.mintedNftDetails.name)
        console.log("Description >> " + this.mintedNftDetails.description)
      }
      xhr.send();
    },
    getImageUrl() {
      console.log(this.mintedNftImgSrc)
    }
  },
};
</script>



<template>
    <body>    
     <section class="flex items-center justify-center w-screen h-screen">
       <div class="flex flex-col items-center justify-center">
        <!-- <Carousel :autoplay="2000" class="border-2 border-teal-400 rounded-md shadow-lg outline-black hover:shadow-2xl shadow-teal-950 bg-teal-400/50"></Carousel> -->
        <div class="border-2 border-teal-400 rounded-md shadow-lg outline-black hover:shadow-2xl shadow-teal-950 bg-teal-400/50">
          <img src="../../assets/Fruitie/1.png" alt="">
        </div>
         <div class="py-5 text-3xl">FRUITY NFT Claim</div>
         <div>
            <button class="button" @click="mintNFT">
                <span class="button_lg">
                    <span class="button_sl"></span>
                    <span class="button_text">Mint</span>
                </span>
            </button>
            <button class="button" @click="getNftDetails()">
                Get Nft Image and MetaData
            </button>
          </div>
          <div v-if="mintedNftURI != null && mintedNftTokenId != null && mintedNftDetails != null">
            <img v-bind:src="mintedNftDetails.image" alt="NFT Image" >
            <p class="text-lg text-white">{{ mintedNftDetails.name }}</p>
            <p class="text-white text-md">{{ mintedNftDetails.description }}</p>
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
   
   body{
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
   