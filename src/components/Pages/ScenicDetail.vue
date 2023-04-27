<template>
    <div style="">
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
                    <img src="https://p1-q.mafengwo.net/s19/M00/4D/87/CoNELmQV3HAcJHVIAB9d6ZVMVQ4.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" style="width: 100%;height: 100%;">
                </div>
                <div><img src="https://p1-q.mafengwo.net/s19/M00/14/FD/CoNEMGQVZaRrXkpJACFU-Bv3cKI.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" style="width: 100%;height: 100%;"></div>
                <div><img src="https://p1-q.mafengwo.net/s19/M00/CE/BE/CoNB_GQSzGxviRFEACgBPnEpxsI.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg" alt=""></div>
                <div><img src="../../assets/navPicture.png" alt=""></div>
            </a-carousel>
            <div style="position: absolute;margin-top: -60px;background-color: rgba(255, 255, 255, 0.8);width: max-content;padding-left: 60px;padding-right: 60px;line-height: 40px;margin-left: 60px;border-radius: 10px;">
                <h2 style="height: 40px;font-weight: 400;font-size: larger;color: black;">{{ ScenicName }}</h2>
            </div>
        </div>
        <div>
            <div style="margin-top: 100px;margin-left: 5%;width: max-content;margin-bottom: 40px;" >
                <a-radio-group v-model:value="values"  size="large" style="width:max-content;">
                    <a-radio-button class="searchButton" style="width: 120px;" value="scenicIntroduction">景区介绍</a-radio-button>
                    <a-radio-button class="searchButton" style="width: 120px;" value="spotIntrouduction" @click="spotIntro">景点展示</a-radio-button>
                    <a-radio-button class="searchButton" style="width: 120px;" value="notices" @click="noticeIntro">咨询通知</a-radio-button>
                    <a-radio-button class="searchButton" style="width: 120px;" value="items">周边商城</a-radio-button>
                </a-radio-group>
            </div>
            <div v-if="values=== 'spotIntrouduction'" style="border-radius: 10px;padding: 20px;background-color: white;width: 80%;border: solid 0.01cm;margin-left: 10%;;margin-right: 10%;">
                <div style="width: 100%;background-color: white;width: 88%%;border-radius:10px">
                    <a-row v-for="item in spotsDeatil" @click="toSpotContent(item.id,item.resourceDetailId)" class="spots" style="border-radius: 10px;margin-top: 30px;">
                    <div style="text-align: left;width: 96%;border-radius: 10px;height: max-content;" >
                        <img :src="item.coverUrl" style="border-radius: 10px;width: 200px;height:150px;overflow: hidden;float: left;"/>
                        <div style="margin-left: 240px;width: max-content;margin-top: 10px;width: 100%;">
                            <span style="font-size: 20px;">{{ item.title }}</span>
                            
                            <div style="margin-top: 40px;min-width: 400px;">
                                <pre style="width:400px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">{{ item.intro }}</pre>
                            </div>
                            <div style="margin-left: 35%;margin-top:-0%">
                                <span  key="comment-basic-like">
                                    <LikeOutlined/>
                                    <span style="padding-left: 8px; cursor: auto">
                                    {{ item.likeCount }}
                                    </span>
                                </span> 
                                <span>
                                    <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                    <span style="margin-left: 10px;">{{ item.reviewCount }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    </a-row>
                    <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
                </div>
            </div>
            <div v-if="values=== 'scenicIntroduction'" style=";min-height: 700px;background-color: white;width: 80%;margin-left: 10%;;margin-right: 5%;text-align:center">
                    <br>            
                    <div style="margin-left: 1%;text-align: left;border: solid 0.01cm;padding: 20px;">
                        <!-- 对应的景区视频 -->
                        <div style="margin-top: 50px;">
                            <vue3VideoPlay
                                
                                v-bind="options"
                            />
                        </div>
                        <div style="margin-top: 40px;">
                            <span style="font-size: larger;padding: 10px;background-color: blueviolet;color: white;border-radius: 5px;"   >{{ ScenicName }}</span>

                        </div>
                        <div>
                        <p style="margin-top: 20px;width: 100%;" v-html="markdowns"></p>
                    </div>
                    </div>
                    <div style="margin-left: 1%;;border: solid 0.01cm;padding: 20px;text-align: left;">
                        <!-- 推荐标签 -->
                        <a-radio-group v-model:value="recommend"  size="large" style="width:max-content;">
                            <a-radio-button style=";text-align:center;width: 140px;" class="searchButton"  value="recommendWrite">推荐景区</a-radio-button>
                            <!-- <a-radio-button style="text-align:center;width: 120px;"  class="searchButton"  value="recommendHotel">推荐酒店</a-radio-button>
                            <a-radio-button style=";text-align:center;width: 120px;" class="searchButton"  value="recommendFood"> 推荐美食</a-radio-button> -->
                        </a-radio-group>
                        <!-- 相关推荐 -->
                        <div v-if="recommend==='recommendWrite'" style="margin-top: 20px;width: 100%;">
                            <div style="width: 100%;background-color: white;width: 88%%;border-radius:10px">
                            <a-row v-for="item in recommendTravel" class="recommend" style="width:100%;padding-bottom: 20px;padding-left: 20px;" @click="toTravelDeatil(item.id)">
                            <div  style="text-align: left;; height: max-content;margin-top: 30px;width:100%;" :id="item.id">
                                
                                <img :src=item.coverUrl style="border-radius: 10px;width: 150px;height:100px;overflow: hidden;float: left;">
                                <div style=";margin-left:200px;width:100%;;">
                                    <span style="font-size: 16px;">{{ item.intro }}</span>
                                    <div style="width: 100%;height:max-content">
                                        <div style="text-align: left;position: relative;display: flex;">
                                            <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                                <template #icon>
                                                <img :src=item.user.userAvatar alt="">
                                                </template>
                                            </a-avatar>
                                            <span style="margin-left:10px;margin-top: 8px;">{{ item.user.userName }}</span>
                                        </div>
                                    </div>
                                    <div style="margin-left: 50%;margin-top: 20px;width:100%">
                                        <span  key="comment-basic-like">
                                            <LikeOutlined />
                                            <span style="padding-left: 8px; cursor: auto">
                                            {{ item.likeCount }}
                                            </span>
                                        </span>
                                        <span>
                                            <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                            <span style="margin-left: 10px;">{{ item.likeCount }}</span>
                                        </span>
                                        <span>
                                            <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                            <span style="margin-left: 10px;">{{ item.reviewCount}}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </a-row>
                        </div>
                        </div>
                    </div>
            
            <div style="border:solid 0.01cm;margin-left: 1%;text-align: left;padding: 10px;">
                <div v-for="item in review">
                    <a-comment>
                    <!-- <template #actions>
                        <span key="comment-basic-like">
                            <a-tooltip title="Like">
                            <template v-if="action === 'liked'">
                                <LikeFilled @click="like" />
                            </template>
                            <template v-else>
                                <LikeOutlined @click="like" />
                            </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                            {{ item.likeCount }}
                            </span>
                        </span>
                       
                        
                    </template> -->
                    <template #author>
                    <a>{{ item.user.userName }}</a>
                    </template>
                    <template #avatar>
                    <a-avatar :src=item.user.userAvatar />
                    </template>
                    <template #content>
                    <p>
                        {{ item.content }}
                    </p>
                    </template>
                    <span>_________________________________________________________________________________________________________________________________________________________________________________________________</span>
                    
                </a-comment>
                </div>
                <br>
                <br>
                <br>
            </div>
            <div v-if="scrollTop>1000" style="position: fixed;bottom: 0;z-index: 99;width: max-content;margin-left: 10.5%;width: 60%;background-color:aliceblue;border-radius: 10px;padding: 10px;">
                <div style="display: flex;width: 100%;">
                    <a-button type="text" @click="showDialog()" style="height: 60px">😃</a-button>
                    <a-textarea  id="contents" v-model:value="commentContent"  cols="30" rows="2" style="margin-left: 10px;bottom: 0;height: 60px;overflow-y: auto;width: 100%;" ></a-textarea>
                    
                    <div style="margin-left: -0.75%;background-color: aliceblue;position: fixed;bottom: 70px;">  
                        <EmojiPicker id="emojis" v-model="emoji" @select="selectEmoji($event)" :pickerPlacement='top' :searchEmojisFeat="false" style="display: none;overflow-y: auto;height: 300px;width: 360px;"/>
                    </div>
                    
                    <div style="margin: auto;">
                        <a-button type="primary" style="margin-left: 10px;width:85px;" @click="sendComment">发送</a-button>
                    </div>
                    
                </div>
            </div>
            
            </div>
            <div v-if="values=== 'notices'" style=";min-height: 700px;background-color: white;width: 90%;margin-left: 10%;width: 80%;;text-align:center">
                <div style="text-align:left;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 0%;border-radius:10px">
                <a-row v-for="item in noticeList" @click="toNoticeDetail(item.id)" class="spots">
                <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 30px;">
                    <img :src=item.coverUrl style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 30%;margin-top: -200px;width: max-content;float: left;">
                        <span style="font-size: 20px;">{{ item.title }}</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;display: flex;">
                                <a-avatar class="ant-dropdown-link"  style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img :src="item.user.userAvatar" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">{{ item.user.userName }}</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">{{ item.intro }}</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;margin-top: -20px;">
                            
                           
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                <span style="margin-left: 10px;">{{ item.viewCount }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                </a-row>
                <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
            </div>
            </div>
            </div>
            <div v-if="values=== 'items'" style=";min-height: 700px;background-color: white;width: 90%;margin-left: 10%;width: 80%;;text-align:center">
                <div style="float: left;margin-top: 40px;margin-left: 20px;width: 100%;">
                    <a-radio-group ref="groups" v-model:value="purchase" size="large" change="changes" style="float: left;margin-left: 40px;">
                        <a-radio-button class="exchange" ref="exchanges" value="exchange" >积分兑换</a-radio-button>
                        <a-radio-button class="purchase" ref="purchases" value="purchase">线上购买</a-radio-button>
                    </a-radio-group>
                    <div style="float:right;margin-right: 15%;margin-top: 40px;">
                        <a-input-search   class="ant-dropdown-link" v-model:value="info" placeholder="请输入想查询的内容" id="MainSearch" size="large"/>
                    </div>
                    
                </div>
                <br>
                <div style="margin-top: 120px;">
                    <div v-for="selection in selections" key="selection">
                            <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                            <a-col :span="6.5" v-for="column of 4" key="column">
                                <a-card hoverable style="width: 300px;border-radius: 10px;">
                                    <template #cover>
                                    <img
                                        
                                        src="https://img14.360buyimg.com/n7/jfs/t1/187265/35/32321/43201/64008f01F1081ce7c/808779cce08abe06.jpg"
                                        style="width: 300px;height:270px;overflow: hidden;border-radius: 10px;"
                                    />
                                    </template>
                                <div>
                                    <span style="float:left;font-weight: 500;">52TOYS Panda Roll</span>
                                </div>        
                                <br>
                                <div>
                                    <span style="text-align: left;float:left">
                                        生日礼物熊猫潮玩手办 单只 52TOYS Panda Roll日常第二弹系列盲盒 生日礼物熊猫潮玩手办
                                    </span>
                                </div>
                                </a-card>
                            </a-col>
                        </a-row>
                    </div>
                    <a-pagination v-model:current="current" :total="50" show-less-items />
                    <br>
                </div>
            </div>
            <br>
            
        </div>
    </div>
    
            
            
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { LikeOutlined } from '@ant-design/icons-vue';
import {computed,onBeforeUnmount,onMounted,ref, watch} from 'vue'
import { reactive } from 'vue';
import md from 'markdown-it'
import {useRouter} from 'vue-router'
import { useCounterStore } from '../../pinia';
import { storeToRefs } from 'pinia';
import { EmojiPicker } from 'vue3-twemoji-picker-final'
import {officialGetCommend,officialGetCommendData } from '../../api/official/official';
import { officialGetIntroByIdData,officialGetIntroById } from '../../api/official/official';
import { officialGetResourceList,officialGetResourceListData,officialGetResourceDetailByIdData,officialGetResourceDetailById } from '../../api/official/officialResource';
import {officialGetReviewListData,officialGetReviewList,officialReviewAddData,officialReviewAdd} from '../../api/official/officialReview'
import { message } from 'ant-design-vue';
import { officialGetNoticeById, officialGetNoticeByIdData, officialGetNoticeList, officialGetNoticeListData } from '../../api/official/officialNotification';
const load = useCounterStore();
const {scenicDetail,spotDetail,notificationDetail} = storeToRefs(load);
const spotsDeatil = ref()
const noticeList = ref()
let oldScrollTop: number = 0; // 记录上一次滚动结束后的滚动距离
const scrollTop = ref<number>(0); // 记录当前的滚动距离
const scrollFixedStatus = ref<boolean>(true);
const review = ref()
const emoji = ref()
const commentContent = ref()
const showDialog = ()=>{
    if(document.getElementById("emojis")?.style.display === "none"){
        document.getElementById("emojis")!.style.display = ""
    }else{
        console.log('aaaa')
        document.getElementById("emojis")!.style.display = "none"
    }     
}
const top=ref("top")
const selectEmoji=(e:any)=>{
    document.getElementById("contents")!.value=document.getElementById("contents")!.value +  e.i
    console.log(e.i)
}
const sendComment=()=>{
    let msg:officialReviewAddData={
        content: commentContent.value,
        reviewObjId: scenicDetail.value.id,
        reviewObjType: 1//官方类型
    }
    officialReviewAdd(msg).then((res)=>{
        console.log(res.data.data)
        console.log(commentContent.value)
        if(res.data.code===0){
            message.success('点评成功！')
            commentContent.value = ''
            let msg2:officialGetReviewListData={
                reviewObjId: scenicDetail.value.id,
                sortField: ''
            }
            officialGetReviewList(msg2).then((res)=>{
                review.value = res.data.data.records
                console.log(review.value)
            })
        }
    })
}
const recommendTravel = ref()
onMounted(() => {
  let msg:officialGetCommendData={
    current: 0,
    pageSize: 4,
    sortField: '',
    typeId: 1//官方类型，1为景点
    }
  officialGetCommend(msg).then((res)=>{
    console.log(res.data.data)
    recommendTravel.value = res.data.data
  })
  let msg2:officialGetReviewListData={
    reviewObjId: scenicDetail.value.id,
    sortField: ''
}
officialGetReviewList(msg2).then((res)=>{
    review.value = res.data.data.records
    console.log(review.value)
})
  handleScroll();
})
const ScenicName = scenicDetail.value.officialName
const values = ref('scenicIntroduction')
const options = reactive({
    width: "100%", //播放器高度
    height: "60%", //播放器高度
    color: "#409eff", //主题色
    title: "", //视频名称
    
    src: scenicDetail.value.videoUrl, //视频源
    muted: false, //静音
    webFullScreen: false,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: false, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false, //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns: [
      "audioTrack",
      "quality",
      "speedRate",
      "volume",
      "setting",
      "pip",
      "pageFullScreen",
      "fullScreen",
    ], //显示所有按钮,
  });
const recommend = ref('recommendWrite')
const markdown =scenicDetail.value.detail
const mds = new md()
let markdowns = computed(()=>(mds.render(markdown)))
// 这里是咨询通知部分
const notices = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    commentCount:200,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
]
// 周边
const groups = ref<any>()
const purchase = ref<string>('purchase')
const exchanges = ref<any>()
const purchases = ref<any>()
const changes = ()=>{
    if(groups.value == purchases.value){
    }
}
// 这里是卡片的数据
const selections=[
            {name:"热点景区"},
            {name:"优质游记"},
            {name:"热门团队"},
            {name:"周边商城"},
        ]
