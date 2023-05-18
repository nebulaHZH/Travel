<template>
    <div style="text-align:left;margin-left: 10%;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 0%;border-radius:10px">
                <a-row v-for="item in items" style="padding: 10px;">
                <div @click="toNote(item.id)" class="toTeamNotes" style="text-align: left; height: max-content;margin-top: 10px;" :id="item.id">
                    <img :src="item?.coverUrl" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 380px;width: max-content;float: left;margin-top: -200px;">
                        <span style="font-size: 20px;">{{ item?.title }}</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img :src="item.userAvatar" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">{{ item.userName }}</span>
                            </div>
                        </div>
                        
                        <div style=";margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">{{ item.intro }}</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;">
                            <span  key="comment-basic-like">
                                <LikeOutlined />
                                <span style="padding-left: 8px; cursor: auto">
                                {{ item.likeCount }}
                                </span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                <span style="margin-left: 10px;">{{ item.commentCount }}</span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                <span style="margin-left: 10px;">{{ item.viewCount }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                </a-row>
            </div>
            </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { LikeOutlined } from '@ant-design/icons-vue';
import { articleQueryRequestByTeamId, articleQueryRequestByTeamIdData } from '../../../api/atricle/travel';
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(()=>{
    let data:articleQueryRequestByTeamIdData={
        current: 0,
        sortOrder:'create_time',
        teamId: 6 // 改
    }
    articleQueryRequestByTeamId(data).then((res)=>{
        console.log(res.data.data.records)
        items.value=res.data.data.records

    })
})
const toNote=(id:number)=>{
    router.push({
        path:'/NotesDetail',
        query:{
            id:id
        }
    })
}
// 这里是我的游记部分
const items = ref()
</script>

<style scoped lang="scss">
.toTeamNotes:hover{
    background-color: rgb(232, 235, 235);
    cursor: pointer;
}
</style>