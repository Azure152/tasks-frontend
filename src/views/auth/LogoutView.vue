<script setup>
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  axios.post('logout')
    .then((res) => {
      router.push('/login');
    })
    .catch((err) => {
      if (err.status == 401) {
        router.push('login');
      } 
    })
</script>


<template>
  <div class="container">
    <span class="title">Signing out...</span>
  </div>
</template>

<style scoped>
  .title {
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
