<template>
  <footer class="bg-gray-200 py-4">
    <div class="mx-auto flex justify-center items-center">
      <p class="text-gray-700">&copy; {{ currentYear }} Fruity NFT</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
