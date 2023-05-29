<script setup>
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <Navigation />
    <RouterView />
  </main>
</template>