const current=ref(1)
const router = useRouter()
const toSpotContent = (id:number,resourceDetailId:number)=>{
    let msg:officialGetResourceDetailByIdData={
        offResId: id,
        detailId: resourceDetailId
    }
    officialGetResourceDetailById(msg).then((res)=>{
        console.log(res.data.data)
        spotDetail.value = res.data.data
    })
    router.push({
    path:'./ScenicContent'
  })

}
const toTravelDeatil=(id:number)=>{
    let msg:officialGetIntroByIdData={
    detailId: 1, //这里是登录的用户的id
    offId: id//官方的id
  }
  officialGetIntroById(msg).then((res)=>{
    console.log(res.data.data)
    scenicDetail.value = res.data.data
  })
  console.log(scenicDetail.value)
  window.open('./ScenicDetail')
}
const spotIntro=()=>{
    let msg:officialGetResourceListData={
        intro: '',
        sortField: '',
        title: ''
    }
    officialGetResourceList(msg).then((res)=>{
        spotsDeatil.value = res.data.data.records
        console.log(spotsDeatil.value)
        console.log(spotsDeatil.value[0].coverUrl)
    })
}
//滚动
const handleScroll=()=>{
    window.addEventListener('scroll', () => {
                scrollTop.value = window.scrollY;
            });
}
onBeforeUnmount(() => {
            window.removeEventListener('scroll', () => {}); // 离开当前组件别忘记移除事件监听
        });
