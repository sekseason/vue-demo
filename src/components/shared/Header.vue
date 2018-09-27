<template>
  <header>
    <div class="container">
      <div class="text-right mt-4">
        <ul class="list-inline mb-2">
          <li class="list-inline-item">
            <i class="far fa-user-circle"></i>
            {{user && user.username | capitalize}}
          </li>
          <li class="list-inline-item list-divider"></li>
          <li class="list-inline-item">
            <b-link @click="logout">
              Log out
              <i class="fas fa-sign-out-alt"></i>
            </b-link>
          </li>
        </ul>
      </div>

      <b-nav tabs>
        <b-nav-item to="/" exact>
          <i class="fas fa-layer-group"></i>
          Provider Management
        </b-nav-item>
        <b-nav-item to="/product">
          <i class="fas fa-box-open"></i>
          Product Lab Management
        </b-nav-item>
        <b-nav-item to="/settings">
          <i class="fas fa-cogs"></i>
          Settings
        </b-nav-item>
      </b-nav>
    </div>
  </header>
</template>

<script>
  import store from '@/store';
  import alertify from 'alertifyjs';

  export default {
    name: 'app-header',
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      logout() {
        alertify.confirm('Log out', 'Are you logging out?', () => {
          store.dispatch('authLogout')
            .then(() => {
              this.$router.push('/auth/login');
            });
        }, null);
      }
    }
  }
</script>
