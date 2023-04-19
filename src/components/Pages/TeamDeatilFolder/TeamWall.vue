<template>
    <div>
        <vue-danmaku ref="danmaku" class="demo" v-model:danmus="danmus" isSuspend v-bind="config">
            <!-- 容器slot -->
            <div></div>
            <!-- 弹幕slot -->
            <template v-slot:dm="{ danmu, index }">
            <div class="danmu-item">
                <img class="img" :src="danmu.avatar" />
                <span>{{ index }}{{ danmu.name }}：</span>
                <span>{{ danmu.text }}</span>
            </div>
            </template>
        </vue-danmaku>
    
  </div>
</template>

<script setup lang="ts">
import vueDanmaku from 'vue3-danmaku'
import {ref,reactive} from 'vue'
import { danmus as danmusData, getDanmuData } from '../../../assets/danmu.js'
const danmus = ref<any[]>(getDanmuData())
const aa=()=>{
    console.log(danmus)
}
const config = reactive({
      channels: 5, // 轨道数量，为0则弹幕轨道数会撑满容器
      useSlot: true, // 是否开启slot
      loop: true, // 是否开启弹幕循环
      speeds: 100, // 弹幕速度，实际为弹幕滚动完一整屏的秒数，值越小速度越快
      fontSize: 20, // 文本模式下的字号
      top: 10, // 弹幕轨道间的垂直间距
      right: 0, // 同一轨道弹幕的水平间距
      debounce: 100, // 弹幕刷新频率（多少毫秒插入一条弹幕，建议不小于50）
      randomChannel: true, // 随机弹幕轨道
    })
</script>

<style scoped lang="scss">
.demo {
    border-radius: 30px;
    position: absolute;
    top: 60%;
    left: 5%;
    width: 90%;
    height: 50%;
    z-index: 99;
    
    background: linear-gradient(45deg, #79a589, #557ea8);
    .img{
       border-radius: 50%; 
    }
  }
</style>