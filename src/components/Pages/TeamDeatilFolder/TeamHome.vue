<template>
    <div class="TeamIntroduction">
            <div class="TeamIntroductionLeft">
                <br>
                <span style="font-weight: 600;">{{ teamDetails.user.userName }}</span>
                <br>
                <img class="TeamCreaterIcon" :src=teamDetails.user.userAvatar alt="">
                <br>
                <a-button style="margin-top: 10px;" type="primary">显示更多成员</a-button>
            </div>
            <div class="TeamIntroductionRight">
                <br>
                <span style="font-weight: 600;">团队简介：</span>
                <br>
                <br>
                <pre class="TeamContent">{{ teamDetails.intro }}</pre>
            </div>
        </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCounterStore } from '../../../pinia';
import { storeToRefs } from 'pinia';
const load = useCounterStore()
const {teamDetails} = storeToRefs(load)
onMounted(() => {
    console.log(teamDetails.value)
})
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