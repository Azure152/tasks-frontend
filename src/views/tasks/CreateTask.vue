<template>
  <AuthenticatedLayout>
    <div class="container" style="margin-top: 3em">
      <div class="title" style="margin-bottom: 1em; font-weight: bold">
        Create task
      </div>
      <form @submit.prevent="storeTask">
        <label style="display:block">
          <div style="display:inline-block;margin-bottom:0.5em"><span>Name</span></div>
          <input type="text" name="name" placeholder="task name" class="input" v-model="form.name">
          <ul v-if="errors && errors.name" class="input-errors">
            <li v-for="msg in errors.name">* {{ msg }}</li>
          </ul>
        </label>
        <label style="display:block;margin-top:1em">
          <div style="display:inline-block;margin-bottom:0.5em"><span>Description</span></div>
          <textarea rows="3" name="description" class="input" placeholder="Task description" v-model="form.description"></textarea>
          <ul v-if="errors && errors.description" class="input-errors">
            <li v-for="msg in errors.description">* {{ msg }}</li>
          </ul>
        </label>

        <div style="margin-top:2em">
          <button type="submit" class="button" style="width: 100%" :disabled="btnDisabled">Create</button>
        </div>
      </form>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
  import AuthenticatedLayout from '@/views/Layouts/AuthenticatedLayout.vue';
  import axios from 'axios';
  import { ref, onUpdated } from 'vue';
  import { useRouter } from "vue-router"

  const router = useRouter();
  const btnDisabled = ref(false);
  const errors = ref(null);
  
  const form = ref({
    name: '',
    description: '',
  });

  const storeTask = () => {
    errors.value = null;
    btnDisabled.value = true;

    axios.post('api/tasks', form.value)
      .then(() => router.push({ name: "tasks.list" }))
      .catch((err) => {
        if (err.response) {
          errors.value = err.response.data.errors;
        }
      }).finally(() => {
        btnDisabled.value = false;
      })
  };

  onUpdated(() => {
    errors.value = null;
  });
</script>