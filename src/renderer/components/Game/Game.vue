<template>
    <div>
        <h1>45999</h1>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    computed: {
      mainCount () {
        return this.$store.state.Counter.main
      }
    },
    name: 'landing-page',
    components: { },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      increment: function () {
        this.$store.commit('DECREMENT_MAIN_COUNTER')
        this.count += 1
      }
    },
    created () {
      console.log('123')
      window.addEventListener('keydown', (e) => {
        console.log(e.keyCode)
      })
    }
  }
</script>

<style scoped>
    @import "../../common/style/main.css"

</style>
