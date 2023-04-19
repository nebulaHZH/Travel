<template>
    <div>
        <div class="SendMessage">
            <a-textarea id="contents" class="ContentArea" name=""  cols="30" rows="3" style="height: 30px;overflow-y: auto;" ></a-textarea>
            <br>
            <a-upload v-model:file-list="fileList1" style="width: 50%;" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture" class="upload-list-inline">
                <a-button id="upPictures">
                    <upload-outlined></upload-outlined>
                    上传图片
                </a-button>
            </a-upload>
            <a-button type="text" @click="showDialog()" style="float: right; margin-top: -100px;margin-right: 70px;">😃</a-button>
            <div style="float: right;position: absolute;margin-left: 55%;margin-top: -65px;z-index: 999;background-color: aliceblue;border-radius: 20px;">  
                <EmojiPicker id="emojis" v-model="emoji" @select="selectEmoji($event)" :searchEmojisFeat="false" style="display: none;overflow-y: auto;height: 300px;width: 360px ;;"/>
            </div>
            <div>
                <a-button type="primary" style="float: right;margin-top: -100px;margin-left: 10px;">发送</a-button>
            </div>
            
        </div>
        <div  style="text-align:left;margin-left: 10%;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div v-for="item in newsMessage" style="width: max-content;position: relative;">
                    <img class="newHead" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,jpg/quality,q_100" alt="" >
                    <span style="margin-left:30px;font-weight: 600;margin-top: 120px;position: absolute;width: max-content;">{{item.writer}}</span>
                    <span style=" margin-left:30px;font-weight: 600;margin-top: 160px;position: absolute;width: max-content;">{{item.team}}</span>
                    <div style="margin-left: 60px;border: solid 0.01pc;padding: 10px;border-radius: 5px;">
                        <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word">豆瓣9.0、2.2亿的点击量、海量的媒体采访......11位分集导演纵览古今，从多个全然不同的角度切入，为动画呈现了动画是如何承载中国的文化传统以及哲学积淀。其中有着这样一部作品——它娓娓道来，极富想象力地展现了一位乡村少年质朴、有趣的童年图景，并由此引起了观众对于时光易逝、童年不再的乡愁与思索。这部作品，就是由刘毛宁执导的《中国奇谭》第四集——《乡村巴士带走了王孩儿和神仙》。 作者：动画学术趴 https://www.bilibili.com/read/cv22268997?from=category_0 出处：bilibili</pre>
                        <div  style="margin-left: 1%;margin-right: 1%;">
                            <a-row  >
                                <a-col v-for="ss in item.imgs">
                                    <img  :src="ss.url" alt="" style="width: 150px;height: 150px;margin: 20px;">
                                </a-col>
                            </a-row>
                            
                        </div>
                    </div>
                    
                    
                    <br>
                    <br>
                </div>
                
            </div>
            <br>
    </div>
</template>

<script setup lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { watch,ref } from 'vue';
import type { UploadProps } from 'ant-design-vue';
import { EmojiPicker } from 'vue3-twemoji-picker-final'

const emoji = ref()
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
//动态消息部分
const newsMessage = [
    {
        writer:'h2asx',
        team:'撒啊了',
        imgs:[//只能上传四张图片
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
        ]
    },
    {
        writer:'h2asx',
        team:'撒啊了',
        imgs:[
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            ]
    },
    {
        writer:'h2asx',
        team:'大苏打',
        imgs:[
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
        ]
    },
    {
        writer:'h2asx',
        team:'8iyuj',    
        imgs:[
        ]
    }
]
// 上传图片部分
const fileList1 = ref<UploadProps['fileList']>([
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ]);
watch(fileList1,(newVal, oldVal) =>{
    if(newVal!.length>=4){
        document.getElementById("upPictures")!.disabled = "false"
    }
    else if(newVal!.length<4){
        document.getElementById("upPictures")!.disabled = ""
    }
})
//meoji部分
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
    border: solid;
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