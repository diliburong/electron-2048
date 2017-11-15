<template>
  <div id="app">
    <topbar></topbar>
    <main>
      <router-view></router-view>
    </main>
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
  main {
    padding: 30px 30px 30px 30px;
  }
</style>
