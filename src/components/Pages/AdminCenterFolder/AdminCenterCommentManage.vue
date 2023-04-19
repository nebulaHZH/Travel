<template>
    <div style="padding: 10px;">
        <div class="Header" style="text-align: left;padding: 10px;border: solid;">
            <a-button >视频评论</a-button>
            <a-button style="margin-left: 20px;">文章评论</a-button>
            <a-button style="margin-left: 20px;">个人评论</a-button>
            <a-input-search style="width: 400px;float: right;margin-right: 10%;" placeholder="输入您想查询的内容"></a-input-search>
        </div>
        <div>
            <div v-for="item in message" style="text-align: left;font-weight: 550;font-size: 17px;border-bottom: solid 0.01cm;;">
                <br>
                <img :src="item.header" alt="" style="width: 80px;height: 80px;border-radius: 50%;border: solid 0.05cm;">
                <div style="margin-left: 100px;margin-top: -60px;">
                    <a :href="item.username.tourl" target="_blank" style="margin-left: 10px;">{{ item.username.name }}</a>
                    <a style="color: blue;margin-left: 20px;">回复：</a>
                    <a :href="item.reply.tourl" target="_blank" style="margin-left: 20px;">{{ item.reply.name }}</a>
                    <br>
                    <span :href="item.notename.tourl" target="_blank">《 {{ item.notename.name }} 》</span>
                </div>
                <div style="margin-left: 100px;margin-top: 10px;min-width: 300px;width: 700px;">
                    <pre style="white-space: pre-wrap;word-wrap: break-word;text-align: left;font-weight: 800;">{{ item.content }}</pre>
                </div>
                <div style="margin-left: 120px;" >
                    <span>{{ item.time }}</span>
                    <a-button class="btn" @click="del" style="margin-left: 10px;">删除</a-button>
                    <a-button class="btn" @click="jubao">举报</a-button>
                    <div style="float:right;margin-right: 100px;">
                        <span>回复数：</span>
                        <span>{{ item.replycount }}</span>
                        <span style="margin-left: 80px;">点赞数：</span>
                        <span>{{ item.likecount }}</span>
                    </div>
                </div>
                <br>
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const message=[
    {
        header:'https://p1-q.mafengwo.net/s10/M00/73/96/wKgBZ1kSsyKAa_91AACgQYkA64o659.png?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        username:{
           name: '游记总编辑',
           tourl:''
        },
        reply:{
           name: '帅气的hhz',
           tourl:''
        },
        notename:{
            name:'关于xx的讨论',
            tourl:''
        },
        content:'我觉得你说的不对',
        time:'2023.4.5',
        replycount:2000,
        likecount:100

    },
    {
        header:'https://p1-q.mafengwo.net/s10/M00/73/96/wKgBZ1kSsyKAa_91AACgQYkA64o659.png?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        username:{
           name: '游记总编辑',
           tourl:''
        },
        reply:{
           name: '帅气的hhz',
           tourl:''
        },
        notename:{
            name:'关于xx的讨论',
            tourl:''
        },
        content:'我觉得你说的不对',
        time:'2023.4.5',
        replycount:2000,
        likecount:100

    },
    {
        header:'https://p1-q.mafengwo.net/s10/M00/73/96/wKgBZ1kSsyKAa_91AACgQYkA64o659.png?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        username:{
           name: '游记总编辑',
           tourl:''
        },
        reply:{
           name: '帅气的hhz',
           tourl:''
        },
        notename:{
            name:'关于xx的讨论',
            tourl:''
        },
        content:'我觉得你说的不对',
        time:'2023.4.5',
        replycount:2000,
        likecount:100

    }
]
const current = ref(1)
const del=()=>{
    // 删除操作
}
const jubao=()=>{
    // 举报操作
}
</script>

<style scoped>
.btn:hover{
    background-color: blueviolet;
    color: white;
}
</style>