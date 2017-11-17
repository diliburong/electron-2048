<template>
  <div id="app">
    <topbar></topbar>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