watch(() => scrollTop.value,(newValue,oldValue)=>{
        setTimeout(() => {
                        if (newValue === window.scrollY) {
                            // 延时执行后当newValue等于window.scrollY，代表滚动结束
                            // console.log('滚动结束');
                            oldScrollTop = newValue; // 每次滚动结束后都要给oldScrollTop赋值
                            // scrollFixedStatus.value = true;
                        }
                    }, 20); // 必须使用延时器，否则每次newValue和window.scrollY都相等，无法判断，20ms刚好大于watch的侦听周期，故延时20ms
                    if (oldScrollTop === oldValue) {
                        scrollFixedStatus.value = false;
                        // 每次滚动开始时oldScrollTop与oldValue相等
                        // console.log('滚动开始');
                    }
            }
)
const noticeIntro=()=>{
    let msg:officialGetNoticeListData={
    }
    officialGetNoticeList(msg).then((res)=>{
        noticeList.value = res.data.data.records
        console.log(noticeList.value)
    })
}
const toNoticeDetail=(id:number)=>{
    let msg:officialGetNoticeByIdData={
        id: id
    }
    officialGetNoticeById(msg).then((res)=>{
        spotDetail.value = res.data.data
        console.log(spotDetail.value)
    })
    router.push({
        path:'./ScenicContent'
    })
}
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
  width: 50px;
  height: 50px;
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
/* 选项 */
.searchButton:hover{
    background-color: blueviolet;
    color: aliceblue;
}
.spots:hover{
    cursor: pointer;
    background-color: rgb(133, 197, 237);
    animation:fadenums 1s 1;
    border-radius: 20px;
}
.recommend:hover{
    cursor: pointer;
    background-color: rgb(133, 197, 237);
    animation:fadenums 1s 1;
    border-radius: 20px;
}
@keyframes fadenums{
    0%{background: white};
    100%{opacity: rgb(152, 186, 224);}
}
</style>