<template>
  <div>
     <button v-on:click="changeA" ref="test" class="button button-outline">Outlined Button</button>
  </div>
</template>
<script>
import snabbt from 'snabbt.js'
import move from 'move-js'
export default {
  data () {
    return {
      name: 'vue'
    }
  },
  methods: {
    changeAnimation: function (event) {
      snabbt(event, {
        position: [100, 0, 0],
        easing: 'easeIn'
      })
    },
    greet: function (event) {
      console.log(event)
    },
    changeA: function (event) {
      move(event)
        .set('margin-left', 200)
        .end()
    }
  }
}
</script>
  

<style>

</style>
