<template>
 <body>
  <section class="flex items-center h-screen w-screen">
    <div class="flex flex-col basis-1/2 first-letter: justify-center items-center px-5">
      <div class="rounded-md border-2 border-teal-400 outline-black shadow-lg hover:shadow-2xl shadow-teal-950 bg-teal-400/50">
        <img src="../../assets/Fruitie/9424480543.png" />
      </div>
      <div class="text-3xl py-5">UVUWE NFT Claim</div>
      <div>
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Mint Now!</span>
    </span>
</button>
      </div>
    </div>

    <div class="basis-2/3 pr-16">
      <p class=" font-bold text-white text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        aliquid veniam libero explicabo saepe recusandae eligendi? Ducimus
        similique laboriosam iste maxime voluptatum perspiciatis suscipit
        sapiente quidem minus, nobis et tempore corrupti saepe repudiandae earum
        doloribus? Modi debitis corporis, qui illo voluptatem, temporibus
        cupiditate et quam quaerat dignissimos voluptatibus, eum adipisci?
      </p>
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
	background: linear-gradient(-45deg, #292929, #00000077, #202020, #333333);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
  width: 100vw;
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
