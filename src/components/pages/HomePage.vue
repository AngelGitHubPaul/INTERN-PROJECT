<template>
  <Navigation :scrollToSection="scrollToSection"></Navigation>
  <section class="max-w-[100vw] h-full px-10 md:px-28 lg:py-10" data-aos="zoom-in" data-aos-duration="1000">
    <div class="grid max-w-full grid-cols-1 md:grid-cols-2 gap-x-20">
      <div class="p-5">
        <h1 class="pb-10 text-5xl font-extrabold md:text-6xl">Fruity NFT</h1>
        <h2 class="text-5xl font-bold md:text-4xl">Discover,</h2>
        <p class="pb-0 text-5xl font-bold md:text-3xl">collect, and sell</p>
        <p class="pb-8 text-5xl font-bold md:text-3xl"> extraordinary NFTs</p>
        <p class="pb-8 ">The largest and unique Super rare NFT marketplace For Crypto-collectibles</p>
        <div class="flex justify-center text-center">
          <RouterLink to="/mintnft"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 w-80">Mint now</RouterLink>
        </div>
      </div>
      <div class="flex justify-center p-5 md:relative">
        <img src="../../assets/Fruitie/1.png" class="w-20 rounded-md md:absolute md:w-36" style="top: 30px; left: 30px" />
        <img src="../../assets/Fruitie/2.png"
          class="w-20 rounded-md md:absolute md:w-36 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-50" />
        <img src="../../assets/Fruitie/3.png" class="w-20 rounded-md md:absolute md:w-36"
          style="bottom: 30px; right: 30px" />
      </div>
    </div>
  </section>
  <section class="max-w-[100vw] h-full px-10 md:px-28 lg:py-10" data-aos="fade-right" data-aos-duration="1000">
    <div class="flex flex-col align-middle rounded-lg md:flex-row bg-purple-500/40">
      <div class="flex-row p-10 basis-1/3">
        <span class="float-left px-2 material-symbols-outlined">
          verified_user
        </span>
        <h1>Strong Security</h1>
        <p>Secure transactions and record</p>
      </div>
      <div class="flex-row p-10 basis-1/3">
        <span class="float-left px-2 material-symbols-outlined">
          price_check
        </span>
        <h1>Payment Options</h1>
        <p>Flexible payment methods</p>
      </div>
      <div class="flex-row p-10 basis-1/3">
        <span class="float-left px-2 material-symbols-outlined">
          verified_user
        </span>
        <h1>Updated Market</h1>
        <p>
          The most accessible and trusted source of market cap, valuation and
          cryptocurrency information
        </p>
      </div>
    </div>
  </section>
  <section id="about" class="py-16">
    <div class="max-w-[100vw] h-full px-10 md:px-28 lg:py-10" data-aos="fade-left" data-aos-duration="1000">
      <div class="flex flex-col items-center gap-4 align-middle md:flex-row">
        <div class="flex flex-row items-center align-middle basis-1/2">
          <div class="flex flex-row justify-center gap-2 p-5 align-middle rounded-lg animate-pulse">
            <img src="../../assets/Fruitie/1.png" class="w-24 rounded-full lg:w-36 md:w-28" />
            <img src="../../assets/Fruitie/2.png" class="w-24 rounded-full lg:w-36 md:w-28" />
            <img src="../../assets/Fruitie/3.png" class="w-24 rounded-full lg:w-36 md:w-28" />
          </div>
        </div>
        <div class="flex-row basis-1/2">
          <h1 class="flex justify-center mb-5 text-4xl font-bold">About US</h1>
          <p class="text-2xl font-bold">What is Fruity?</p>
          <p class="mb-2 text-2xl"></p>
          <p class="mb-2">
            Fruity are mysterious and rare fruits that grant unique and
            supernatural powers to those who consumes.
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <button class="m-2 rounded-md bg-purple-500/50 w-52">
                Wide Range of Platforms
              </button>
              <button class="m-2 rounded-md bg-purple-500/50 w-52">
                World Class Artist
              </button>
            </div>
            <div>
              <button class="m-2 rounded-md bg-purple-500/50 w-52">
                Any Type of Assets
              </button>
              <button class="m-2 rounded-md bg-purple-500/50 w-52">
                Fast Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-[100vw] h-full px-10 md:px-28 lg:py-10" data-aos="fade-up" data-aos-duration="1000">
    <h1 class="flex justify-center mb-5 text-4xl font-bold">Market Trend</h1>
    <div class="flex justify-center mb-5 overflow-x-auto">
      <table class="min-w-full border border-collapse border-gray-300 table-auto bg-purple-500/50">
        <thead>
          <tr>
            <th class="px-4 py-2 font-bold text-center">Symbol</th>
            <th class="px-4 py-2 font-bold text-center">Price</th>
            <th class="px-4 py-2 font-bold text-center">Market Cap</th>
            <th class="px-4 py-2 font-bold text-center">24h Change</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="crypto in cryptocurrencies" :key="crypto.id">
            <td class="px-4 py-2 text-center border">{{ crypto.symbol }}</td>
            <td class="px-4 py-2 text-center border">
              $ {{ crypto.quotes.USD.price.toFixed(2) }}
            </td>
            <td class="px-4 py-2 text-center border">
              $ {{ crypto.quotes.USD.market_cap }}
            </td>
            <td class="px-4 py-2 text-center border">
              {{ crypto.quotes.USD.market_cap_change_24h }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="max-w-[100vw] h-full px-10 md:px-28 lg:py-10" data-aos="flip-up" data-aos-duration="1000">
    <div class="flex items-center justify-center mx-auto">
      <p class="mb-2 text-2xl font-bold" data-v-9ee6238f="">Frequently asked questions</p>
    </div>
    <div class="flex flex-col items-center md:justify-center w-full h-[80%] mx-auto md:flex-row" data-v-9ee6238f="">
      <!-- <div class="grid grid-cols-1 md:grid-cols-2" data-v-9ee6238f=""> -->
        <RouterLink to="/whatisnft" class="flex items-center justify-center md:min-h-full min-h-[75px] px-4 py-2 m-2 font-semibold text-center text-white rounded-md bg-purple-500/50 w-52" data-v-9ee6238f="">What is NFT?</RouterLink>
        <RouterLink to="/howtoimport" class="flex items-center justify-center md:min-h-full min-h-[75px] px-4 py-2 m-2 font-semibold text-center text-white rounded-md bg-purple-500/50 w-52" data-v-9ee6238f="">How to import your minted NFT to your metamask wallet</RouterLink>
        <!-- <div data-v-9ee6238f="" class="flex items-stretch justify-center h-full mx-auto">
        </div> -->
        <button class="flex items-center justify-center md:min-h-full min-h-[75px] m-2 font-bold text-white rounded-md bg-purple-500/50 w-52" data-v-9ee6238f="">
          How to Mint?
        </button>
        <button class="flex items-center justify-center md:min-h-full min-h-[75px] m-2 font-bold text-white rounded-md bg-purple-500/50 w-52" data-v-9ee6238f="">
          How payments process?
        </button>
        <!-- <div data-v-9ee6238f="" class="flex items-center justify-center h-full mx-auto">

        </div> -->
      <!-- </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, getCurrentInstance } from 'vue';
import Navigation from '../Navigation.vue';

const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

const cryptocurrencies = ref([]);
const { appContext } = getCurrentInstance();

async function getData() {
  try {
    const response = await fetch('https://api.coinpaprika.com/v1/tickers');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cryptocurrency market data:', error);
    return [];
  }
}

async function populateTable() {
  const marketData = await getData();
  cryptocurrencies.value = marketData.slice(0, 5);
}

onMounted(() => {
  populateTable();
  nextTick(() => {
    // Refresh AOS after rendering the component
    nextTick(() => {
      appContext.provides.AOS.init();
      appContext.provides.AOS.refresh();
    });
  });
});
</script>


<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 0, 'GRAD' 0, 'opsz' NaN;
}
</style>
