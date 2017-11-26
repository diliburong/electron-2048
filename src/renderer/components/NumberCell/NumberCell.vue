<template>
    <div class="number-cell">
        <div v-if="cellNumber != 0" class="cell" v-bind:style="styleObject">{{cellNumber}}</div>
    </div>
</template>

<script>
import { getNumberBackgroundColor, getNumberColor } from 'common/js/support.js'
export default {
  props: ['cellNumber'],
  data: function () {
    return {
      abc: this.cellNumber
    }
  },
  computed: {
    styleObject: function () {
      return {
        background: getNumberBackgroundColor(this.cellNumber),
        color: getNumberColor(this.cellNumber)
      }
    }
  }
}
</script>


<style scoped>
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

.cell {
  width: 100%;
  -webkit-transition: marginLeft 0.5s, background 0.5s;
}
</style>
