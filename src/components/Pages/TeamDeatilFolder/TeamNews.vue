<template>
    <div>
        <div class="SendMessage">
            <a-textarea id="contents" class="ContentArea" name=""  cols="30" rows="3" style="height: 30px;overflow-y: auto;" v-model:value="content"></a-textarea>
            <br>
            <a-upload v-model:file-list="fileList1" style="width: 50%;" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture" class="upload-list-inline">
                <a-button id="upPictures">
                    <upload-outlined></upload-outlined>
                    上传图片
                </a-button>
            </a-upload>
            <br>
            <br>
            <br>
            <br>
            <a-button type="text" @click="showDialog()" style="float: right; margin-top: -100px;margin-right: 70px;">😃</a-button>
            <div style="float: right;position: absolute;margin-left: 55%;margin-top: -65px;z-index: 999;background-color: aliceblue;border-radius: 20px;">  
                <EmojiPicker id="emojis" v-model="emoji" @select="selectEmoji($event)" :searchEmojisFeat="false" style="display: none;overflow-y: auto;height: 300px;width: 360px ;;"/>
            </div>
            <div>
                <a-button type="primary" style="float: right;margin-top: -100px;margin-left: 10px;" @click="sendNews">发送</a-button>
            </div>
            
        </div>
        <div style="text-align: left;">
            <a-button style="margin-left: 80%;" type="primary" @click="refreshNews">刷新动态</a-button>
        </div>
        
        <div  style="background-color: rgb(247, 223, 217);text-align:left;margin-left: 10%;border: solid 0.01cm;padding:10px;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div v-for="item in newsList" style="width: 100%;position: relative;">
                    <div style=";padding:20px">
                        <img class="newHead" :src="item.user.userAvatar" alt="" >
                        <span style="font-weight: 600;margin-top: 120px;position: absolute;width: 100%;">{{item.user.userName}}</span>
                        <div style="box-shadow: 2px 2px;background-color: rgb(180, 211, 243);width: 100%;;padding: 10px;border-radius: 5px;">
                            <pre style="width:100%;white-space: pre-wrap;word-wrap: break-word">{{ item.content }}</pre>
                            <div  style="margin-left: 1%;margin-right: 1%;">
                                <a-row  >
                                    <a-col v-for="ss in 1">
                                        <img  src="https://note.mafengwo.net/img/80/ab/91dd3de62487b946b1ff2815303722b4.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt="" style="width: 150px;height: 150px;margin: 20px;">
                                    </a-col>
                                    <a-col v-for="ss in 1">
                                        <img  src="https://note.mafengwo.net/img/b8/5f/a44aedded4ad2a353c92f4fe776f5acb.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt="" style="width: 150px;height: 150px;margin: 20px;">
                                    </a-col>
                                </a-row>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <br>
                    <br>
                </div>
                <div v-if="newsList.length === 0" style="margin-left: 45%;">
                    <a-span>暂无动态消息</a-span>
                </div>
            </div>
            
            <br>
    </div>
</template>

<script setup lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { watch,ref, onMounted } from 'vue';
import type { UploadProps } from 'ant-design-vue';
import { EmojiPicker } from 'vue3-twemoji-picker-final'
import { useCounterStore } from '../../../pinia';
import { storeToRefs } from 'pinia';
import { teamNewsList, teamNewsListData,teamNewsPublishData,teamNewsPublish } from '../../../api/team/teamNews';
const load = useCounterStore()
const {teamDetails,newsList} = storeToRefs(load)
const emoji = ref()
// 文本框中的数据
const content = ref('')
const showDialog = ()=>{
    if(document.getElementById("emojis")?.style.display === "none"){
        document.getElementById("emojis")!.style.display = ""
    }else{
        document.getElementById("emojis")!.style.display = "none"
    }     
}

const selectEmoji=(e:any)=>{
    document.getElementById("contents")!.value=document.getElementById("contents")!.value +  e.i
    console.log(e.i)
} 
// 上传图片部分
const fileList1 = ref<UploadProps['fileList']>();
watch(fileList1,(newVal, oldVal) =>{
    if(newVal!.length>=4){
        document.getElementById("upPictures")!.disabled = "false"
    }
    else if(newVal!.length<4){
        document.getElementById("upPictures")!.disabled = ""
    }
})
//meoji部分

// 进入时请求最新的动态
onMounted(() => {
    refreshNews();
})
//刷新动态：
const refreshNews=()=>{
    const l:teamNewsListData={
        sortField: 'create_time',
        teamId: teamDetails.value.id,
        current: 0,
        pageSize: 5
    }
    teamNewsList(l).then((res)=>{
        newsList.value = res.data.data.records
        console.log(newsList.value.length)
    })
}
// 发送动态消息
const sendNews=()=>{
    const n:teamNewsPublishData={
        content: content.value,
        imageUrl: '123.com',
        teamId: teamDetails.value.id
    }
    teamNewsPublish(n).then((res)=>{
        console.log(res.data)
        console.log(content.value)
    })
}
</script>

<style lang="scss" scoped>
.SendMessage{
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    text-align: left;
    .ContentArea{
        min-height: 100px;
        overflow-y: auto;
    }
    /* tile uploaded pictures */
    .upload-list-inline :deep(.ant-upload-list-item) {
    float: left;
    width: 200px;
    margin-right: 8px;
    }
    .upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
    float: right;
    }
}
.newHead{
    width: 100px;
    margin-top: 100px;
    margin-left: 10px;
    height:100px;
    border: solid 0.01cm;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
.messageList{
    float: left;
    padding: 0;
    border-radius: 5px;
    height: 500px;
    overflow-y: auto;
    border-width: 0.005cm;
}
</style>