<template>
    <div style="text-align:left;border: solid 0.01cm;border-radius: 10px;height: 620px;">
            <a-row v-for="item in messages"  class="manager">
            <div style="text-align: left;; height: max-content;" :id="item.id" class="notices" @click="toNotice(item.id)">
                <img :src="item.coverUrl" style="border-radius: 10px;width: 200px;height:150px;overflow: hidden;float: left;margin: 10px;">
                <div style="margin-left: 250px;width: max-content;float: left;margin-top: -150px;">
                    <span style="font-size: 20px;">{{ item.title }}</span>
                    <br>
                    <br>
                    <br>
                    <div style="margin-top: 5px;min-width: 800px;">
                        <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">{{ item.intro }}</pre>
                    </div>
                    <div style="margin-left: 85%;">
                        <span>
                            <img style="width: 20px;height: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                            <span style="margin-left: 10px;">{{ item.viewCount }}</span>
                        </span>
                    </div>
                </div>
            </div>
            </a-row>
            <a-pagination style="position: fixed;margin-top:220px;padding-bottom: 20px;margin-left: 25%;" v-model:current="current" :total="50" show-less-items />
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { officialGetNoticeList, officialGetNoticeListData } from '../../../../api/official/officialNotification'
import { useRouter } from 'vue-router'
const current = ref(1)
const messages = ref()
const router = useRouter()
onMounted(() => {
    let data:officialGetNoticeListData={
        
    }
    officialGetNoticeList(data).then((res)=>{
        console.log(res.data.data)
        messages.value = res.data.data.records

    })
})
const toNotice=(id:number)=>{
    router.push({
        path:'/ScenicContent',
        query:{
            Nid:id
        }
    })
}
</script>

<style scoped lang="scss">
.notices:hover{
    background-color: rgb(236, 236, 236);
    cursor: pointer;
}
</style>