import axios from 'axios';
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';

export const auth = (redirectTo) => {
  const instance = getCurrentInstance();

  if (instance) {
    const router = useRouter();
    axios.get('api/user')
      .catch(() => {
        router.push(redirectTo ?? {name: 'login'});
      });
  }
};