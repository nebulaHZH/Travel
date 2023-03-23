<script setup lang="ts">
import Home from "./components/Home.vue"
import './assets/css/reset.css'
import './assets/css/global.css'
</script>

<template>
  <div class="App">
    <div class="home">  
      <Home ></Home>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
body,html{
  margin: 0;
  width: 40;
  height: 100%;
  padding: 0;
}
</style>
