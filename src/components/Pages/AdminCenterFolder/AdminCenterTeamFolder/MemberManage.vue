<template>
    <div style="text-align: left ;">
        <div style="text-align: left;margin-left: 10px;margin-top: 10px;">
            <a-button class="btn" @click="visible=true">已加入</a-button>
            <a-button  class="btn" @click="visible=false"  style="">申请加入</a-button>
        </div>

        <div v-if="visible == true" style="margin-top: 40px;margin-left: 100px;" v-for="item in members" >
            <!-- //上传记得改为对应的url -->
            <img src="https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" class="head">
            <span style="margin-left: 30px;font-size: 16px;font-weight: 550;">{{ item.userName }}</span>
            <a-button style="margin-left: 50%;" class="btn">踢出团队</a-button>
        </div>
        <div v-else style="margin-top: 40px;margin-left: 100px;" v-for="item in members" >
            <img src="https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" class="head">
            <span style="margin-left: 30px;font-size: 16px;font-weight: 550;">{{ item.userName }}</span>
            <a-button style="margin-left: 50%;" class="btn">同意</a-button>
            <a-button type="danger" class="btn">拒绝</a-button>
        </div>
        <a-pagination style="margin-top:20px;margin-left: 30%;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCounterStore } from '../../../../pinia';
import { storeToRefs } from 'pinia';
import { teamQueryNumbers } from '../../../../api/team/teamMember';
const visible=ref(true)
const load = useCounterStore()
const {teamDetail,members} = storeToRefs(load)
const member = ref<any>()
onMounted(() => {
    teamQueryNumbers(teamDetail.value.id).then((res)=>{
        console.log(teamDetail.value.id)
        console.log(res.data)
        member.value = res.data
    })
})
const current = ref(1)
</script>



<style scoped lang="scss">
.btn:hover{
    background-color: blueviolet;
    color: white;
}
.head{
    border-radius: 50%;
    width: 70px;
    height: 70px;
}
</style>