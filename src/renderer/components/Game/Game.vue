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
          <number-cell v-bind:cell-number="board[0][0]">
          </number-cell>
          <number-cell v-bind:cell-number="board[0][1]">
          </number-cell>
          <number-cell v-bind:cell-number="board[0][2]">
            
          </number-cell>
          <number-cell v-bind:cell-number="board[0][3]"></number-cell>

          <number-cell v-bind:cell-number="board[1][0]"></number-cell>
          <number-cell v-bind:cell-number="board[1][1]"></number-cell>
          <number-cell v-bind:cell-number="board[1][2]"></number-cell>
          <number-cell v-bind:cell-number="board[1][3]"></number-cell>
 
          <number-cell v-bind:cell-number="board[2][0]"></number-cell>
          <number-cell v-bind:cell-number="board[2][1]"></number-cell>
          <number-cell v-bind:cell-number="board[2][2]"></number-cell>
          <number-cell v-bind:cell-number="board[2][3]"></number-cell>

          <number-cell v-bind:cell-number="board[3][0]"></number-cell>
          <number-cell v-bind:cell-number="board[3][1]"></number-cell>
          <number-cell v-bind:cell-number="board[3][2]"></number-cell>
          <number-cell v-bind:cell-number="board[3][3]"></number-cell>
        </div>
      </div>
      

      <div class="column column-25 sider-wrapper">
        <div class="siderbar align-center align-items-center">
          <h2>{{message}}</h2>
          <h3>{{board}}</h3>
          <button @click="abc()">333</button>
        </div>

      </div>  
    </div>
  </div>

</template>

<script>
  import NumberCell from '@/components/NumberCell/NumberCell'
  import { noSpace } from 'common/js/support.js'
  export default {
    data () {
      return {
        message: '123',
        board:
        [
          [0, 2, 16, 0],
          [0, 0, 0, 2],
          [4, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        row1: [0, 2, 16, 0]
      }
    },
    computed: {
      mainCount () {
        return this.$store.state.Counter.main
      }
    },
    name: 'Game',
    components: {
      NumberCell
    },
    methods: {
      init: function () {},
      abc: function () {
        var randNumber = Math.random() < 0.5 ? 4 : 8
        this.$set(this.board[0], 1, randNumber)
        // this.board[0][1] = randNumber
        // this.board = [[0, randNumber, 16, 0], [0, 0, 0, 2], [4, 0, 0, 0], [0, 0, 0, 0]]
      },
      bbb: function () {
        this.board[0][3] = 2
      },
      buttonPressed: function (key) {
        var evt = window.event
        console.log(evt.keyCode)
        switch (evt.keyCode) {
          case 37:
            this.abc()
            break
          case 38:// up
            this.bbb()
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
      console.log(noSpace(this.board))
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

</style>
