<script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRouter } from "vue-router"

  const router = useRouter();
  const user = ref(null);

  const fetchUser = () => {
    axios.get('api/user')
      .then((res) => user.value = res.data)
      .catch((err) => {
        if (err.response) {
          if (err.status == 401)  {
            router.push('/login');
          } else {
            console.log(err.response.data);
          }
        } else {
          user.value = false;
        }
        return;
      });
  };

  onMounted(() => {
    fetchUser();
  });
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="container" style="margin-top:2em">
      <div v-if="user">
        <span class="title">Welcome {{ user.name }}</span>
        <div><span>{{ user.email }}</span></div>
      </div>
      <div v-else>
        <span v-if="user != false">Waiting for information...</span>
        <span v-else>API server error</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .title {
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
