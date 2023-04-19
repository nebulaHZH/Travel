<template>
    <div style="text-align:left;border: solid 0.01cm;border-radius: 10px;">
            <a-row v-for="item in items" ref="items" class="manager">
            <div style="text-align: left;; height: max-content;" :id="item.id">
                <!-- 编辑删除 -->
                <div style="float: right;margin-right: 10%;margin-top: 10px;margin-top: 20px;">
                    <a-button type="primary" size="small" style="margin: 5px;">编辑</a-button>
                    <a-button type="danger" size="small" style="margin: 5px;">删除</a-button>
                </div>
                <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 200px;height:150px;overflow: hidden;float: left;margin: 10px;">
                <div style="margin-left: 250px;width: max-content;float: left;margin-top: -150px;">
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
                    
                    <div style="margin-top: 5px;min-width: 800px;">
                        <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                    </div>
                    <div style="margin-left: 78%;">
                        <span>
                            <span>价格:  </span>
                            <span>999元</span>
                        </span>
                        <span>
                            <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                            <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                        </span>
                    </div>
                </div>
            </div>
            </a-row>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;margin-left: 35%;" v-model:current="current" :total="50" show-less-items />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const current = ref(1)
const items = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    commentCount:200,
    id:'10103',
    islike:false},
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