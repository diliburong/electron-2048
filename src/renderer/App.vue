<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Topbar from '@/components/Topbar/Topbar'
  export default {
    name: 'electron-project',
    components: {
      Topbar
    }
  }
</script>

<style>
  /* CSS */
</style>
