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
                    <a-radio-button class="searchButton" style="width: 120px;" value="spotIntrouduction">景点展示</a-radio-button>
                    <a-radio-button class="searchButton" style="width: 120px;" value="notices">咨询通知</a-radio-button>
                    <a-radio-button class="searchButton" style="width: 120px;" value="items">周边商城</a-radio-button>
                </a-radio-group>
            </div>
            <div v-if="values=== 'spotIntrouduction'" style="border-radius: 10px;background-color: white;width: 80%;border: solid 0.01cm;margin-left: 10%;;margin-right: 10%;">
                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 6%;border-radius:10px">
                    <a-row v-for="item in items">
                    <div @click="toSpotContent" class="spots" style="text-align: left;width: 96%;border-radius: 10px;height: max-content;margin-top: 30px;" :id="item.id">
                        <img src="https://note.mafengwo.net/img/ef/92/80c4ba85dd95f9ce82ef761f4f5d8621.jpeg?imageMogr2%2Fthumbnail%2F%21345x213r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21345x213%2Fquality%2F90" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                        <div style="margin-left: 400px;width: max-content;margin-top: 10px;width: 100%;">
                            <span style="font-size: 20px;">{{ item.name }}</span>
                            <span style="margin-top: 20px;margin-left:40%;width: 200px;background-color: blueviolet;color: white;" > **价 格：{{ item.price }}**</span>
                            
                            <div style="margin-top: 40px;min-width: 400px;">
                                <pre style="width:400px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                            </div>
                            <div style="position: absolute;margin-left: 35%;margin-top:5%">
                                <span  key="comment-basic-like">
                                    <LikeOutlined/>
                                    <span style="padding-left: 8px; cursor: auto">
                                    {{ item.likeCount }}
                                    </span>
                                </span> 
                                <span>
                                    <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                    <span style="margin-left: 10px;">{{ item.browserCount }}</span>
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
                                poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
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
                            <a-radio-button style=";text-align:center;width: 120px;" class="searchButton"  value="recommendWrite">推荐游记</a-radio-button>
                            <a-radio-button style="text-align:center;width: 120px;"  class="searchButton"  value="recommendHotel">推荐酒店</a-radio-button>
                            <a-radio-button style=";text-align:center;width: 120px;" class="searchButton"  value="recommendFood"> 推荐美食</a-radio-button>
                        </a-radio-group>
                        <!-- 相关推荐 -->
                        <div v-if="recommend==='recommendWrite'" style="margin-top: 20px;width: max-content;">
                            <div style="width: 100%;background-color: white;width: 88%%;border-radius:10px">
                            <a-row v-for="item in recommends">
                            <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 30px;width:400px;" :id="item.id">
                                
                                <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 150px;height:100px;overflow: hidden;float: left;">
                                <div style=";margin-left:200px;width: max-content;;">
                                    <span style="font-size: 16px;">巴厘岛 | 总有一个假日，要属于bali</span>
                                    <div style="width: 100%;height:max-content">
                                        <div style="text-align: left;position: relative;display: flex;">
                                            <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                                <template #icon>
                                                <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                                </template>
                                            </a-avatar>
                                            <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                                        </div>
                                    </div>
                                    <div style="margin-left: 100%;margin-top: 20px;width: 400px;">
                                        <span  key="comment-basic-like">
                                            <LikeOutlined />
                                            <span style="padding-left: 8px; cursor: auto">
                                            {{ item.likeCount }}
                                            </span>
                                        </span>
                                        <span>
                                            <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                            <span style="margin-left: 10px;">{{ item.commentCount }}</span>
                                        </span>
                                        <span>
                                            <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                            <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </a-row>
                        </div>
                        </div>
                    </div>
            
            <div style="border:solid 0.01cm;margin-left: 1%;text-align: left;padding: 10px;">
                <div v-for="item in 3">
                    <a-comment>
                    <template #actions>
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
                            {{ likes }}
                            </span>
                        </span>
                        <span key="comment-basic-dislike">
                            <a-tooltip title="Dislike">
                            <template v-if="action === 'disliked'">
                                <DislikeFilled @click="dislike" />
                            </template>
                            <template v-else>
                                <DislikeOutlined @click="dislike" />
                            </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                            {{ dislikes }}
                            </span>
                        </span>
                        
                    
                    <span key="comment-nested-reply-to">回复</span>
                    </template>
                    <template #author>
                    <a>发明吗</a>
                    </template>
                    <template #avatar>
                    <a-avatar src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="Han Solo" />
                    </template>
                    <template #content>
                    <p>
                        首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务
                    </p>
                    </template>
                    <a-comment>
                    <template #actions>
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
                            {{ likes }}
                            </span>
                        </span>
                        <span key="comment-basic-dislike">
                            <a-tooltip title="Dislike">
                            <template v-if="action === 'disliked'">
                                <DislikeFilled @click="dislike" />
                            </template>
                            <template v-else>
                                <DislikeOutlined @click="dislike" />
                            </template>
                            </a-tooltip>
                            <span style="padding-left: 8px; cursor: auto">
                            {{ dislikes }}
                            </span>
                        </span>
                        <span>回复</span>
                    </template>
                    <template #author>
                        <a>撒大大</a>
                    </template>
                    <template #avatar>
                        <a-avatar src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="Han Solo" />
                    </template>
                    <template #content>
                        <p>
                            首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务
                        </p>
                    </template>
                    
    
                    <span>___________________________________________________________________________________________</span>
                    
                    </a-comment>
                </a-comment>
                </div>
                
            </div>
        
            </div>
            <div v-if="values=== 'notices'" style=";min-height: 700px;background-color: white;width: 90%;margin-left: 10%;width: 80%;;text-align:center">
                <div style="text-align:left;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 0%;border-radius:10px">
                <a-row v-for="item in notices">
                <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 30px;" :id="item.id">
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 30%;margin-top: -200px;width: max-content;float: left;">
                        <span style="font-size: 20px;">巴厘岛 | 总有一个假日，要属于bali</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;margin-top: -20px;">
                            
                           
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                <span style="margin-left: 10px;">{{ item.browserCount }}</span>
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
import {computed,ref} from 'vue'
import { reactive } from 'vue';
import md from 'markdown-it'
import {useRoute,useRouter} from 'vue-router'
import { LikeFilled, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { defineComponent} from 'vue';
//评论
let s =  defineComponent({
  components: {
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined,
  }
})
const likes = ref<number>(0);
    const dislikes = ref<number>(0);
    const action = ref<string>();
        const like = () => {
      likes.value = 1;
      dislikes.value = 0;
      action.value = 'liked';
    };

    const dislike = () => {
      likes.value = 0;
      dislikes.value = 1;
      action.value = 'disliked';
    };

const ScenicName = ref('武当山')
const values = ref('scenicIntroduction')
// 景点展示部分
const items = [
    {name:'陈道长',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    price:2000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    price:2000,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    price:2000,
    commentCount:200,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    price:2000,
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    price:2000,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
]
const recommends = [
    {name:'陈道长',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    price:2000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    price:2000,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    price:2000,
    commentCount:200,
    id:'10103',
    islike:false},
]
const options = reactive({
    width: "100%", //播放器高度
    height: "60%", //播放器高度
    color: "#409eff", //主题色
    title: "", //视频名称
    
    src: "http://127.0.0.1:8080/kk.mp4", //视频源
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
const markdown = "# Vue 3 + TypeScript + Vite\n" +
            "\n" +
            "This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.\n" +
            "\n" +
            "## Recommended IDE Setup\n" +
            "\n" +
            "- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).\n" +
            "\n" +
            "## Type Support For `.vue` Imports in TS\n" +
            "\n" +
            "TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.\n" +
            "\n" +
            "If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:\n" +
            "\n" +
            "1. Disable the built-in TypeScript Extension\n" +
            "   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette\n" +
            "   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`\n" +
            "2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.\n" +
            "\n" +
            "\n" +
            "### 模式：\n" +
            "   第一节课：讲课\n" +
            "   第二节课：做实验\n" +
            "   第三节课：验收\n" +
            "#### 软件协同\n" +
            "   计划阶段暂停了\n" +
            "\n" +
            "##### 开发阶段：\n" +
            "   系统分析，系统实施，\n" +
            "\n" +
            "###### 系统分析：\n" +
            "   1.首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务\n" +
            "   2.在课堂上完成任务（做的快的可以直接验收）\n" +
            "   3.再上课时验收(根据任务大小看共三次课还是两次课)===>提交审核报告，会议纪要\n" +
            "      在老师审核报告期间指出问题后最后还是存在问题，则会扣分\n" +
            "###### *****审核报告：（无统一模板，在需求分析遇到的问题，如何发现的和如何解决的）===》只要最后报告完善就没问题\n" +
            "   1.用户类型有误\n" +
            "      写如何解决有误的方法\n" +
            "   2.**************\n\n" +
            "![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)\n"
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
const exchange = ref<string>('exchange')
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
const route = useRoute()
console.log(route.query)
const router = useRouter()
const toSpotContent = ()=>{
    router.push({
    path:'./ScenicContent',
    query:{
      msg:'这里要传的参数'
    }
  })
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
/* 选项 */
.searchButton:hover{
    background-color: blueviolet;
    color: aliceblue;
}
.spots:hover{
    background-color: rgb(188, 188, 188);
    cursor: pointer;
}
</style>