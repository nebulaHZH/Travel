<template>
   <div style="padding: 10px;">
    <div>
        <keep-alive >
            <div class="Left">
                <a-menu
                id="dddddd"
                v-model:selectedKeys="selectedKeys"
                style="width: 10%;;margin-top: 50px;height: 650px;position: fixed;padding-bottom: 80px;margin-top: 50px;overflow-y: auto;overflow-x: hidden;"
                mode="inline"
                >   
                    <a-menu-item style="margin-top: 10px;text-align: center;" class="select" key="newTeam" @click="teamCreate">
                            <span class="select" type="larger">新建团队</span>
                    </a-menu-item>
                    <a-menu-item style="margin-top: 10px;text-align: center;" v-for="item in teamList" :key="item.id"  @click="toTeamDetail(item)">
                            <span class="select" type="larger">{{item.teamName}}</span>
                    </a-menu-item>


                </a-menu>
            </div>
        </keep-alive>
    </div>
        <div class="Header" style="text-align: left;margin-left: 15%;">
            <a-space size="middle" style="padding: 10px;">
                <router-link to="./TeamContent"><a-button>基本信息</a-button></router-link>
                <router-link to="./MemberManage" v-if="selectedKeys[0] !== 'newTeam'" @click="memberManage"><a-button>成员管理</a-button></router-link>
                <router-link to="./NoteManager" v-if="selectedKeys[0] !== 'newTeam'" @click="articleManage"><a-button>游记管理</a-button></router-link>
                <router-link to="./NewsManager" v-if="selectedKeys[0] !== 'newTeam'" @click="newsManage"><a-button>动态管理</a-button></router-link>
            </a-space>
        </div>
        <div style="min-height: 620px;border-radius: 10px;margin-left: 15%;padding: 10px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import { useCounterStore } from '../../../pinia'
import { teamQueryPersonalData, teamQueryPersonal, getVo, teamQueryNumbers } from '../../../api/team/teamMember'
import router from '../../../router'
import { storeToRefs } from 'pinia';
const selectedKeys=ref<string[]>(['1'])
const teams = ref<any>()
const counter = useCounterStore()
const {teamList,teamDetail,members} = storeToRefs(counter)
let aaaa:teamQueryPersonalData={
}
const loading = onMounted(()=>{
    teamQueryPersonal(aaaa).then((res)=>{
        console.log(res.data)
        if(res.status === 200 ){
            teamList.value=res.data.data
        }
        console.log(teamList.value[0])
    })

})
const toTeamDetail=(item:any)=>{
    getVo(item.id).then((res)=>{
        if(res.status === 200 ){
            
            counter.teamDetail.intro = res.data.data.intro
            counter.teamDetail.teamName = res.data.data.teamName
            counter.teamDetail.capacity = res.data.data.capacity
            counter.teamDetail.isAudit = res.data.data.isAudit
            counter.teamDetail.id = res.data.data.id
            console.log(counter.teamDetail)
            router.replace({path:"./TeamContent"})
        }
    })
}
const teamCreate=()=>{
    counter.teamDetail.intro = ""
    counter.teamDetail.teamName = ""
    counter.teamDetail.capacity = 100
    counter.teamDetail.isAudit = 0
}
const memberManage=()=>{
    teamQueryNumbers(teamDetail.value.id).then((res)=>{
        console.log(res.data)
        members.value = res.data.data
        console.log(members.value[0])
    })
}
const articleManage=()=>{

}
const newsManage=()=>{

}
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
</style>