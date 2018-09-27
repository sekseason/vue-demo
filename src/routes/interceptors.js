import store from '@/store';

export default Vue => {
  Vue.http.interceptors.push((request, next) => {
    let token = store.getters.token;

    if (token) {
      request.headers.set('Authorization', 'Bearer ' + token);
    }

    next();
  })
};
