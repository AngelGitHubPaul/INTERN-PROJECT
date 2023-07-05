<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="w-[100vw]">
    <Navigation />
    <RouterView />
    <Footer />
  </main>
</template>
