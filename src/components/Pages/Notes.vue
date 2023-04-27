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
                <img src="https://p1-q.mafengwo.net/s19/M00/AA/40/CoNKtmRGbaQiPTK8AC21c2sPcj8.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" style="width: 100%;height: 100%;">
            </div>
            <div><img src="https://p1-q.mafengwo.net/s19/M00/0D/6E/CoNELmRFCl0sAdV5AB4sGjCNdl0.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" style="width: 100%;height: 100%;"></div>
            <div><img src="https://p1-q.mafengwo.net/s19/M00/A7/1C/CoNJZGRGeYUOLdpcACtWUwQ8lZY.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
        </a-carousel>
        <div id="choose">
            <a-col style="margin-top: 20px;padding-top: 20px;">
                <a-space size="large">
                    <a-button class="btn" size="large" @click="getMessae('hot')">热门推荐</a-button>
                    <a-button class="btn" size="large" @click="getMessae('notes')">官方游记</a-button>
                    <a-button class="btn" size="large" @click="getMessae('record')">最新发布</a-button>
                    <a-button class="btn" size="large" @click="getMessae('expirence')">景点攻略</a-button>
                    <a-button class="btn" size="large" @click="getMessae('like')">猜你喜欢</a-button>
                </a-space>
            </a-col>
            <div id="notes">
            <a-row v-for="item in travel" v-model="items" >
                <div class="selection" @click="linkDetail(item.id)" style="text-align: left;border: solid rgb(0,0,0,0.01);height: max-content;" >
                    <img :src="item.coverUrl" style="border-radius: 35px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;margin-top: 10px;width: max-content;float: left;">
                        <span style="font-size: 20px;">{{ item.title }}</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img :src="item.userAvatar">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">{{item.userName}}</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <a-textarea 
                            :defaultValue="item.intro"
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
            <!-- <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items /> -->
        </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { LikeFilled,LikeOutlined } from '@ant-design/icons-vue';
import location from '../common/location'
import {getCurrentInstance, onMounted, ref} from 'vue'
import { articleQueryRequest, articleQueryRequest2, articleQueryRequestData, articleQueryRequestData2,searchTravelById } from '../../api/atricle/travel';
import {PersonalRecommendListData,PersonalRecommendList} from '../../api/DataService/DataUpload'
import { useCounterStore } from '../../pinia';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const load = useCounterStore();
const {travelDetailId} = storeToRefs(load);
const internalInstance = getCurrentInstance()
const travel =ref()
console.log(location)
// 封装一个请求参数函数：
const  query=(orderType:number)=>{
    let msg:articleQueryRequestData={
    //current: 0,
    //pageSize: 0,
    sortField: '',
    orderType: orderType,
    }
    articleQueryRequest(msg).then((res)=>{
        console.log(res.data.data.records)
        travel.value = res.data.data.records
    })
}
// 封装一个请求参数函数2：
const  query2=(queryType:number)=>{
    let msg:articleQueryRequestData2={
    //current: 0,
    //pageSize: 0,
    sortField: '',
    queryType: queryType,
    }
    articleQueryRequest2(msg).then((res)=>{
        console.log(res.data.data.records)
        travel.value = res.data.data.records
    })
}
// 这里是点赞收藏评论数：
onMounted(()=>{
    query(0)
})

const current=ref(1)
const getMessae=(flag:string)=>{
    // 这里点击按钮时发送请求传递参数flag
    if(internalInstance!==null){
        internalInstance.update()//每次操作数据后实时更新
    }
    if(flag === 'notes'){
        query2(1)
    }else if(flag === 'hot'){
        query(0)
    }else if(flag === 'expirence'){
        query2(2)
    }else if(flag === 'record'){
        query(1)
    }else if(flag === 'like'){
        let msg:PersonalRecommendListData={
        current: 0,
        pageSize: 6,
        rcmdType: 1
        }
        PersonalRecommendList(msg).then((res)=>{
            
            travel.value = res.data.data.dataPage.records
            console.log(travel.value)
        })
    }
}
const route = useRouter();
const linkDetail=(id:number)=>{
    // 这里跳转到对应的详细界面
    travelDetailId.value = id
    route.push({
        path:'./NotesDetail',
        query:{
            id:id
        }
    })
}
</script>

<style scoped>
/* 这里是轮播图对应的css样式 */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 400px;
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