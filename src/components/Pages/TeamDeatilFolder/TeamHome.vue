<template>
    <div class="TeamIntroduction">
            <div class="TeamIntroductionLeft">
                <br>
                <span style="font-weight: 600;">团队创始人</span>
                <br>
                <img class="TeamCreaterIcon" src="https://p1-q.mafengwo.net/s19/M00/A0/80/CoNIZWP-3z17nUkHAAJI1k3Y_Xs.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" alt="">
                <br>
                <a-button style="margin-top: 10px;" type="primary">显示更多成员</a-button>
            </div>
            <div class="TeamIntroductionRight">
                <br>
                <span style="font-weight: 600;">团队简介：</span>
                <br>
                <br>
                <pre class="TeamContent">{{ TeamContent }}</pre>
            </div>
        </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const TeamContent = ref( "###### 系统分析：" +
            "   1.首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务" +
            "   2.在课堂上完成任务（做的快的可以直接验收）" +
            "   3.再上课时验收(根据任务大小看共三次课还是两次课)===>提交审核报告，会议纪要" +
            "      在老师审核报告期间指出问题后最后还是存在问题，则会扣分" +
            "###### *****审核报告：（无统一模板，在需求分析遇到的问题，如何发现的和如何解决的）===》只要最后报告完善就没问题\n")
</script>

<style scoped lang="scss">
.TeamNews{
    width: 80%;
    margin-left: 10%;
    border-radius: 10px;
    height: 600px;
    border: solid 0.01cm;
    overflow-y: auto;
}
.TeamIntroduction{
    
    .TeamIntroductionLeft{
        float: left;
        margin-left: 10%;
        
        .TeamCreaterIcon{
            margin-top: 10px;
            border-radius:50%;
            border: solid 0.01cm;
            width: 100px;
            height:100px;
            
        }
    }
    .TeamIntroductionRight{
        margin-top: 20px;
        margin-left: 30%;
        text-align: left;
        .TeamContent{
            width:900px;
            border: solid 0.01cm;
            padding: 20px;
            border-radius: 5px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    }
}

</style>