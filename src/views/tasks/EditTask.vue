<template>
  <AuthenticatedLayout>
    <div class="container" style="margin-top: 3em">
      <div class="title" style="margin-bottom: 1em; font-weight: bold">
        Edit task
      </div>
      <form @submit.prevent="updateTask">
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
  import { useRouter, useRoute } from "vue-router"

  const router = useRouter();
  const btnDisabled = ref(true);
  const errors = ref(null);
  const route = useRoute();
  const id = route.params.id;

  const form = ref({
    name: '',
    description: '',
  });

  const updateTask = () => {
    errors.value = null;
    btnDisabled.value = true;

    axios.patch(`api/tasks/${id}`, form.value)
      .then(() => router.push({ name: "tasks.list" }))
      .catch((err) => {
        if (err.response) {
          errors.value = err.response.data.errors;
        }
      })
      .finally(() => {
        btnDisabled.value = false;
      })
  };

  const fetchData = async () => {
    axios.get(`api/tasks/${id}`)
      .then((res) => form.value = res.data)
      .catch((err) => {
        if (err.status == 422) {
          errors.value = err.response.data.errors;
        } else {
          router.push(router.resolve({ name: "tasks.list" }));
        }
        console.log(err);
      })
      .finally(() => btnDisabled.value = false);
  };

  fetchData();

  onUpdated(() => {
    errors.value = null;
  });
</script>