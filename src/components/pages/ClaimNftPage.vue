<script>
import { contract, userAddress} from "../../lib/FruityNftInstance"

export default {
  data() {
    return {
      mintedNftTokenId: null,
      mintedNftURI: null,
      mintedNftImgSrc: null
    };
  },
  methods: {
    async mintNFT() {
      try {

        if (typeof window.ethereum === 'undefined') {
          throw new Error('Please install MetaMask to mint NFTs.');
        }

        const transaction = await contract.safeMint(userAddress);
        await transaction.wait();
        const tokenIdMinted = await contract.walletMints(userAddress);
        console.log('NFT minted successfully!', 'Token Id: ' +  tokenIdMinted);
        const nftURI = await this.getNftDetails(tokenIdMinted);
        this.mintedNftTokenId = tokenIdMinted;
        this.mintedNftURI = nftURI;
        this.mintedNftImgSrc = "https://ipfs.io/ipfs/bafybeig3s37uhworydiydd3eq7jbjbnbrxcjgqoh76u5xawj6jaasfknfi/" + tokenIdMinted +  ".png";
        
      } catch (error) {
        console.error('Error minting NFT:', error);
      }
    },
    async getNftDetails(tokenId) {
      const nftURI = await contract.tokenURI(tokenId);
      return await nftURI;
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
          <img src="../../assets/Fruitie/1547667490.png" alt="">
        </div>
         <div class="py-5 text-3xl">FRUITY NFT Claim</div>
         <div>
            <button class="button" @click="mintNFT">
                <span class="button_lg">
                    <span class="button_sl"></span>
                    <span class="button_text">Mint</span>
                </span>
            </button>
            <button class="button" @click="getImageUrl()">
                Get Nft Image Url
            </button>
          </div>
          <div v-if="mintedNftURI !== null && mintedNftTokenId !== null">
            <img v-bind:src="mintedNftImgSrc" alt="NFT Image" >
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
   