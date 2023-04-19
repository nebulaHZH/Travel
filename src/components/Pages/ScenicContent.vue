<template>
    <div>
        <div style="width: 100%;height:200px">
            <div class="top">
                <div style="width: max-content;position: relative;">
                    <img class="head" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100" alt="" >
                    <span class="myName" style="">骆驼驼Mango</span>
                    <span class="motor">2023.3.29</span>
                    
                </div>
                <div style="float: right;margin-top: -100px;margin-right: 10%;">
                    <a-button @click="chageLikeState()"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ getLikes }}</a-button>
                </div>
                
            </div>
            <div>
                <div style="margin-left: 10%;width: 80%;margin-top: 20px;text-align: left;border: solid 0.01cm;padding: 20px;">
                        <!-- 对应的景区视频 -->
                        <div style="margin-top: 50px;">
                            <vue3VideoPlay
                                
                                v-bind="options"
                                poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
                            />
                        </div>
                        <div style="margin-top: 40px;">
                            <span style="font-size: larger;padding: 10px;background-color: blueviolet;color: white;border-radius: 5px;"   >{{ SpotName }}</span>

                        </div>
                        <div>
                        <p style="margin-top: 20px;width: 100%;" v-html="markdowns"></p>
                    </div>
                </div>
                <div style="margin-left: 10%;width: 80%;border: solid 0.01cm;padding: 20px;text-align: left;">
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
            
            <div style="width: 80%;border:solid 0.01cm;margin-left: 10%;text-align: left;padding: 10px;">
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
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed,ref} from 'vue'
import { reactive,defineComponent } from 'vue';
import md from 'markdown-it'
import { LikeOutlined,LikeFilled, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
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

const values = ref('scenicIntroduction')
// 景点展示部分
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
const recommend = ref('recommendWrite')
const options = reactive({
    width: "100%", //播放器高度
    height: "60%", //播放器高度
    color: "#409eff", //主题色
    title: "", //视频名称
    src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
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
const SpotName = '小石头'
let markdowns = computed(()=>(mds.render(markdown)))
const getLikes = ref('关注')
</script>

<style scoped>
/* 选项 */
.searchButton:hover{
    background-color: blueviolet;
    color: aliceblue;
}
.head{
    width: 100px;
    margin-top: 100px;
    margin-left: 100px;
    height:100px;
    border: solid;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
.myName{
    margin-left:30px;
    font-weight: 600;
    margin-top: 120px;
    position: absolute;
    width: max-content;
}
.apply{
    margin-left:400px;
    font-weight: 600;
    margin-top: 115px;
    position: absolute;
    width: max-content;
    
}
.top{
    background-image: url('https://img.zcool.cn/tubelocation/844564131f7d000e991000e46abc.jpg?x-oss-process=image/format,webp/quality,q_100');
    height: max-content;
    padding: 0;
}
.motor{
    
    margin-top: 160px;
    position: absolute;
    width: max-content;
    width: 200px;
    border-radius: 10px;
}

</style>