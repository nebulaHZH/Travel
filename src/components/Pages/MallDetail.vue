<template>
	<div class="swiperbox" style="padding:50px">
        <div style="width: 500px;">
            <swiper 
            :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2" :navigation="{
                        nextEl: '.swiper-button1-next',
                        prevEl: '.swiper-button1-prev'
                    }">
                <swiper-slide v-for="item in goods?.coverUrl.slice(1,-1).split(',')"> <img class="img" :src="item.slice(1,-1)" />
                </swiper-slide>
                
            </swiper>
            <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="3" :freeMode="true" style="display: flex;width: 50%;flex-direction: column;"
                :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="item in goods?.coverUrl.slice(1,-1).split(',')"> 
                    <img class="img" :src=item.slice(1,-1) />
                </swiper-slide>
            </swiper>
        </div>
        
        <div style="text-align: left;font-size: 20px;">
            <div style="margin-left: 45%;">
                <span style="font-weight: 600;font-size: 25px;">【T纪念品T】：</span>
                <span style="color: blueviolet;font-weight: bolder;">《{{ goods?.derivativeName }}》</span>
            </div>
            <br>
            <br>
            <div style="background: linear-gradient(to right,pink,white);margin-left: 45%;width: 50% ;border-radius: 10px;">
                <span style="font-size: 40px;color: brown;margin-left: 20px;">￥{{ goods?.price }}</span>
            </div>
            <br>
            <div>
                <span style="margin-left: 9%;font-weight: 600;">【详细介绍】：</span>
                <br>
                <br>
            <pre style=";width: 50%;height: 300px;font-size: 18px;border-radius: 10px;;white-space: pre-wrap;word-wrap: break-word;text-align: left;font-weight: 600;margin-left: 45%;background: linear-gradient(to bottom right,rgb(176,224,230), pink);">  {{ goods?.intro }}
            </pre>
            </div>
            
        </div>          
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { officialGetDerivativeById, officialGetDerivativeByIdData } from '../../api/official/officialMall';
import { useRoute } from 'vue-router';
const modules = [Thumbs, FreeMode]
const goods = ref()

onMounted(()=>{
    const {query} = useRoute()
    let msg:officialGetDerivativeByIdData={
        id: query.id
    }
    officialGetDerivativeById(msg).then((res)=>{
        console.log(res.data.data)
        goods.value = res.data.data
        console.log(goods.value?.coverUrl.slice(1,-1).split(","))
    })
})
const bigImg = reactive(goods.value?.coverUrl.slice(1,-1).split(","))
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
    float: left;
    height:450px;
    width: 100%;
    margin-left: 2%;
    border-radius: 12px;
}
 
.mySwiper {

    margin-top: 10px;
    float: left;
    margin-left: 22%;
    width: 100%;
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
