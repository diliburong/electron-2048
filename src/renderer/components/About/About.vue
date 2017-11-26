<template>
  <div>
     <button v-on:click="changeA" ref="test" class="button button-outline">Outlined Button</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'vue'
    }
  },
  methods: {
    greet: function (event) {
      console.log(event)
    }
  }
}
</script>
  

<style>

</style>
