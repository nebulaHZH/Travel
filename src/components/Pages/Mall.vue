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
                <img src="https://p1-q.mafengwo.net/s19/M00/CE/BE/CoNB_GQSzGxviRFEACgBPnEpxsI.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" style="width: 100%;height: 100%;">
            </div>
            <div><img src="https://p1-q.mafengwo.net/s19/M00/14/FD/CoNEMGQVZaRrXkpJACFU-Bv3cKI.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" style="width: 100%;height: 100%;"></div>
            <div><img src="https://p1-q.mafengwo.net/s19/M00/4D/87/CoNELmQV3HAcJHVIAB9d6ZVMVQ4.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
        </a-carousel>
        <div style="float: left;margin-top: 40px;margin-left: 20px;width: 100%;">
            <a-radio-group ref="groups" v-model:value="purchase" size="large" change="changes" style="float: left;margin-left: 40px;">
                <a-radio-button class="exchange" ref="exchanges" value="exchange" @click="getByT">积分兑换</a-radio-button>
                <a-radio-button class="purchase" ref="purchases" value="purchase">线上购买</a-radio-button>
            </a-radio-group>
            <!-- <div style="float:right;margin-right: 15%;margin-top: 40px;">
                <a-input-search   class="ant-dropdown-link" v-model:value="info" placeholder="请输入想查询的内容" id="MainSearch" size="large"/>
            </div> -->
            <div style="float: right;margin-top:100px;">
                
            </div>
        </div>
        <div style="margin-top: 200px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="i in 3" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                <a-col :span="6.5" v-for="item in goods.slice(4*i-4,4*i)" key="column">
                    <a-card hoverable style="width: 300px;border-radius: 10px;" @click="toDetail(item.id)">
                        <template #cover>
                        <img
                            
                            :src="item?.coverUrl.slice(2,-2).split(',')[0].slice(0,-1)"
                            style="width: 300px;height:270px;overflow: hidden;border-radius: 10px;"
                        />
                        </template>
                    <div style="text-align: left;">
                        <span style="float:left;font-weight: 500;">{{ item?.derivativeName }}</span>
                    </div>        
                    <br>
                    <div>
                        <span style="text-align: left;float:left;font-size: 24px;color: red;">
                            ￥{{ item?.price }}
                        </span>
                    </div>
                    </a-card>
                </a-col>
            </a-row>
            <a-pagination v-model:current="current" :total="50" show-less-items />
            <br>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {onMounted, ref} from 'vue'
import { officialGetDerivativeList, officialGetDerivativeListData } from '../../api/official/officialMall';
import { useRouter } from 'vue-router';
const groups = ref<any>()
const exchange = ref<string>('exchange')
const purchase = ref<string>('purchase')
const exchanges = ref<any>()
const purchases = ref<any>()
const goods = ref([])
const changes = ()=>{
    if(groups.value == purchases.value){
    }
}
const router = useRouter()
const toDetail=(id:number)=>{
    
    router.push({
        path:'/MallDetail',
        query:{
            id:id
        }
    })
}
onMounted(() => {
    let msg:officialGetDerivativeListData={
        current: 0,
        obtainMethod: 0,
        pageSize: 12
    }
    officialGetDerivativeList(msg).then((res)=>{
        console.log(res.data.data.records)
        goods.value = res.data.data.records
    })
})
const getByT = ()=>{
    let msg:officialGetDerivativeListData={
        current: 0,
        obtainMethod: 1,
        pageSize: 12
    }
    officialGetDerivativeList(msg).then((res)=>{
        console.log(res.data.data.records)
        goods.value = res.data.data.records
    })
}
const current=ref(1)
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
.exchange:active{
    background-color:blueviolet;
}
.purchase:active{
    background-color:blueviolet;
}
</style>