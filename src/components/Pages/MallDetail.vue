<template>
	<div class="swiperbox" style="padding:50px">
        <swiper 
               :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2" :navigation="{
                            nextEl: '.swiper-button1-next',
                            prevEl: '.swiper-button1-prev'
                        }">
                    <swiper-slide v-for="(item, index) of bigImg" :key="index"> <img class="img" :src="item" />
                    </swiper-slide>
                   
                </swiper>
                <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="3" :freeMode="true" style="display: flex;width: 50%;flex-direction: column;"
                    :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(item, index) of bigImg" :key="index"> 
                        <img class="img" :src="item" />
                    </swiper-slide>
                </swiper>
        <div style="text-align: left;font-size: 20px;">
            <span style="margin-left: 20px;">商品名：</span>
            {{ goodName }}
            <br>
            <br>
            <div style="background-color: gainsboro;margin-left: 54%;">
                <span style="font-size: 40px;color: brown;margin-left: 20px;">￥{{ price }}</span>
            </div>
            <br>
            <span style="margin-left: 20px;">详细介绍：</span>
            <pre style="width: 46%;height: 390px;font-size: 20px;white-space: pre-wrap;word-wrap: break-word;text-align: left;font-weight: 500;margin-left: 54%;background-color:darkgray;">
  随便写几句话应付一下------------------------------------------------------
            </pre>
        </div>          
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from 'swiper'
const goodName = ref('卡莎手办模型')
const price = ref('106')
const modules = [Thumbs, FreeMode]
const bigImg = reactive([
    'https://t7.baidu.com/it/u=3165657288,4248157545&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF',
])
const thumbsSwiper = ref(null);
 
const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};
</script>

<style scoped>
.swiper-button-next {
    /*先将原始箭头的颜色设置为透明的  然后设置一个背景图片  达到修改按钮样式的目的*/
    right: 1.5%;
    left: auto;
    color: rgba(0, 0, 0, 0) !important;
    background: url("../../assets/images/start/left.png") center center no-repeat;
    background-size: 100% 100%;
}
 
.swiper-button-prev {
    left: 1.5%;
    right: auto;
    color: rgba(0, 0, 0, 0) !important;
    background: url("../../assets/images/start/right.png") center center no-repeat;
    background-size: 100% 100%;
}
 
/* swiper样式 */
.swiper {
    width: 80%;
    height: 500px;
}
 
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
 
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
 
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
 
 
.swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}
 
.swiper-slide {
    background-size: cover;
    background-position: center;
}
 
.mySwiper2 {
    position: relative;
    float: left;
    height: 400px;
    width: 50%;
    margin-left: 2%;
    border-radius: 12px;
}
 
.mySwiper {
    position: relative;
    margin-top: 10px;
    float: left;
    margin-left: 2%;
    overflow-x: auto;
    width: 300px;
    height: 80%;
    box-sizing: border-box;
    padding: 10px 0;
 
}
 
.swiper-cover {
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0%;
    right: 0%;
    z-index: 100;
 
}
 
.swipercover-top {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 30%;
    color: white;
    border-bottom: 2px solid dodgerblue
}
 
.swipercover-top-text {
    width: 15%;
    height: 100%;
    border-bottom: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
}
 
.swipercover-bottom {
    margin-left: 10%;
    width: 100%;
    height: 70%
}
 
.mySwiper .swiper-slide {
    width: 100%;
    height: 33%;
    opacity: 0.4;
    border-radius: 4%;
}
 
.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
 
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
