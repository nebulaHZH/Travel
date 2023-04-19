<template>
    <div class="a">
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
                <img src="../../assets/navPicture.png" alt="">
            </div>
            <div><img src="../../assets/example.jpg" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
        </a-carousel>
        <div class="category">
          <a-cascader v-model:value="value" :options="options" placeholder="请选择城市" />
          <a-button type="purple" style="margin-left: 20px;" size="large">季节推荐</a-button>
          <a-button type="purple" style="margin-left: 20px;" size="large">出现方式</a-button>
          <a-button type="purple" style="margin-left: 20px;" size="large">节假日</a-button>
          <a-button type="purple" style="margin-left: 20px;" size="large">猜你喜欢</a-button>
        </div>
        <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                  <a-col :span="4" v-for="column of selection" key="column">
                    <a-card hoverable style="width: 300px" @click="upToScenic">
                        <template #cover>
                        <img
                            alt="example"
                            :src="column.imgsrc"
                            style="width: 300px;height:220px;overflow: hidden;"
                        />
                        </template>
                    <div>
                        <span style="float:left;font-weight: 600;">{{ column.name }}</span>
                    </div>        
                    <br>
                    <div style="text-align: left;">
                        <span>
                            {{ column.detail }}
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
import {ref} from 'vue'
import type { CascaderProps } from 'ant-design-vue';
import location from '../common/location'
import {useRouter} from 'vue-router'
console.log(location)
const value = ref<String[]>([])
const options: CascaderProps['options'] = location
const selections=[
  [
  {
    name:'兵马俑',
    imgsrc:'https://note.mafengwo.net/img/ea/f3/3356660921dc1934bde2bf1b71cd8ac1.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'姑苏',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/49/FF/CoNH1WQ02f4srMNiAA8Eo-Arg3s.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'贵州',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/BB/54/CoNBcWPy-9kNBexkABXLBujIS9I.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90'
    ,detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'西藏以东',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/19/46/CoNJlGQyjhdD3qA7AArFegvGvlk.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  ],
  [
  {
    name:'南昌·上饶·婺源',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/5E/43/CoNE62QyZi0t_nAMAAtWJWI5tM8.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'阴雨绵绵的三月底来场说走就走的田园山谷之旅'

  },
  {
    name:'珠海和澳门',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/9D/B5/CoNBz2QuaDJKLQtlABiCuf9WA88.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'泰国',
    imgsrc:'https://note.mafengwo.net/img/66/da/a606d4c1e27172c0e69724fa4e8236dc.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'上海',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/60/92/CoNHZmQqxxJUmKXzAAYbxfUccoA.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  ],
  [
  {
    name:'北疆',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/BE/AF/CoNBGWQNbbcHGhgfACd_WhiUduY.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'四姑娘山',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/3F/0C/CoNH1mQqXVUQ0y6SAAygshT8yDI.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'兵马俑',
    imgsrc:'https://note.mafengwo.net/img/ea/f3/3356660921dc1934bde2bf1b71cd8ac1.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'云南',
    imgsrc:'https://note.mafengwo.net/img/7b/de/834fe0dade0a25391bcd48a9c700b39e.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  ],
  [
  {
    name:'西安',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/9A/DB/CoNH1WQrqEBIj8IDAAunp35YIYQ.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'香港',
    imgsrc:'https://note.mafengwo.net/img/9a/46/cf8b0576a880da23448e0c5557cd2039.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'南疆',
    imgsrc:'https://note.mafengwo.net/img/17/91/591e326a659bedf7b7ad4ff3961d22a2.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  {
    name:'阿联酋',
    imgsrc:'https://p1-q.mafengwo.net/s19/M00/B6/1A/CoNH1WQqsWUUoJkdAAaKGJiZyS4.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
    detail:'/10人团/赠进口早餐/10点半懒人团/亲子游/人工讲解/可独立成团/法国依云水'

  },
  ],          
]
const current=ref(1)
const route = useRouter()
const upToScenic = () =>{
  console.log('aaaa')
  
  route.push({
    path:'./ScenicDetail',
    query:{
      msg:'这里要传的参数'
    }
  })
}
</script>

<style scoped>

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