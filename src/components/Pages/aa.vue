<template>
    <div>
      <textarea name="" id="" cols="30" rows="10" type="text" v-model="content"></textarea>
    </div>
    <a-button @click="sa">sdsada</a-button>
    <p v-html="sss"></p>
  </template>
  
  <script setup lang="ts">
  import {computed,ref} from 'vue'
  import markdownIt from 'markdown-it'
  const content = ref('')
 
  const markdown = new markdownIt()
  let sss = computed(()=>{
    return markdown.render(content.value)
  })
 const sa = () =>{
    console.log(content.value)
    console.log(markdown.render(content.value))
    console.log(sss.value)
    
  
  }
 
  </script>
  
  <style scoped></style>