<template>
  <div class="container">


    <div class="row">
      <div class="column column-75 game">

        <div class="" id="stage">
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div>       
            <div class="grid-cell">
            </div>    
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div> 
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div>      
            <div class="grid-cell">
            </div> 
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div> 
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div> 
            <div class="grid-cell">
            </div>
            <div class="grid-cell">
            </div>
        </div>
        <div class="" id="number-stage">
          <div class="number-cell"><div v-if="board[0][0] != 0">{{board[0][0]}}</div></div>
          <div class="number-cell" id="cell2">
            <div v-if="board[0][1] != 0">{{board[0][1]}}</div>
          </div>
          <div class="number-cell">
            <div v-if="board[0][2] != 0">{{board[0][2]}}</div>
          </div>
          <div class="number-cell">
            <div v-if="board[0][3] != 0">{{board[0][3]}}</div>
          </div>

          <div class="number-cell"></div>
          <div class="number-cell"></div>
          <div class="number-cell"></div>
          <div class="number-cell"></div>

          <div class="number-cell"></div>
          <div class="number-cell"></div>
          <div class="number-cell"></div>
          <div class="number-cell"></div>

          <div class="number-cell"></div>
          <div class="number-cell"></div>
          <div class="number-cell"></div>
          <div class="number-cell"></div>
        </div>

      </div>


      <div class="column column-25 sider-wrapper">
        <div class="siderbar align-center align-items-center">
          <h2>33</h2>

        </div>

      </div>  
    </div>
  </div>

</template>

<script>
  import { noSpace } from './support.js'
  export default {
    data () {
      return {
        board:
        [
          [0, 2, 4, 0],
          [0, 0, 0, 2],
          [4, 0, 0, 0],
          [0, 0, 0, 0]
        ]
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
      init: function () {},
      buttonPressed: function (key) {
        var evt = window.event
        console.log(evt.keyCode)
        switch (key) {
          case 37:// left
            console.log('left')
            break
          case 38:// up
            console.log('up')
            break
          case 39:// right
            console.log('right')
            break
          case 40:
            console.log('down')
            break
          default:
            break
        }
      }
    },
    created () {
      noSpace(this.board)
    },
    activated () {
      window.addEventListener('keydown', this.buttonPressed, false)
    },
    deactivated () {
      window.removeEventListener('keydown', this.buttonPressed, false)
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
      border-radius: 10px;
    }
    #number-stage {
      height: 520px;
      width: 520px;
      padding: 24px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: space-between;
      position: absolute;
      top: 0;
    }

    .grid-cell {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      background-color: #ccc0b3;
      padding: 0;
    }

    .number-cell {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 6px;
      font-size: 60px;
      text-align: center;
      line-height: 100px;
      font-family: Arial;
      font-weight: bold;
    }
    
</style>
