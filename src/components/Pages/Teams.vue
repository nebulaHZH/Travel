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
                <img class="carousel" src="https://p1-q.mafengwo.net/s19/M00/C2/7C/CoNE3mPT84ZmnjUWABIlqc8nYPo.jpeg?imageMogr2%2Fstrip">
            </div>
            <div><img class="carousel" src="https://p1-q.mafengwo.net/s19/M00/BA/C9/CoNELmQ1IcM38hknABtgl9yni10.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg"></div>
            <div><img class="carousel" src="https://note.mafengwo.net/img/76/71/c4fd5f71e5325fe4cc56f088a05b923d.jpeg?imageMogr2%2Fstrip"></div>
            <div><img class="carousel" src="https://p1-q.mafengwo.net/s16/M00/F3/9B/CoUBUmFvhYWARp_iABG8yWm9XuY83.jpeg?imageMogr2%2Fstrip"></div>
        </a-carousel>
        <div>
            <a-tag color="blue" id="commend">热门推荐</a-tag>
            <a-button type="primary" class="change" @click="hotChange">换一换</a-button>
        </div>
        
        <div style="margin-top: 300px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="row in 2" key="row" style="margin-bottom: 30px;margin-left: 0;">              
            <a-col :span="4" v-for="item in hotRecommend.slice(row*4-4,row*4)" key="column">
                <a-card hoverable style="width: 300px" @click="toTeamDeatil(item.id)">
                    <template #cover>
                    <img
                        alt="example"
                        :src="item.iconUrl"
                        style="width: 250px;height:250px;overflow: hidden;border-radius: 50%;object-fit: cover;margin-left: 25px;margin-top: 10px;"
                    />
                    </template>
                    <div style="text-align: left;">
                        <span style="float:left;font-weight: 600;">{{ item.teamName }}</span>
                    </div>        
                    <br>
                    <div style="text-align: left;">
                        <span>
                            {{ item.intro }}
                        </span>
                    </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>
         <!-- <div>
            <a-tag color="blue" id="commend">猜你想进</a-tag>
            <a-button type="primary" class="change">换一换</a-button>
        </div>
        <div style="margin-top: 300px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="row in  guessYourLove" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                <a-col :span="4" v-for="(item,index) in row" :key="index" style="border-radius: 50%;" @click="toTeamDeatil(item.id)">
                    <a-card hoverable style="width: 300px">
                        <template #cover>
                        <img
                            :src="item.coverUrl"
                            style="width: 250px;height:250px;overflow: hidden;border-radius: 50%;margin-left: 25px;margin-top: 10px;background-size: cover;object-fit:cover;"
                        />
                        </template>
                    <div>
                        <span style="float:left;font-weight: 600;">{{ item.teamName }}</span>
                    </div>        
                    <br>
                    <div style="text-align: left;">
                        <span >
                            {{ item.intro }}
                        </span>
                    </div>
                    </a-card>
                </a-col>
            </a-row>
        </div> -->
        <div>
            <a-tag color="blue" id="commend">全部团队</a-tag>
        </div>
        <div  ref="showMore">
        <div style="margin-top: 300px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="row in curent"  key="row" style="margin-bottom: 30px;margin-left: 0;">              
                <a-col :span="4.5" v-for="item in  allTeams.slice(row*4-4,4*row)" key="column" @click="toTeamDeatil(item.id)">
                <a-card hoverable style="width: 300px">
                    <template #cover>
                    <img
                        alt="example"
                        :src="item.coverUrl"
                        style="width: 250px;height:250px;overflow: hidden;border-radius: 50%;margin-left: 25px;margin-top: 10px;background-size: cover;object-fit:cover;"
                    />
                    </template>
                    <div>
                        <span style="float:left;font-weight: 600;">{{ item.teamName }}</span>
                    </div>        
                    <br>
                    <div style="text-align: left;">
                        <span >
                            {{ item.intro }}
                        </span>
                    </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>
        </div>
        <div >
            <a-button style="margin-bottom: 40px;" @click="getMore">查看更多</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {ref,getCurrentInstance, onMounted} from 'vue'
import type { CascaderProps } from 'ant-design-vue';
import location from '../common/location'
import { useRouter } from 'vue-router';
import { useCounterStore } from '../../pinia';
import { storeToRefs } from 'pinia';
import { getVo, teamCommend, teamCommendData, teamQueryRequest, teamQueryRequestData } from '../../api/team/teamMember';
const load = useCounterStore();
console.log(location)
const options: CascaderProps['options'] = location
const internalInstance = getCurrentInstance()
const total = ref(30)
const {allTeams,hotRecommend,teamDetails} = storeToRefs(load);
onMounted(() => {
    let aaaa:teamQueryRequestData={
        current: 0,
        pageSize: 12
    }
    let r:teamCommendData={
        current: 1,
        pageSize: 9
    }
    teamQueryRequest(aaaa).then((res)=>{
        allTeams.value = res.data.data.records
        console.log(allTeams.value)
    })
    teamCommend(r).then((res)=>{
        hotRecommend.value = res.data.data
        console.log(hotRecommend.value)
    })

})
const hotcurrent = ref(1)
const curent = ref(3)
const hotTotal = ref(8)
// let将数组变成可变的，这样就可添加数据了
// 这里是显示更多动态生成部分
const cards = ref()
const showMore = ref<any>(null)
const getMore=(e:any)=>{
    curent.value = curent.value + 1
    let aaaa:teamQueryRequestData={
        current: 0,
        pageSize: curent.value*4
    }
    if(total.value<=curent.value*4){
        alert("没有更多团队了~~~")
    }else{
        teamQueryRequest(aaaa).then((res)=>{
            allTeams.value = res.data.data.records
            total.value = res.data.data.total
            console.log(allTeams.value)
        })
        console.log(allTeams)
        internalInstance?.update()
    }
    
}
const hotChange=()=>{
    
    if(hotTotal.value>=16){
        hotcurrent.value = 0
        hotTotal.value = hotTotal.value-16
    }
    hotcurrent.value = hotcurrent.value + 1
    let r:teamCommendData={
        current: hotcurrent.value,
        pageSize: 10 //搞不懂一点为什么返回10才可以让热门推荐变成两排
    }
    teamCommend(r).then((res)=>{
        hotRecommend.value = res.data.data
        hotTotal.value = hotTotal.value + 8
        internalInstance?.proxy?.$forceUpdate()
    })
    
    console.log(hotTotal.value)
}
const router = useRouter()
const toTeamDeatil = (id:number)=>{
    getVo(id).then((res)=>{
        teamDetails.value = res.data.data
    })
    console.log(teamDetails.value,id)
    router.push({
        path:'./TeamDetail',
    // query:{
    //   teamId:id
    // }
    })
}
</script>

<style scoped>
/* 这里是轮播图对应的css样式 */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 450px;
  line-height: 160px;

  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 50px;
  height: 50px;
  font-size: 50px;
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
.carousel{
    width: 100%;
    object-fit: contain;
}
/*  */
#commend{
    width: 200px;
    height:100px;
    text-align:center;
    font-size: larger;
    line-height: 100px;
    float: left;
    margin-left: 4.5%;
    margin-top: 100px;
    border-radius: 10px;
}
.change{
    width: 150px;
    height:50px;
    text-align:center;
    font-size: larger;
    margin-right: 3%;
    margin-top: 200px;
    color: black;
    float: right;
    border-radius: 5px;
}
</style>