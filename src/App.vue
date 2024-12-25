<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  // import HelloWorld from './components/HelloWorld.vue';
  // import HelloWorld from './components/HelloWorld.vue';
  import Navegation from './components/Navegation.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <nav>
    <div style="padding:1em 2em; display:flex; gap:0.7em">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/logout">logout</RouterLink>
    </div>
  </nav> -->
  <!-- <HelloWorld /> -->
  <Navegation />
  <RouterView />
</template>

<style scoped>

</style>
