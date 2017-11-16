<template>
  <div>
     <button  ref="test" class="button button-outline">Outlined Button</button>
  </div>
</template>
<script>
import snabbt from 'snabbt.js'
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
        easing: 'ease'
      })
    },
    greet: function (event) {
      alert('hellp' + this.name)
    }
  },
  created () {
    window.addEventListener('keydown', (e) => {
      this.changeAnimation(this.$refs.test)
    })
  }
}
</script>
  

<style>

</style>
