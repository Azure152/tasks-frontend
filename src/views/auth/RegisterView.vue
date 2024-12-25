<script setup>
  import axios from "axios";
  import { ref } from "vue";
  import { useRouter } from "vue-router"

  const router = useRouter();
  const btn = ref(false);

  const form = ref({
    name: '',
    email: '',
    password: '',
  });

  const attemptRegister = async (e) => {
    btn.value = true;

    axios.post('register', form.value).then(res => {
      if (res.status == 200) {
        router.push("/login");
      } else {
        console.log(res.data.message);
      }
    }).catch(err => {
      console.log(err.response.data);
    });

    btn.value = false;
  };
</script>

<template>
  <div class="container" style="margin-top: 2em">
    <div class="title">
      <span>User register</span>
    </div>

    <form @submit.prevent="attemptRegister" autocomplete="off">
      <label style="display:block">
        <div style="display:inline-block;margin-bottom:0.5em"><span>name</span></div>
        <input type="text" name="name" placeholder="user name" class="input" v-model="form.name">
      </label>
      <label style="display:block;margin-top:1em">
        <div style="display:inline-block;margin-bottom:0.5em"><span>Email</span></div>
        <input type="email" name="email" placeholder="user email" class="input" v-model="form.email">
      </label>
      <label style="display:block;margin-top:1em">
        <div style="display:inline-block;margin-bottom:0.5em"><span>Password</span></div>
        <input type="password" name="password" placeholder="user password" class="input" v-model="form.password">
      </label>

      <div style="margin-top:2em">
        <button type="submit" class="button" :disabled="btn">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .title, .title > * {
    font-size: 1.5rem;
    font-weight: bold !important;
    margin-bottom: 0.5em;
  }

</style>
