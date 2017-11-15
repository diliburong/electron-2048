<template>
  <div class="container">


    <div class="row">
      <div class="column column-75 game">
        <div class="" id="stage">
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>       
            <div class="grid-cell"></div>    
            <div class="grid-cell"></div>
            <div class="grid-cell"></div> 
            <div class="grid-cell"></div> 
            <div class="grid-cell"></div>          
            <div class="grid-cell"></div> 
            <div class="grid-cell"></div>
            <div class="grid-cell"></div> 
            <div class="grid-cell"></div> 
            <div class="grid-cell"></div> 
            <div class="grid-cell"></div>
            <div class="grid-cell"></div> 

        </div>
      </div>


      <div class="column column-25 sider-wrapper">
        <div class="siderbar align-center align-items-center">
          <h2>123</h2>

        </div>

      </div>  
    </div>
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
      buttonPressed: function (key) {
        console.log(key)
      }
    },
    created () {
      window.addEventListener('keydown', (e) => {
        this.buttonPressed(e.keyCode)
      })
    }
  }
</script>

<style scoped>
    @import "../../common/style/main.css";
    #stage {
      position: relative;
      margin: 0 auto; 
      height: 520px;
      width: 520px;
      background: #bbada0;
      padding: 24px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: space-between;
    }
    .grid-cell {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      background-color: #ccc0b3;
      padding: 0;
    }
    
</style>
