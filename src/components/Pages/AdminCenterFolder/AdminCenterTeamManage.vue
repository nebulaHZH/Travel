<template>
   <div style="padding: 10px;">
    <div>
        <keep-alive >
            <div class="Left">
                <a-menu
                id="dddddd"
                v-model:selectedKeys="selectedKeys"
                style="width: 10%;;margin-top: 50px;height: 500px;position: fixed;padding-bottom: 80px;margin-top: 50px;"
                mode="inline"
                >   
                    <a-menu-item style="margin-top: 10px;text-align: center;" class="select" key="newTeam">
                            <span class="select" type="larger">新建团队</span>
                    </a-menu-item>
                    <a-menu-item style="margin-top: 10px;text-align: center;" v-for="item in teams" :key="item.id">
                            <span class="select" type="larger">{{item.name}}</span>
                    </a-menu-item>


                </a-menu>
            </div>
        </keep-alive>
    </div>
        <div class="Header" style="text-align: left;margin-left: 15%;">
            <a-space size="middle" style="padding: 10px;">
                <router-link to="./TeamContent"><a-button>基本信息</a-button></router-link>
                <router-link to="./MemberManage" v-if="selectedKeys[0] !== 'newTeam'"><a-button>成员管理</a-button></router-link>
                <router-link to="./NoteManager" v-if="selectedKeys[0] !== 'newTeam'"><a-button>游记管理</a-button></router-link>
                <router-link to="./NewsManager" v-if="selectedKeys[0] !== 'newTeam'"><a-button>动态管理</a-button></router-link>
            </a-space>
        </div>
        <div style="min-height: 620px;border-radius: 10px;margin-left: 15%;padding: 10px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const selectedKeys=ref<string[]>(['1'])
const teams = [
    {
        id:'1',
        name:'团队1'
    },
    {
        id:'2',
        name:'团队2'
    },
    {
        id:'3',
        name:'团队3'
    },
    {
        id:'4',
        name:'团队4'
    },
]
</script>

<style scoped>

</style>