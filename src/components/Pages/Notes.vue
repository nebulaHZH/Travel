<template>
    <div>
        <a-carousel arrows>
            <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
            </div>
            </template>
            <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
            </div>
            </template>
            <div>
                <img src="https://youimg1.tripcdn.com/target/fd/tg/g1/M04/5F/2C/CghzfFW4TKGAaaOlAAX9H1cljyU402_C_880_350_R5.jpg?proc=source%2ftrip" style="width: 100%;height: 100%;">
            </div>
            <div><img src="https://youimg1.tripcdn.com/target/100j0s000000i8kplE8EF_C_880_350_R5.jpg?proc=source%2ftrip" style="width: 100%;height: 100%;"></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
        </a-carousel>
        <div id="choose">
            <a-col style="margin-top: 20px;padding-top: 20px;">
                <a-space size="large">
                    <a-button class="btn" size="large" @click="getMessae('hot')">热门推荐</a-button>
                    <a-button class="btn" size="large" @click="getMessae('notes')">官方游记</a-button>
                    <a-button class="btn" size="large" @click="getMessae('record')">旅游记录</a-button>
                    <a-button class="btn" size="large" @click="getMessae('expirence')">景点攻略</a-button>
                    <a-button class="btn" size="large" @click="getMessae('like')">猜你喜欢</a-button>
                </a-space>
            </a-col>
            <div id="notes">
            <a-row v-for="item in items" v-model="items" >
                <div class="selection" @click="linkDetail(item.link)" style="text-align: left;border: solid rgb(0,0,0,0.01);height: max-content;" :id="item.id">
                    <img :src="item.imgsrc" style="border-radius: 35px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;margin-top: 10px;width: max-content;float: left;">
                        <span style="font-size: 20px;">{{ item.title }}</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img :src="item.writer.header">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">{{item.writer.name}}</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <a-textarea 
                            :defaultValue="item.cover"
                            style="resize:none;;color: gray;margin-left: -10px;"
                            :bordered="false"
                            placeholder="Borderless" />
                        </div>
                        <div>
                            <span  key="comment-basic-like">
                                <a-tooltip title="Like">
                                <template v-if="item.islike">
                                    <LikeFilled @click="like(item.id)" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like(item.id)" />
                                </template>
                                </a-tooltip>
                                <span style="padding-left: 8px;">
                                {{ item.likecount }}
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
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { LikeFilled,LikeOutlined } from '@ant-design/icons-vue';
import location from '../common/location'
import {getCurrentInstance, ref} from 'vue'
const internalInstance = getCurrentInstance()
console.log(location)
// 这里是点赞收藏评论数：

const like = (id: string) => {
    //先异步发送
    items.forEach(function (item,index){
        if(item.id===id){
            item.islike = !item.islike
            return 1
        }
    })
};


const items = [//这个数据接口写好要改
    {
        noteName:'哈夫曼树即最下生成树',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    },
    {
        noteName:'哈夫曼树即最下生成树',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    },
    {
        noteName:'哈夫曼树即最下生成树',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    },
    {
        noteName:'哈夫曼树即最下生成树',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    },
    {
        noteName:'哈夫曼树即最下生成树',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    }
]
const current=ref(1)
const getMessae=(flag:string)=>{
    // 这里点击按钮时发送请求传递参数flag
    if(internalInstance!==null){
        internalInstance.update()//每次操作数据后实时更新
    }
    
    console.log(items)
    console.log(flag)
}
const linkDetail=(link:string)=>{
    // 这里跳转到对应的详细界面
    window.open(link,'_blank')
}
</script>

<style scoped>
/* 这里是轮播图对应的css样式 */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 160px;

  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
/*  */
/* 选项的css */
#choose{
    margin-top: 40px;
    margin-left: 2.5%;
    width: 95%;
    height: max-content;

}
#notes{
    width: 90%;
    margin-left: 10%;
    margin-top: 50px;
    background-color: white;
}
.selection:hover{
    cursor: pointer;
    background-color: rgb(201, 201, 201);
    animation:fadenums 1s 1;
    border-radius: 20px;
}
@keyframes fadenums{
    0%{background: white};
    100%{opacity: rgb(203, 203, 203);}
}
.btn:hover{
    background-color: blueviolet;
    color: white;
}
</style>