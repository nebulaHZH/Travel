<template>
    <div>
        <div style="width: 100%;height:200px">
            <div class="top">
                <div style="width: max-content;position: relative;">
                    <img class="head" :src="writer.header" alt="" >
                    <span class="myName" style="">{{ writer.name }}</span>
                    <span class="motor">发表时间：{{ writer.time }}</span>                
                </div>
                <div style="float: right;margin-top: -100px;margin-right: 10%;">
                    <a-button @click="getLikes"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ writer.checkLike }}</a-button>
                </div>
                
            </div>
            <div>
                <div style="margin-left: 10%;width: 80%;margin-top: 20px;text-align: left;border: solid 0.01cm;padding: 20px;">
                        <div style="margin-top: 40px;">
                            <span style="font-size: larger;padding: 7px;background-color:cornflowerblue ;color: white;" >{{ NotesName }}</span>
                        </div>
                        <div>
                            <p style="margin-top: 20px;width: 100%;" v-html="markdowns"></p>
                        </div>
                </div>
                <div style="margin-left: 10%;width: 80%;border: solid 0.01cm;padding: 20px;text-align: left;">
                        <!-- 推荐标签 -->
                        <a-button style=";text-align:center;width: 120px;" class="searchButton"  value="recommendWrite">推荐游记</a-button>
                        <!-- 相关推荐 -->
                        <div v-if="recommend==='recommendWrite'" style="margin-top: 20px;width: 100%;">
                            <div style="width: 100%;background-color: white;width: 88%%;border-radius:10px">
                            <a-row v-for="item in recommends" @click="" class="showWriterDetail" style="width: 100%;">
                            <div @click="notesDetail" style="text-align: left;background-color: transparent;; height: max-content;margin-top: 10px;margin-bottom: 10px;width:90%;" :id="item.id">
                                
                                <img :src="item.imgsrc" style="border-radius: 10px;margin-left: 10px;width: 150px;height:100px;overflow: hidden;float: left;">
                                <div style=";margin-left:200px;width: 100%;">
                                    <span style="font-size: 16px;">{{ item.noteName }}</span>
                                    <div style="width: 100%;height:max-content">
                                        <div style="text-align: left;position: relative;display: flex;">
                                            <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                                <template #icon>
                                                <img :src="item.writer.header" alt="">
                                                </template>
                                            </a-avatar>
                                            <span style="margin-left:10px;margin-top: 8px;">{{ item.writer.name }}</span>
                                        </div>
                                    </div>
                                    <div style="margin-left: 40%;margin-top: 20px;width: 400px;">
                                        <span  key="comment-basic-like">
                                            <LikeOutlined />
                                            <span style="padding-left: 8px; cursor: auto">
                                            {{ item.likecount }}
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
                <div v-for="item in comments">
                    <a-comment>
                        <template #actions>
                            <span key="comment-nested-reply-to" @click="replyto(item.askername,item.askcontent)">回复</span>
                            <span @click="unfold">展开</span>
                        </template>
                        <template #author>
                            <a>{{ item.askername }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar :src="item.askerheader" alt="Han Solo" />
                        </template>
                        <template #content>
                            <p>{{ item.askcontent }}</p>
                        </template>
                    <a-comment v-for="i in item.answer">
                        <template #actions>
                            <span>回复</span>
                        </template>
                        <template #author>
                            <a>{{ i.answername }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar :src="i.answerheader" alt="Han Solo" />
                        </template>
                        <template #content>
                            <p>{{ i.answercontent }}</p>
                        </template>
                        <span>___________________________________________________________________________________________</span>
                    </a-comment>
                </a-comment>
                </div>
                
            </div>
            </div> 
        </div>
        <div style="position: fixed;bottom: 0;z-index: 99;width: max-content;margin-left: 10.5%;width: 60%;background-color:aliceblue;border-radius: 10px;padding: 10px;">
                <div style="display: flex;width: 100%;">
                    <a-button type="text" @click="showDialog()" style="height: 60px">😃</a-button>
                    <a-textarea  id="contents" v-model:placeholder="commentContent"  cols="30" rows="2" style="margin-left: 10px;bottom: 0;height: 60px;overflow-y: auto;width: 100%;" >sdsdadsdsada</a-textarea>
                    
                    <div style="margin-left: -0.75%;background-color: aliceblue;position: fixed;bottom: 70px;">  
                        <EmojiPicker id="emojis" v-model="emoji" @select="selectEmoji($event)" :pickerPlacement='top' :searchEmojisFeat="false" style="display: none;overflow-y: auto;height: 300px;width: 360px ;;"/>
                    </div>
                    
                    <div style="margin: auto;">
                        <a-button v-if="commentContent" style="margin-left: 10px;" @click="cancelReply">取消回复</a-button>
                        <a-button type="primary" style="margin-left: 10px;width:85px;">发送</a-button>
                    </div>
                    
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import {computed,getCurrentInstance,ref} from 'vue'
import { onMounted,defineComponent } from 'vue';
import md from 'markdown-it'
import { LikeOutlined,LikeFilled, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import _default from 'ant-design-vue';
import { EmojiPicker } from 'vue3-twemoji-picker-final'
// 评论回复
const replyto=(aksname:string,askcontent:string)=>{
    // 这里发送请求
    commentContent.value = "回复 " + aksname+":"
    console.log(commentContent.value)
}
// 取消回复
const cancelReply = ()=>{
    commentContent.value = ""
}
const commentContent = ref<string>()
const internalInstance = getCurrentInstance()
const emoji = ref()
const showDialog = ()=>{
    if(document.getElementById("emojis")?.style.display === "none"){
        document.getElementById("emojis")!.style.display = ""
    }else{
        document.getElementById("emojis")!.style.display = "none"
    }     
}
const top=ref("top")
const selectEmoji=(e:any)=>{
    document.getElementById("contents")!.value=document.getElementById("contents")!.value +  e.i
    console.log(e.i)
}
const comments = [
    {
        askername:'hhz',
        askerheader:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
        askcontent:'首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务',
        answer:[
            {
                answerheader:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
                answercontent:'首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务',
                answername:'撒大大',
            }
        ]
        
        
    },
    {
        askername:'hhz',
        askerheader:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
        askcontent:'首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务',
        answer:[
            {
                answerheader:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
                answercontent:'首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务',
                answername:'撒大大',
            }
        ]
        
        
    },
    {
        askername:'hhz',
        askerheader:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
        askcontent:'首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务',
        answer:[
            {
                answerheader:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
                answercontent:'首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务',
                answername:'撒大大',
            }
        ]
        
        
    }
]
const writer =ref({
    header:"https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100",
    name:'骆驼驼Mango',
    time:'2023.3.29',
    checkLike:'关注'
})

//评论
const unfold=(e:any)=>{
    // 展开先不做
    // let clickDom = e.currentTarget;
    // if(clickDom.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display==="none"){
    //     clickDom.parentElement.parentElement.parentElement.parentElement.nextElementSibling = ""
    // }else{
    //     clickDom.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display = "none"
    // }
    // clickDom.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display="none"
    // console.log(clickDom.parentElement.parentElement.parentElement.parentElement.nextElementSibling)
}
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
    {
        noteName:'哈夫曼树生成树XXXuys ',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    },
    {
        noteName:'哈夫曼树生成树XXXuys ',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    },
    {
        noteName:'哈夫曼树生成树XXXuys ',
        imgsrc:'https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg',
        cover:'是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。',
        title:'什么什么巴厘岛忘记了',
        link:'http://localhost:5173/NotesDetail',
        likecount:10,
        commentCount:321,
        browserCount:3123,
        id:'10101',
        islike:true,
        writer:{
            header:'https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg',
            name:'用户昵称'
        }
    }
]
const recommend = ref('recommendWrite')
const markdown = "# Vue 3 + TypeScript + Vite\n" +
            "\n" +
            "This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.\n" +
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
            "![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)\n"
const mds = new md()
const NotesName = '我未曾真的去过泉州'
let markdowns = computed(()=>(mds.render(markdown)))
const getLikes =(e:any)=>{
    console.log(e.target.innerText)
    if(e.target.innerText === '关 注'){
        writer.value.checkLike='取消关注'
        // 这里传数据给后端说已经关注了
    }else{
        writer.value.checkLike='关注'
        // 这里传数据给后端说取消关注
    }
    internalInstance?.update()
    console.log(writer)
}
// 当前点击的游记进入详情界面
const notesDetail=(e:any)=>{
    window.open('./NotesDetail','_blank')
}
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
    border: solid 0.01cm;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
.myName{
    margin-left:30px;
    font-weight: 600;
    font-size: 20px;
    margin-top: 120px;
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
    margin-left: 10px;
    position: absolute;
    width: max-content;
    width: 200px;
    font-size: 16px;
    border-radius: 10px;
}
.showWriterDetail:hover{
    cursor: pointer;
    background-color: rgb(201, 201, 201);
    animation:fadenums 1s 1;
    border-radius: 20px;
}
@keyframes fadenums{
    0%{background: white};
    100%{opacity: rgb(203, 203, 203);}
}
</style>