<template>
  <div class="main-layout">
    <app-header />

    <div class="content">
      <router-view />
    </div>

    <app-footer />
  </div>
</template>

<script>
  import { config } from '@/config';

  import AppHeader from '@/components/shared/Header.vue'
  import AppFooter from '@/components/shared/Footer.vue'

  export default {
    name: 'main-layout',
    components: {
      AppHeader,
      AppFooter
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        document.title = config.name;
        document.body.className = '';
      }
    }
  }
</script>
