<script>
export default {
  data() {
    return {
      cryptocurrencies: [],
    }
  },
  mounted() {
    this.populateTable()
  },
  methods: {
    async getData() {
      try {
        const response = await fetch('https://api.coinpaprika.com/v1/tickers')
        const data = await response.json()
        return data
      } catch (error) {
        console.error('Error fetching cryptocurrency market data:', error)
        return []
      }
    },
    async populateTable() {
      const marketData = await this.getData()
      this.cryptocurrencies = marketData.slice(0, 5)
      console.log(marketData.slice(0, 5))
    },
  },
}
</script>

<template>
  <section class="px-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20">
      <div class="p-5">
        <h1 class="text-5xl md:text-7xl pb-10">UVUVWE</h1>
        <p class="pb-8">
          Lorem ipsum dolor sit amet. Sed voluptatibus laborum rem deleniti
          doloribus hic velit enim et suscipit quaerat. Aut numquam error et
          consequatur galisum eos dolores autem in aliquam asperiores. Ad
          exercitationem optio et quasi illum in quasi ratione At inventore
          tempora eum dolor nemo ab dolorum temporibus ad itaque maxime
        </p>
        <div class="flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 rounded-full"
          >
            SHEESH
          </button>
        </div>
      </div>
      <div class="relative p-5">
        <img
          src="../../assets/Fruitie/1547667490.png"
          class="rounded-md absolute w-36"
          style="top: 30px; left: 30px"
        />
        <img
          src="../../assets/Fruitie/2997147654.png"
          class="rounded-md absolute w-36 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        />
        <img
          src="../../assets/Fruitie/5404552974.png"
          class="rounded-md absolute w-36 bottom-0 right-0"
          style="bottom: 30px; right: 30px"
        />
      </div>
    </div>
  </section>
  <section class="px-5 pt-20">
    <div class="flex flex-col md:flex-row align-middle bg-purple-500/40 rounded-lg">
      <div class="flex-row basis-1/3 p-10">
        <span class="float-left material-symbols-outlined px-2">
          verified_user
        </span>
        <h1>Strong Security</h1>
        <p>Secure transaction and record</p>
      </div>
      <div class="flex-row basis-1/3 p-10">
        <span class="float-left material-symbols-outlined px-2">
          price_check
        </span>
        <h1>Payment Options</h1>
        <p>Flexible payment methods</p>
      </div>
      <div class="flex-row basis-1/3 p-10">
        <span class="float-left material-symbols-outlined px-2">
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
  <section class="p-5">
    <div class="mx-auto" id="about">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex flex-row align-middle items-center basis-1/2">
          <div
            class="rounded-lg flex flex-row justify-center align-middle gap-10 p-5 animate-pulse"
          >
            <img
              src="../../assets/Fruitie/1547667490.png"
              class="rounded-full w-24 lg:w-36 md:w-28"
            />
            <img
              src="../../assets/Fruitie/2997147654.png"
              class="rounded-full w-24 lg:w-36 md:w-28"
            />
            <img
              src="../../assets/Fruitie/5404552974.png"
              class="rounded-full w-24 lg:w-36 md:w-28"
            />
          </div>
        </div>
        <div class="flex-row basis-1/2">
          <h1 class="text-4xl flex justify-center mb-5">About US</h1>
          <p class="text-2xl">Discover More!</p>
          <p class="text-2xl mb-2">Collect and Sell Rare NFT’s</p>
          <p class="mb-2">
            Lorem ipsum dolor sit amet. Sed voluptatibus laborum rem deleniti
            doloribus hic velit enim et suscipit quaerat. Aut numquam error et
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <button class="rounded-none bg-purple-500/50 w-52 m-2">
                Wide Range of Platforms
              </button>
              <button class="rounded-none bg-purple-500/50 w-52 m-2">
                World Class Artist
              </button>
            </div>
            <div>
              <button class="rounded-none bg-purple-500/50 w-52 m-2">
                Any Type of Assets
              </button>
              <button class="rounded-none bg-purple-500/50 w-52 m-2">
                Fast Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-5">
    <h1 class="text-4xl mt-10 pb-10">Market Trend</h1>
    <div class="flex justify-center mb-5 overflow-x-auto">
      <table
        class="table-auto min-w-full border-collapse border border-gray-300 bg-purple-500/50"
      >
        <thead>
          <tr>
            <th class="text-center px-4 py-2">Symbol</th>
            <th class="text-center px-4 py-2">Price</th>
            <th class="text-center px-4 py-2">Market Cap</th>
            <th class="text-center px-4 py-2">24h Change</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="crypto in cryptocurrencies" :key="crypto.id">
            <td class="border text-center px-4 py-2">{{ crypto.symbol }}</td>
            <td class="border text-center px-4 py-2">
              $ {{ crypto.quotes.USD.price.toFixed(2) }}
            </td>
            <td class="border text-center px-4 py-2">
              $ {{ crypto.quotes.USD.market_cap }}
            </td>
            <td class="border text-center px-4 py-2">
              {{ crypto.quotes.USD.market_cap_change_24h }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 0, 'GRAD' 0, 'opsz' NaN;
}
</style>
