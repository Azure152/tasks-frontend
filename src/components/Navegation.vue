<template>
  <div style="width:100%; box-shadow: 0px 2px 4px #8884">
    <nav>
      <div style="padding:1em 2em; display:flex; gap:1em">
        <div style="display:flex; gap:1em">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :to="{ name: 'tasks.list' }">Tasks</RouterLink>
        </div>
        <div style="display:flex; gap:1em; margin-left: auto">
          <RouterLink :to="{ name: 'login' }">Login</RouterLink>
          <RouterLink :to="{ name: 'register' }">Register</RouterLink>
          <RouterLink :to="{ name: 'logout' }">Logout</RouterLink>
        </div>
        <!-- <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/logout">logout</RouterLink> -->
      </div>
    </nav>
  </div>
</template>

<script setup>
  
</script>

<style scoped>
</style>