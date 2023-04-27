
<template>
<div>
    <div>
    <div style="height: 400px;" class="backImg item">
    <div class="backgroundImg"></div>
</div>
<div style="height: 40px;width: 100%"></div>
    <!-- 热点景区 -->
    <div >
        <img src="../../assets/左箭头travel.png" alt="" style="width: 200px;height: 150px;">
        <span class="selectName">
            热门景区
        </span>
        
        <img src="../../assets/travel箭头.png" style="width: 200px;height: 150px;">
    </div>
    <a-row type="flex" justify="space-around" align="middle" v-for="items in  2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left;">              
        <a-col :span="4" v-for="item in selection.slice(items*3-3,items*3)" key="column">
            <a-card hoverable style="width: 300px"  @click="linkToScenicDetail(item.id)">
                <template #cover>
                <img
                    alt="example"
                    :src="item.coverUrl"
                    style="width: 300px;height:220px;overflow: hidden;"
                />
                </template>
            <div>
                <span style="float:left;font-weight: 600;">{{ item.officialName }}</span>
            </div>        
            <br>
            <div>
                <span>
                    {{ item.intro }}
                </span>
            </div>
            </a-card>
        </a-col>
    </a-row>
    <br>
    <br>
    <br>
    <div>
        <a-button type="primary" @click="moreScenic">跳转更多</a-button>
    </div>
    <br>
    <br>
<!-- 优质游记 -->
    <div >
        <img src="../../assets/左箭头travel.png" alt="" style="width: 200px;height: 150px;">
        <span class="selectName">
            优质游记
        </span>
        
        <img src="../../assets/travel箭头.png" style="width: 200px;height: 150px;">
    </div>
    <a-row type="flex" justify="space-around" align="middle" v-for="items in  2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left;">              
        <a-col :span="4" v-for="item in travel.slice(items*3-3,items*3)" key="column">
            <a-card hoverable style="width: 300px"  @click="linkToTravelDetail(item.id)">
                <template #cover>
                <img
                    alt="example"
                    :src="item.coverUrl"
                    style="width: 300px;height:220px;overflow: hidden;"
                />
                </template>
            <div>
                <span style="float:left;font-weight: 600;">{{ item.title }}</span>
            </div>        
            <br>
            <div>
                <span>
                    {{ item.intro }}
                </span>
            </div>
            </a-card>
        </a-col>
    </a-row>
    <br>
    <br>
    <div>
        <a-button type="primary" @click="moreTravel">跳转更多</a-button>
    </div>
    <br>
    <br>
<!-- 热门团队 -->
    <div >
        <img src="../../assets/左箭头travel.png" alt="" style="width: 200px;height: 150px;">
        <span class="selectName">
            热门团队
        </span>
        
        <img src="../../assets/travel箭头.png" style="width: 200px;height: 150px;">
    </div>
    <a-row  type="flex" justify="space-around" align="middle" v-for="items in  2"     style="margin-bottom: 30px;margin-left: 0;text-align: left;">              
            <a-col :span="4" v-for="item in teams.slice(items*3-3,items*3)">
                <a-card hoverable style="width: 300px" @click="linkToTeamDetail(item.id)">
                    <template #cover>
                    <img
                        alt="example"
                        :src="item.coverUrl"
                        style="width: 250px;height:250px;overflow: hidden;border-radius: 50%;object-fit: cover;margin-left: 25px;margin-top: 10px;"
                    />
                    </template>
                <div>
                    <span style="float:left;font-weight: 600;">{{ item.teamName }}</span>
                </div>        
                <br>
                <div>
                    <span>
                        {{ item.intro }}
                    </span>
                </div>
                </a-card>
            </a-col>
        </a-row>
        <br>
    <br>
    <div>
        <a-button type="primary" @click="moreTeams">跳转更多</a-button>
    </div>
    <br>
    <br>
<!-- 周边商城 -->
    <div >
        <img src="../../assets/左箭头travel.png" alt="" style="width: 200px;height: 150px;">
        <span class="selectName">
            周边商城
        </span>
        
        <img src="../../assets/travel箭头.png" style="width: 200px;height: 150px;">
    </div>
    <a-row type="flex" justify="space-around" align="middle" v-for="items in  2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left;">              
        <a-col :span="4" v-for="item in derivative.slice(items*3-3,items*3)" key="column">
            <a-card hoverable style="width: 300px"  @click="linkToGoodsDetail(item.id)">
                <template #cover>
                <img
                    alt="example"
                    :src="item.coverUrl.slice(1,-1).split(',')[0].slice(1,-1)"
                    style="width: 300px;height:220px;overflow: hidden;"
                />
                </template>
            <div>
                <span style="float:left;font-weight: 600;">{{ item.derivativeName }}</span>
            </div>        
            <br>
            <div>
                <span>
                    {{ item.intro }}
                </span>
            </div>
            </a-card>
        </a-col>
    </a-row>
    <br>
    <br>
    <div>
        <a-button type="primary" @click="moreGoods">跳转更多</a-button>
    </div>
    <br>
    <br>
