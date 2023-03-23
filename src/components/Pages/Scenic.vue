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
                  <a-col :span="4" v-for="column of 4" key="column">
                    <a-card hoverable style="width: 300px">
                        <template #cover>
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            style="width: 300px;height:220px;overflow: hidden;"
                        />
                        </template>
                    <div>
                        <span style="float:left;">景区名字</span>
                    </div>        
                    <br>
                    <div>
                        <span>
                            对景区的相关描述--------------------
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
console.log(location)
const value = ref<String[]>([])
const options: CascaderProps['options'] = location
const selections=[
            {name:"热点景区"},
            {name:"优质游记"},
            {name:"热门团队"},
            {name:"周边商城"},
        ]
const current=ref(1)
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