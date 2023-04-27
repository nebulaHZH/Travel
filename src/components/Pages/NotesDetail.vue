<template>
    <div>
        <div style="width: 100%;height:200px">
            <div class="top">
                <div style="width: max-content;position: relative;">
                    <img class="head" :src="writer.header" alt="" >
                    <span class="myName" style="">{{ travelDetail?.title }}</span>
                    <span class="motor">发表时间：{{ travelDetail?.createTime }}</span>                
                </div>
                <div style="float: right;margin-top: -100px;margin-right: 10%;">
                    <a-button @click="getLikes"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ travelDetail?.isFollowed }}</a-button>
                </div>
                
            </div>
            <div>
                <div style="margin-left: 10%;width: 80%;margin-top: 20px;text-align: left;border: solid 0.01cm;padding: 20px;">
                        <div style="margin-top: 40px;">
                            <span style="font-size: larger;padding: 7px;background-color:cornflowerblue ;color: white;" >{{ travelDetail?.userName }}</span>
                        </div>
                        <div>
                            <p style="margin-top: 20px;width: 100%;" v-html="markdowns"></p>
                        </div>
                </div>
                <div style="margin-left: 10%;width: 80%;border: solid 0.01cm;padding: 20px;text-align: left;">
                        <!-- 推荐标签 -->
                        <a-button style=";text-align:center;width: 120px;" class="searchButton"  value="recommendWrite">推荐游记</a-button>
                        <!-- 相关推荐 -->
                        <div style="margin-top: 20px;width: 100%;">
                            <div style="width: 100%;background-color: white;width: 88%%;border-radius:10px">
                            <a-row v-for="item in travelRecommendList" @click="" class="showWriterDetail" style="width: 100%;">
                            <div @click="notesDetail(item.id)" style="text-align: left;background-color: transparent;; height: max-content;margin-top: 10px;margin-bottom: 10px;width:90%;">
                                
                                <img :src="item.coverUrl" style="border-radius: 10px;margin-left: 10px;width: 150px;height:100px;overflow: hidden;float: left;">
                                <div style=";margin-left:200px;width: 100%;">
                                    <span style="font-size: 16px;">{{ item.title }}</span>
                                    <div style="width: 100%;height:max-content">
                                        <div style="text-align: left;position: relative;display: flex;">
                                            <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                                <template #icon>
                                                <img :src="item.userAvatar" alt="">
                                                </template>
                                            </a-avatar>
                                            <span style="margin-left:10px;margin-top: 8px;">{{ item.userName }}</span>
                                        </div>
                                    </div>
                                    <div style="margin-left: 40%;margin-top: 20px;width: 400px;">
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
                                            <span style="margin-left: 10px;">{{ item.viewCount }}</span>
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
                            <span key="comment-nested-reply-to" @click="replyto(item.topCommentVO.id,item.topCommentVO.userName,item.topCommentVO.userId)">回复</span>
                            <span @click="unfold">展开</span>
                        </template>
                        <template #author>
                            <a>{{ item.topCommentVO.userName }}</a>
                            
                        </template>
                        <template #avatar>
                            <a-avatar :src="item.topCommentVO.userAvatarUrl" />
                        </template>
                        <template #content>
                            <p>{{ item.topCommentVO.content }}</p>
                        </template>
                    <a-comment v-for="i in item.commentVOS">
                        <template #actions>
                            <span  @click="replyto(item.topCommentVO.id,i.userName,i.userId)">回复</span>
                        </template>
                        <template #author>
                            <a>{{ i.userName }}</a>
                            <span>  回复</span>
                            <a>{{ i.parentUserName }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar :src="i.userAvatarUrl" alt="Han Solo" />
                        </template>
                        <template #content>
                            <p>{{ i.content }}</p>
                        </template>
                        <span>___________________________________________________________________________________________</span>
                    </a-comment>
                </a-comment>
                </div>
                
            </div>
            </div> 
            <br>
            <br>
            <br>
            <br>
        </div>
        <div style="position: fixed;bottom: 0;z-index: 99;width: max-content;margin-left: 10.5%;width: 60%;background-color:aliceblue;border-radius: 10px;padding: 10px;">
                <div style="display: flex;width: 100%;">
                    <a-button type="text" @click="showDialog()" style="height: 60px">😃</a-button>
                    <a-textarea  id="contents" v-model:placeholder="commentContent"  cols="30" rows="2" style="margin-left: 10px;bottom: 0;height: 60px;overflow-y: auto;width: 100%;" v-model:value="text"></a-textarea>
                    
                    <div style="margin-left: -0.75%;background-color: aliceblue;position: fixed;bottom: 70px;">  
                        <EmojiPicker id="emojis" v-model="emoji" @select="selectEmoji($event)" :pickerPlacement='top' :searchEmojisFeat="false" style="display: none;overflow-y: auto;height: 300px;width: 360px ;;"/>
                    </div>
                    
                    <div style="margin: auto;">
                        <a-button v-if="commentContent" style="margin-left: 10px;" @click="cancelReply">取消回复</a-button>
                        <a-button type="primary" style="margin-left: 10px;width:85px;" @click="sendMessage">发送</a-button>
                    </div>
                    
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed,getCurrentInstance,inject,ref, watch} from 'vue'
import { onMounted,defineComponent } from 'vue';
import md from 'markdown-it'
import { LikeOutlined,LikeFilled, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import _default, { message } from 'ant-design-vue';
import { EmojiPicker } from 'vue3-twemoji-picker-final'
import { searchTravelById } from '../../api/atricle/travel';
import { useCounterStore } from '../../pinia';
import {TravelRecommendListData,TravelRecommendList} from '../../api/DataService/DataUpload'
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { commentAddRequest, commentAddRequestData, commentQueryRequest, commentQueryRequestData } from '../../api/atricle/comment';
const load = useCounterStore();
const comments = ref()
const text = ref()
const travelDetail = ref()
const travelRecommendList = ref()
const { query } = useRoute();
let markdowns = ref()
onMounted(()=>{
    console.log('aaaa',query.id)
    searchTravelById(query.id).then((res)=>{
        console.log(res.data.data)
        travelDetail.value = res.data.data
        console.log(travelDetail.value.tag)
        markdowns = computed(()=>(mds.render(travelDetail?.value?.detail)))
    })
    let msg:TravelRecommendListData={
        current: 0,
        pageSize: 4,
        rcmdType: 1,
        travelType: 1,
        tag:travelDetail.value?.tag
    }
    TravelRecommendList(msg).then((res)=>{
        travelRecommendList.value = res.data.data.dataPage.records
        console.log(res.data.data.dataPage.records)
    })
    
    let msg2:commentQueryRequestData={
        commentObjId: query.id,
        commentObjType: 1
    }
    commentQueryRequest(msg2).then((res)=>{
        console.log(res.data.data.records)
        comments.value = res.data.data.records
    })
})
// 评论回复
const topId = ref(0)
const userId = ref(0)
const replyto=(Id:number,askname:string,uId:number)=>{
    // 这里发送请求
    commentContent.value = "回复 " + askname+":"
    topId.value = Id
    
}
const sendMessage=()=>{
    if(text.value === ""){
        message.error("请填写内容！")
    }
    else{
        console.log(commentContent.value)
        let msg:commentAddRequestData={
            commentObjId: travelDetail.value?.id,
            commentObjType: 1,
            content: text.value,
            parentUserId: travelDetail.value.userId,
            topId: topId.value
        }
        commentAddRequest(msg).then((res)=>{
            console.log(res)
            
            text.value = ""
            alert("发送成功！")
            let msg2:commentQueryRequestData={
        commentObjId: travelDetail.value?.id,
        commentObjType: 1
    }
    commentQueryRequest(msg2).then((res)=>{
        console.log(res.data.data.records)
        comments.value = res.data.data.records
    })
        })
    }
}
watch(text.value,(newValue,oldValue)=>{
    let msg2:commentQueryRequestData={
        commentObjId: travelDetail.value?.id,
        commentObjType: 1
    }
    commentQueryRequest(msg2).then((res)=>{
        console.log(res.data.data.records)
        comments.value = res.data.data.records
    })
})
// 取消回复
const cancelReply = ()=>{
    commentContent.value = ""
    topId.value = 0
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

const mds = new md()
const getLikes =(e:any)=>{
    console.log(e.target.innerText)
    if(e.target.innerText === '0'){
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
const router = useRouter()
const notesDetail=(id:number)=>{
    const url=router.resolve({
        path:'./NOtesDetail',
        query:{
            id:id
        }
    })
    window.open(url.href)
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
    margin-left: 0px;
    position: absolute;
    width: max-content;
    width: 500px;
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