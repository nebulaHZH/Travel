<template>
    <div>
        <br>
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
        <br>
        <div class="SendMessage" style="width: 80%;margin-left: 10%;margin-top: 40px;">
            <a-textarea id="contents" class="ContentArea" name=""  cols="30" rows="3" style="height: 50px;overflow-y: auto;" v-model:value="content"></a-textarea>
            <br>
            <div>
                <a-button type="primary" style="float: right;margin-top: 20px;margin-left: 10px;" @click="sendWall">biu~</a-button>
                <br>
                <br>
            </div>
        </div>
        <br>
        <br>
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
const content = ref('')
const sendWall = ()=>{
    danmus.value.push({
      avatar:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIADIAMgMBIgACEQEDEQH/xAAxAAACAgMBAAAAAAAAAAAAAAAABgQFAQIHAwEBAAMBAAAAAAAAAAAAAAAAAwABAgT/2gAMAwEAAhADEAAAAI7CsPnN1VeZ0okpTbSWASKzwmMPRy3PuuWhpv4KvQ7pcJYTUb+hdLQYWJoaVU+RU3jcXiaoegAhWOAPeeaBd1wGtf/EAC4QAAIBAwIEBAUFAQAAAAAAAAECAwAEEQUhBhASMRMiQWEUI3KBoSAzQlFSkv/aAAgBAQABPwDTxidHHbdTyZGjdkcYYelBGKM4HlUgH7/osXInRfQsK0q18abxGHkj/JrV0KXrEfzUGtLiE0F1G48r4GfcVJDJFI0TbMp52W91D9VXt42mWQCu0QUqHZQC7SyDIRA22QO5NXkFyLeFpnWRggYsMZw/+ioAPsRVlOtrpsshx+6d2OFGw3J/oVK897YR6nbfORCTkp0OVQ7lRk5Aq5gMZSVR8qVepfbPpy0jDSRyEZxIg/6JrjKJytlEEJ63uJD7ttXB6Tn41bhW8Mwxxjqzt3OBWrx+Bw9fQsRvIgBzjYutcP3F8upWVmZZltvjFPQW22BqeAJpHh+kWyeyhsL+KXS9RcB1WLpYZGSc4NcKwxTrcRy+qrj2IJIqe3S5AEsSOAcgMobB+9Lb9KhVAAHYCntRIjI6hkYYZWGQRUGm2ltMssVsiSKCAVGMZqWFZ4fDY4XYn7ULaEgF182N/Me9cIuI3kY9gFodLAEHINFgKDKdqwK1LVotOMSsnWz5JAPYUeJZyTiKMVwv2n+la08npcZOBjke3LVWZtRuizE4kI5f/8QAIBEBAAIBAgcAAAAAAAAAAAAAAQARAwIQEiAhMTJBcf/aAAgBAgEBPwDL5HzkadfX0RDjmTSUJtks1MqWpVypk7uxt//EACARAQABAwMFAAAAAAAAAAAAAAEAAhEhAxATEiIxYXH/2gAIAQMBAT8A0m1L9l+2++Sg9sF45p1N7M6iUJYwM5GYW4ZmZT4Njb//2Q==',
      name: '柚子',
      text: content.value
    })
    console.log(content.value)
    console.log(danmus.value)
}
</script>

<style scoped lang="scss">
.demo {
    border-radius: 30px;
    top: 60%;
    left: 5%;
    width: 90%;
    height: 500px;
    z-index: 99;
    
    background: linear-gradient(45deg, #79a589, #557ea8);
    .img{
       border-radius: 50%; 
    }
  }
</style>