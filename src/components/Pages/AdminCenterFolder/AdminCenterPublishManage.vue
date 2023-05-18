<template>
    <div style="padding: 10px;">
        <div class="Header" style="text-align: left;padding: 10px;border: solid;">
            <a-button >文章管理</a-button>
            <a-button style="margin-left: 20px;">视频管理</a-button>
            <a-input-search style="width: 400px;float: right;margin-right: 10%;" placeholder="输入您想查询的内容"></a-input-search>
        </div>
        <br>
        <div style="text-align:left;border: solid 0.01cm;border-radius: 10px;">
            <a-row v-for="item in article" ref="items" class="manager">
            <div style="text-align: left;; height: max-content;" :id="item.id">
                <!-- 编辑删除 -->
                <div style="float: right;margin-right: 10%;margin-top: 10px;margin-top: 20px;">
                    <a-button type="primary" size="small" style="margin: 5px;" @click="update(item.id)">编辑</a-button>
                    <a-button type="danger" size="small" style="margin: 5px;">删除</a-button>
                </div>
                <img :src="item.coverUrl" style="border-radius: 10px;width: 200px;height:150px;overflow: hidden;float: left;margin: 10px;">
                <div style="margin-left: 250px;width: max-content;float: left;margin-top: -150px;">
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
                    
                    <div style="margin-top: 5px;min-width: 800px;">
                        <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">{{ item.intro }}</pre>
                    </div>
                    <div style="margin-left: 30px;">
                        <span  key="comment-basic-like">
                            <LikeOutlined />
                            <span style="padding-left: 8px; cursor: auto">
                            {{ item.likeCount }}
                            </span>
                        </span>
                        <span>
                            <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                            <span style="margin-left: 10px;">{{ item.viewCount }}</span>
                        </span>
                    </div>
                </div>
            </div>
            </a-row>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;margin-left: 35%;" v-model:current="current" :total="50" show-less-items />
        </div>
    </div>
</template>

<script setup lang="ts">
import { LikeOutlined} from '@ant-design/icons-vue';
import {onMounted, ref} from 'vue'
import { articleQueryRequestById, articleQueryRequestByIdData} from '../../../api/atricle/travel';
import { useRouter } from 'vue-router';
const router = useRouter()
const current = ref(1)
const userId = ref(1) //改
const items = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    commentCount:200,
    id:'10103',
    islike:false}
]
const article = ref()
onMounted(() => {
    let a:articleQueryRequestByIdData={
        pageSize: 5,
        sortField: 'create_time',
        orderType: 0,
        userId: userId.value,
        currents:current.value
        }
    articleQueryRequestById(a).then((res)=>{
        article.value = res.data.data.records
        console.log(article.value)
    })
})
const update=(id:number)=>{
    router.push({
        path:'./AdminCenterPublish/Write',
        query:{
            id:id
        }
    })
}
</script>

<style scoped>
.manager:hover{
    background-color: rgb(224, 223, 223);
    cursor: pointer;
}   
</style>