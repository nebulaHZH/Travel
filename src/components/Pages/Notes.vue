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
                    <a-button size="large">热门推荐</a-button>
                    <a-button size="large">官方游记</a-button>
                    <a-button size="large">旅游记录</a-button>
                    <a-button size="large">景点攻略</a-button>
                    <a-button size="large">猜你喜欢</a-button>
                </a-space>
            </a-col>
            <div id="notes">
            <a-row v-for="item in items" ref="items">
                <div style="text-align: left;background-color: white;border: solid rgb(0,0,0,0.01);height: max-content;" :id="item.id">
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 35px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;margin-top: 10px;width: max-content;float: left;">
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
                            <a-textarea 
                            defaultValue="是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。"
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
                                <span style="padding-left: 8px; cursor: auto">
                                {{ item.count }}
                                </span>
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
import {ref} from 'vue'
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


const items = [
    {name:'aaaaaaaaaaaaaaaa',
    count:10,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    count:12,
    id:'10102',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    count:13,
    id:'10103',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    count:13,
    id:'10103',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    count:13,
    id:'10103',
    islike:false},
]
const current=ref(1)
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
</style>