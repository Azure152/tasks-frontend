
<template>
  <slot></slot>
</template>

<script setup>
  import { auth } from '@/utils/authenticated';
  import { onBeforeUpdate, onBeforeMount} from 'vue';

  onBeforeMount(() => auth());

  // import { useRouter } from 'vue-router';
  // import axios from 'axios';

  // const props = defineProps({
  //   reditectTo: String,
  // });

  // const router = useRouter();

  // axios.get('sanctum/csrf-cookie')
  //   .then(() => {
  //     axios.get('api/user')
  //       .catch(() => {
  //         router.push(props.reditectTo ?? {name: 'login'});
  //       });
  //   });
</script>