<template>
  <div class="shadow" id="topbar"> 
      <div class="row">
          <div class="column column-50">
              <div class="logo">
                  <img src="../../assets/icon.png" alt="">
              </div>
          </div>
          <div class="column column-50 align-right">
              <router-link to="/game">Play</router-link>
              <router-link to="/about">Change</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style>
    @import "../../common/style/main.css";

    #topbar {
        background-color: #fff;
        padding: 20px;
        box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    } 

    .logo img {
        transition: all 0.3s;
        /* display: block; */
        transform: scale(1.7);
        width: 25px;
        margin-left: 5px;
    }

    a {
        display: inline-block;
        margin-left: 20px;
        color: #606c76;
    }

    a:hover,
    a:active,
    a.router-link-active{
        color: #ff8993
    }

</style>
