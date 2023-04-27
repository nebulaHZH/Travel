<template>
    <div class="a" >
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
                <img src="https://p1-q.mafengwo.net/s19/M00/49/68/CoNELmQ_f-wKP-JhACuOvvshEqo.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" alt="">
            </div>
            <div><img src="https://p1-q.mafengwo.net/s19/M00/B8/C5/CoNBSGRA-e8KwBJPACVzIbW_BFg.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" alt=""></div>
            <div><img src="https://p1-q.mafengwo.net/s19/M00/49/68/CoNELmQ_f-wKP-JhACuOvvshEqo.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
        </a-carousel>
        <!-- <div class="category">
          <a-cascader v-model:value="value" :options="options" placeholder="请选择城市" />
          <a-button type="purple" style="margin-left: 20px;" size="large">季节推荐</a-button>
          <a-button type="purple" style="margin-left: 20px;" size="large">出现方式</a-button>
          <a-button type="purple" style="margin-left: 20px;" size="large">节假日</a-button>
          <a-button type="purple" style="margin-left: 20px;" size="large">猜你喜欢</a-button>
        </div> -->
        <div v-for="items in 4" key="selection" style="margin-top: 100px;">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                  <a-col :span="4" v-for="column in scenic.slice(items*4-4,items*4)" key="column">
                    <a-card hoverable style="width: 300px" @click="upToScenic(column.id)">
                        <template #cover>
                        <img
                            alt="example"
                            :src="column.coverUrl"
                            style="width: 300px;height:220px;overflow: hidden;"
                        />
                        </template>
                    <div>
                        <span style="float:left;font-weight: 600;">{{ column.officialName }}</span>
                    </div>        
                    <br>
                    <div style="text-align: left;">
                        <span>
                            {{ column.intro }}
                        </span>
                    </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>
        <a-pagination v-model:current="current" :total="50" show-less-items />
        <br>
    </div>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {onMounted, ref} from 'vue'
import type { CascaderProps } from 'ant-design-vue';
import location from '../common/location'
import {useRoute, useRouter} from 'vue-router'
import { officialViewPageList, officialViewPageListData,officialGetIntroByIdData } from '../../api/official/official';
import { useCounterStore } from '../../pinia';
import { storeToRefs } from 'pinia';
import { officialGetIntroById } from '../../api/official/official';
console.log(location)
const options: CascaderProps['options'] = location
const scenic= ref([])
const current=ref(1)
const load = useCounterStore();
const {scenicDetail} = storeToRefs(load);
const router = useRouter();
const upToScenic = (id:number) =>{
  console.log('aaaa')
  router.push({
    path:'./ScenicDetail',
    query:{
      id:id
    }
  })
}
onMounted(() => {
  let msg:officialViewPageListData={
  current: 0,
  pageSize: 16
  }
  officialViewPageList(msg).then((res)=>{
    console.log(res.data.data.records)
    scenic.value = res.data.data.records
  })
})
</script>

<style scoped>

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 450px;
  line-height: 160px;

  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 45px;
  height: 45px;
  font-size: 45px;
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

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.category{
  margin-top: 20px;
  margin-left: 26%;
  padding: 20px;
  width: max-content;
  text-align: center;
  border-radius: 6px;
}
</style>