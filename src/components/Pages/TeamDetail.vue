<template>
    <div>
        <div class="TeamBackground">
            <img class="TeamIcon" src="https://p1-q.mafengwo.net/s11/M00/DA/01/wKgBEFpkXbWAVcW3ABsoxkLFtX482.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" alt="">
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

<style lang="scss" scoped >
/* 头像部分的css */
.TeamBackground{
    background-image: url("https://p1-q.mafengwo.net/s19/M00/E3/2F/CoNJlGO6WztNm4atABlXboQIOWI.jpeg?imageMogr2%2Fstrip");
    background-size: cover;
    height:300px;

    .TeamIcon{
    border-radius:50%;
    margin-top: 30px;
    border: solid 0.01cm;
    widows: 150px;
    height: 150px;
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