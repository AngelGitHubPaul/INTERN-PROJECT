<script>

import Navigation from './components/Navigation.vue';

export default {
    name: 'App',
    components: { Navigation }
};

 
</script>

<template>
  <main>
    <Navigation/>
    <router-view></router-view>
    <header>
      
    </header>
    <TheWelcome />
  </main>
</template>