<template>
    <div style="text-align:left;margin-left: 10%;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 0%;border-radius:10px">
                <a-row v-for="item in items" ref="items">
                <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 10px;" :id="item.id">
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 380px;width: max-content;float: left;margin-top: -200px;">
                        <span style="font-size: 20px;">巴厘岛 | 总有一个假日，要属于bali</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                            </div>
                        </div>
                        
                        <div style=";margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;">
                            <span  key="comment-basic-like">
                                <a-tooltip title="Like">
                                <template v-if="item.islike">
                                    <LikeFilled @click="like(item.id)" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like(item.id)" />
                                </template>
                                </a-tooltip>
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
                                <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                </a-row>
            </div>
            </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { LikeFilled,LikeOutlined } from '@ant-design/icons-vue';
const like = (id: string) => {
        //先异步发送
        items.forEach(function (item,index){
            if(item.id===id){
                item.islike = !item.islike
                return 1
            }
        })
    };
// 这里是我的游记部分
const items = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    id:'10101',
    islike:true},

    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
]
</script>

<style scoped>

</style>