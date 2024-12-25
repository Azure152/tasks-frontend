<script setup>
  import axios from "axios";
  import { ref } from "vue";
  import { useRouter } from "vue-router"

  const router = useRouter();
  const btnDisabled = ref(false);
  const errors = ref(null);

  const form = ref({
    email: '',
    password: '',
  });

  const attemptLogin = async (e) => {
    btnDisabled.value = true;

    await axios.get('sanctum/csrf-cookie');

    axios.post('/login', form.value)
      .then(res => {
        router.push('/');
      })
      .catch(err => {
        if (err.response) {
          if (err.status == 422) {
            errors.value = err.response.data.errors;
          } else {
            router.back();
          }
        } else {
          console.log(err);
        }
      });

    btnDisabled.value = false;
  };
</script>

<template>
  <div class="container" style="margin-top: 2em">
    <div class="title">
      <span>Login</span>
    </div>

    <form @submit.prevent="attemptLogin">
      <label style="display:block">
        <div style="display:inline-block;margin-bottom:0.5em"><span>Email</span></div>
        <input type="email" name="email" placeholder="user email" class="input" v-model="form.email">
        <ul v-if="errors && errors.email" class="input-errors">
          <li v-for="msg in errors.email">* {{ msg }}</li>
        </ul>
      </label>
      <label style="display:block;margin-top:1em">
        <div style="display:inline-block;margin-bottom:0.5em"><span>Password</span></div>
        <input type="password" name="password" placeholder="user password" class="input" v-model="form.password">
        <ul v-if="errors && errors.password" class="input-errors">
          <li v-for="msg in errors.password">* {{ msg }}</li>
        </ul>
      </label>

      <div style="margin-top:2em">
        <button type="submit" class="button" :disabled="btnDisabled">Login</button>
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
