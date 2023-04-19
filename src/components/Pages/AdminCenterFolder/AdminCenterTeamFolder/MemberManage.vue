<template>
    <div style="text-align: left ;">
        <div style="text-align: left;margin-left: 10px;margin-top: 10px;">
            <a-button class="btn" @click="visible=true">已加入</a-button>
            <a-button  class="btn" @click="visible=false"  style="">申请加入</a-button>
        </div>

        <div v-if="visible == true" style="margin-top: 40px;margin-left: 100px;" v-for="item in members" >
            <img :src=item.url class="head">
            <span style="margin-left: 30px;font-size: 16px;font-weight: 550;">{{ item.name }}</span>
            <a-button style="margin-left: 50%;" class="btn">踢出团队</a-button>
        </div>
        <div v-else style="margin-top: 40px;margin-left: 100px;" v-for="item in members" >
            <img :src=item.url class="head">
            <span style="margin-left: 30px;font-size: 16px;font-weight: 550;">{{ item.name }}</span>
            <a-button style="margin-left: 50%;" class="btn">同意</a-button>
            <a-button type="danger" class="btn">拒绝</a-button>
        </div>
        <a-pagination style="margin-top:20px;margin-left: 30%;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
    </div>
</template>

<script setup lang="ts">import { ref } from 'vue';
const visible=ref(true)
const members = [
    {
        url:'https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        name:'红红火火'
    },
    {
        url:'https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        name:'红红火火'
    },
    {
        url:'https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        name:'红红火火'
    },
    {
        url:'https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        name:'红红火火'
    },
    {
        url:'https://p1-q.mafengwo.net/s9/M00/4A/04/wKgBs1eMkwiACnb_AA9QLVpJAPo33.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        name:'红红火火'
    },
]
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