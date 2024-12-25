<template>
  <AuthenticatedLayout>
    <div class="title" style="padding: 2rem; padding-bottom: unset;">
      Tasks List
    </div>

    <div v-if="items">
      <div style="padding: 2rem; margin-top: 1rem">
        <div class="tasks-items-wrapper" v-if="items.length != 0">
          <div style="grid-column: span 2; margin-bottom: 1rem">
            <a
              :set="route = $router.resolve({ name:'tasks.create' })"
              :href="route.href"
              @click.prevent="$router.push(route.href)"
              class="button"
              style="display: block; width: 100%"
            >Create a new task +</a>
          </div>
          <div class="container task-item" v-for="item in items">
            <div class="text-ellipsis task-item-text">
              {{ item.name }}
            </div>
            <div class="task-item-actions">
              <button @click.prevent="editTask(item.id)" class="button">Edit</button>
              <button @click.prevent="deleteTask(item.id)" :disabled="disabledButtons" class="button button-danger">Delete</button>
            </div>
          </div>
        </div>
        <div style="text-align: center;" v-else>
          <span style="font-size: 1.3rem; font-style: italic">No tasks found</span>
          <div class="grid-span: 2">
            <RouterLink :to="{ name: 'tasks.create' }">
              <span style="text-decoration: underlin">Create one here!</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center; font-size: 1.3rem; font-style: italic" v-else>
      <span>Loading...</span>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
  import AuthenticatedLayout from '@/views/Layouts/AuthenticatedLayout.vue';
  import axios from 'axios';
  import { ref, onUpdated } from 'vue';
  import { useRouter } from 'vue-router';

  const items = ref(null);
  const disabledButtons = ref(false);
  const router = useRouter();

  const deleteTask = (id) => {
    disabledButtons.value = true;

    axios.delete(`api/tasks/${id}`)
      .then(async () => await fetchTasks())
      .catch((err) => console.log(err))
      .finally(() => disabledButtons.value = false);
  };

  const editTask = (id) => {
    disabledButtons.value = true;
    router.push(router.resolve({ name: 'tasks.edit', params: { id: id } }));
  };

  const fetchTasks = async () => {
    await axios.get('api/tasks')
      .then(res => items.value = res.data);
  };

  fetchTasks();
</script>