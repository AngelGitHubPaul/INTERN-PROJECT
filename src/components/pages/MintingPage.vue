<script>
export default {}
</script>

<template>
  <div class="heading"><h1>Mint NFT</h1></div>
  <div class="container">
    <div class="column">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        aliquid veniam libero explicabo saepe recusandae eligendi? Ducimus
        similique laboriosam iste maxime voluptatum perspiciatis suscipit
        sapiente quidem minus, nobis et tempore corrupti saepe repudiandae earum
        doloribus? Modi debitis corporis, qui illo voluptatem, temporibus
        cupiditate et quam quaerat dignissimos voluptatibus, eum adipisci?
      </p>
    </div>
    <div class="column image">
      <img
        src="https://staticg.sportskeeda.com/editor/2022/08/c5992-16616271792389-1920.jpg"
      />
      <div class="button">
        <button class="btn-primary">Mint Your NFT!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgb(45, 94, 57);
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

.image {
  display: grid;
  justify-content: center;
}

.heading {
  display: flex;
  justify-content: center;
}

p {
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
}
</style>
