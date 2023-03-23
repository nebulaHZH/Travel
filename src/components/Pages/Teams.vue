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
                <img src="../../assets/navPicture.png" alt="">
            </div>
            <div><img src="../../assets/example.jpg" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
            <div><img src="../../assets/navPicture.png" alt=""></div>
        </a-carousel>
        <div>
            <a-tag color="blue" id="commend">热门推荐</a-tag>
            <a-button type="primary" class="change">换一换</a-button>
        </div>
        
        <div style="margin-top: 300px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="row of 2" key="row" style="margin-bottom: 30px;margin-left: 0;">              
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
         <div>
            <a-tag color="blue" id="commend">猜你想进</a-tag>
            <a-button type="primary" class="change">换一换</a-button>
        </div>
        <div style="margin-top: 300px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="row of 3" key="row" style="margin-bottom: 30px;margin-left: 0;">              
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
        <div>
            <a-tag color="blue" id="commend">全部团队</a-tag>
        </div>
        <div  ref="showMore">
        <div style="margin-top: 300px;">
            <a-row type="flex" justify="space-around" align="middle" v-for="row in rows"  key="row" style="margin-bottom: 30px;margin-left: 0;">              
                <a-col :span="4.5" v-for="column of 4" key="column">
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
        </div>
        <div >
            <a-button style="margin-bottom: 40px;" @click="getMore">查看更多</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {ref} from 'vue'
import type { CascaderProps } from 'ant-design-vue';
import location from '../common/location'
console.log(location)
const options: CascaderProps['options'] = location
// 这里是显示更多动态生成部分
const cards = ref([
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
    {name:'teamwork',detail:'显示更多动态生成部分'},
])
const showMore = ref<any>(null)
const rows = ref(cards.value.length/4)
const getMore=()=>{
    cards.value.push(
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
        {name:'teamwork',detail:'显示更多动态生成部分'},
    )
    rows.value = cards.value.length/4
    console.log(cards.value.length/4)
    
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