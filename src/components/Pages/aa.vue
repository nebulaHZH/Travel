<template>
    <div>
      {{ ss }}
      <a-button @click="a">aaa</a-button>
      <a-switch v-model:checked="ss"></a-switch>
    </div>
  </template>
  
  <script setup lang="ts">
  import {computed,ref, watch} from 'vue'
  const ss = ref(false)
  const a=()=>{
    ss.value = !ss.value
    console.log(ss.value)
  }
  watch(ss,(value,oldvalue)=>{
    ss.value = true
    console.log(ss)
  })
  </script>
  
  <style scoped></style>