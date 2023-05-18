<template>
    <div>
        <img style="z-index: -1;width: 100%;height: 300px;object-fit: cover;image-rendering: auto;"  :src="teamDetails?.coverUrl" alt=""/>
        <div class="TeamBackground">
            <img class="TeamIcon" :src="teamDetails.iconUrl" alt="">
            <h1 class="TeamName">{{ teamDetails.teamName }}</h1>
        </div>
        
        <div style="margin-top: 20px;">
            <router-link to="/TeamDetail/TeamHome">
                <a-button class="select">团队主页</a-button>
            </router-link>
            <router-link to="/TeamDetail/TeamNews">
                <a-button class="select">团队动态</a-button>
            </router-link>
            <router-link to="/TeamDetail/TeamNotes">
                <a-button class="select">团队游记</a-button>
            </router-link>
            <router-link to="/TeamDetail/TeamWall">
                <a-button class="select">团队弹幕</a-button>
            </router-link>
        </div>
        <div class="TeamNotes">
            <router-view></router-view>
        </div>
        <br>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'; 
import { useCounterStore } from '../../pinia';
import { storeToRefs } from 'pinia';
const load = useCounterStore()
const {teamDetails} = storeToRefs(load)
console.log(teamDetails.value)
</script>

<style lang="scss" scoped>
/* 头像部分的css */
.TeamBackground{
    background-size: cover;
    background: transparent;;
    height:300px;
    margin-top: -300px;

    .TeamIcon{
    margin-top: 30px;
    border: solid 0.01cm;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    }
    .TeamName{
        margin-top: 10px;
        font-size: 20px;
        color: white;
        font-weight: 600;
    }
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

.TeamNotes{
    height: 500px;
}
.select:hover{
    background-color: rgb(221, 95, 198);
    color: white;
}
</style>