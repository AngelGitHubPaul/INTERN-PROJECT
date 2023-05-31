<template>
  <div class="mint flex flex-row px-10">
    <div class="flex-row basis-2/3 px-5">
      <div
        class="rounded-md border-2 border-teal-400 outline-black shadow-lg hover:shadow-2xl shadow-teal-950 bg-teal-400/50 p-2"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        aliquid veniam libero explicabo saepe recusandae eligendi? Ducimus
        similique laboriosam iste maxime voluptatum perspiciatis suscipit
        sapiente quidem minus, nobis et tempore corrupti saepe repudiandae earum
        doloribus? Modi debitis corporis, qui illo voluptatem, temporibus
        cupiditate et quam quaerat dignissimos voluptatibus, eum adipisci?
      </div>
    </div>
    <div
      class="flex flex-col basis-1/3 justify-center align-middle items-center image px-5"
    >
      <div
        class="rounded-md border-2 border-teal-400 outline-black shadow-lg hover:shadow-2xl shadow-teal-950 bg-teal-400/50"
      >
        <img src="../../assets/Fruitie/9424480543.png" />
      </div>
      <div class="text-3xl py-5">UVUWE NFT Claim</div>
      <div class="button">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Mint Your NFT!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mint {
  position: relative;
  height: 100vh;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column {
  flex: 1;
}

.container {
  padding: 25px;
}

img {
  width: 300px;
  height: auto;
  padding: 5px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .image {
  display: grid;
  justify-content: center;
} */

.heading {
  display: flex;
  justify-content: center;
}

/* p {
  border-radius: 14px;
  border-color: gray;
  border-width: 1px;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 300px;
  padding: 10px;
  background-color: #009688;
  font-family: 'Arial', Helvetica, sans-serif;
  font-size: 18px;
} */
</style>