</div>
</div>



</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { officialGetIntroById, officialGetIntroByIdData, officialViewPageList, officialViewPageListData } from '../../api/official/official'
import { articleQueryRequest, articleQueryRequestData, getArticleDeatil, getArticleDeatilData } from '../../api/atricle/travel'
import { officialGetDerivativeList, officialGetDerivativeListData,officialGetDerivativeByIdData,officialGetDerivativeById } from '../../api/official/officialMall'
import { getVo, teamQueryRequest, teamQueryRequestData } from '../../api/team/teamMember'
import { useCounterStore } from '../../pinia';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router'
const load = useCounterStore();
const {scenicDetail,teamDetails,travelDetail,derivativeDetail} = storeToRefs(load);
const selection=ref([])
const travel = ref([])
const derivative = ref([])
const teams = ref([])
const router = useRouter()
onMounted(() => {
    let msg:officialViewPageListData={
        current: 0,
        pageSize: 6
    }
    officialViewPageList(msg).then((res)=>{
        console.log(res.data.data.records)
        selection.value = res.data.data.records
    })
    let msg2:articleQueryRequestData={
        current: 0,
        pageSize: 6,
        sortField: ''
    }
    articleQueryRequest(msg2).then((res)=>{
        console.log(res.data.data.records)
        travel.value = res.data.data.records
    })
    let msg3:officialGetDerivativeListData={
        current: 0,
        pageSize: 6
    }
    officialGetDerivativeList(msg3).then((res)=>{
        derivative.value = res.data.data.records
    })
    teams.value
    let msg4:teamQueryRequestData={
        current: 0,
        pageSize: 6
    }
    teamQueryRequest(msg4).then((res)=>{
        teams.value = res.data.data.records
    })
})
const linkToScenicDetail=(id:number)=>{
    
    router.push({
        path:'./ScenicDetail',
    query:{id:id}
    })
}
const linkToTravelDetail=(id:number)=>{
    let msg:getArticleDeatilData={
    detailId: 1,
    articleId: id
}
    getArticleDeatil(msg).then((res)=>{
        console.log(res.data.data)
        travelDetail.value = res.data.data
    })
    router.push({
        path:'./NotesDetail',
    // query:{
    //   teamId:id
    // }
    })
}
const linkToTeamDetail=(id:number)=>{
    getVo(id).then((res)=>{
        teamDetails.value = res.data.data
    })
    router.push({
        path:'./TeamDetail/TeamHome',
    // query:{
    //   teamId:id
    // }
    })
}
const linkToGoodsDetail=(id:number)=>{
    let msg:officialGetDerivativeByIdData={
        id: id
    }
    officialGetDerivativeById(msg).then((res)=>{
        console.log(res.data.data)
        derivativeDetail.value = res.data.data
    })
    router.push({
        path:'./MallDetail',
    // query:{
    //   teamId:id
    // }
    })
}
const moreScenic=()=>{
    window.open("/Scenic",'_blank')
}
const moreTeams=()=>{
    window.open("/Teams",'_blank')
}
const moreTravel=()=>{
    window.open("/Notes",'_blank')
}
const moreGoods=()=>{
    window.open("/Mall",'_blank')
}
</script>
<style scoped lang="scss">
#components-grid-demo-playground :deep(.ant-col) {
background: transparent;
border: 0;
}
#components-grid-demo-playground :deep(.ant-col) > div {
background: #00a0e9;
height: 120px;
line-height: 120px;
font-size: 13px;
}
#components-grid-demo-playground pre {
background: #f9f9f9;
border-radius: 6px;
font-size: 13px;
padding: 8px 16px;
}
[data-theme='dark'] #components-grid-demo-playground pre {
background: #2f2f2f;
}
/*  */
.content{
margin: 0   ;
padding: 0;
display: grid;
grid-template-columns: repeat(1, 1000px);
grid-gap: 20px;
grid-template-rows: 100px 200px;
}
.backImg{
    width: 100%;
    margin: 0;
    padding: 0;
    .backgroundImg{
    width: 100%;
    margin-top: 0;
    margin-top: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url("https://p1-q.mafengwo.net/s19/M00/19/46/CoNJlGQyjhdD3qA7AArFegvGvlk.jpeg?imageMogr2%2Fstrip");
    height: 400px;
    text-align: center;
    
    overflow: hidden;
    }
}
.selectName{
    font-size: 30px;
    font-weight:bolder;
    margin-bottom:30px;
    font-family: Youyuan;
    margin-left: -20px;
    padding: 10px;
}

</style>

