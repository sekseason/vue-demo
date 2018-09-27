import { config } from '@/config';
import alertify from 'alertifyjs';

const initState = () => ({
  isAuthenticated: false,
  token: null,
  user: null
});

const auth = {
  state: initState,
  mutations: {
    SET_AUTHEN(state) {
      let storage = window.localStorage.getItem(config.storageKey);

      if (storage) {
        storage = JSON.parse(storage);
      }

      state.isAuthenticated = !!storage.token || false;
      state.token = storage.token;
      state.user = storage.user;
    }
  },
  actions: {
    authCheck({ commit }) {
      let storage = window.localStorage.getItem(config.storageKey);

      if (storage) {
        storage = JSON.parse(storage);
      }

      if (storage && storage.token) {
        commit('SET_AUTHEN');
      }
    },
    async authLogin({ commit }, data) {
      return await new Promise((resolve) => {
        setTimeout(() => {
          let state = null;

          if (data.username === 'admin' && data.password === 'password') {
            state = {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMzNywidXNlcm5hbWUiOiJqb2huLmRvZSJ9.EvTdOJS-fbffGHLyND3BMDwWE22zUBOCRspPZEHlNEw',
              user: {
                id: 1,
                username: 'admin',
                email: 'admin@example.com',
                roles: ['admin', 'user']
              }
            }
          }

          resolve(state);
        }, 1000);
      })
        .then(data => {
          if (data) {
            window.localStorage.setItem(config.storageKey, JSON.stringify(data));
            commit('SET_AUTHEN');
            alertify.notify(';-) Welcome to ' + config.name, 'success', 5);

            return true;
          } else {
            alertify.alert(';-( Something went wrong.', 'Invalid username or password');

            return false;
          }
        })
        .catch(error => {
          throw error;
        });
    },
    authLogout({ commit }) {
      window.localStorage.setItem(config.storageKey, JSON.stringify(initState()));
      commit('SET_AUTHEN');
      alertify.notify(';-) Have a nice day.', 'success', 5);

      return true;
    }
  },
  getters: {
    isAuthenticated: state => { return state.isAuthenticated },
    token: state => { return state.token },
    user: state => { return state.user },
  }
};

export default auth;