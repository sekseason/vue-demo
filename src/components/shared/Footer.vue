<template>
  <footer class="footer">
    <div class="container">
      <p class="text-center">
        ©{{ year }} {{name}}
      </p>
    </div>
  </footer>
</template>

<script>
  import { config } from '@/config';
  export default {
    name: 'app-footer',
    data() {
      return {
        year: (new Date().getFullYear()),
        name: config.name
      }
    }
  }
</script>
