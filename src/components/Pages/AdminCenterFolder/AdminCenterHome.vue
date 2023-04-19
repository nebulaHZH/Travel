<template>
    <div>
        <div style="text-align: left;padding: 10px;">
            <img class="head" src="https://p1-q.mafengwo.net/s19/M00/78/E3/CoNI4WO2ZdUm9DPyAACJ8w1yY9w.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" >
            <div style="margin-top: 50px;position: absolute;margin-left: 200px;">
                <a-span style="font-weight: 400;font-size: 20px;width: max-content;">{{ name }}</a-span>
                <br>
                <br>
                <a-span style="color: gray;width: 700px;" type="small" >{{ moto }}</a-span>
            </div>
        </div>
        <div style="text-align: left;margin-top: 170px;margin-left: 170px;font-size: 20px;">
            <div style="">
                <span>账号：</span>
                <span>123456789789</span>
                <span style="margin-left: 30%;">我的代币：</span>
                <span>{{ coins }}</span>
                <a-button  style="margin-left: 20px;background-color:coral;color: white;">去兑换</a-button>
            </div>
            <div>
                <br>
                <span>每日任务：</span>
                <br>
                <div style="border: solid 0.03cm;min-height: 200px;height: 200px;overflow-y: auto;width: min-width: 400px;;width: 600px;margin-top:10px;padding: 4px;">
                    <div v-for="item in tasks" style="margin-top: 10px;margin-bottom: 10px;border-bottom: solid 0.01cm gray;">
                        <span style="font-size: 15px;margin-left: 20px;">{{ item.name }}</span>
                        <a :href="item.tourl" target="_blank" style="background-color: blueviolet;color: white;border-radius: 2px;padding-left: 2px;padding-right: 3px;float: right;;">去完成</a>
                    </div>
                </div>
                
            </div>
            <div>
                <br>
                <span>账号安全：</span>
                <br>
                <a-button class="binds" style="margin-top: 30px;">绑定手机号</a-button>
                <a-button class="binds" style="margin-left: 20%;">绑定邮箱</a-button>
                <a-button class="binds" style="margin-left: 20%;">绑定修改密码</a-button>   
            </div>
            <br>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Dayjs } from 'dayjs';
const name = ref('球球来了 (上海)')
const moto = ref('独立摄影师，人生理想是踏遍地球七大洲，目前还剩南极洲！')
const checked = ref<string>('boy')
const coins = ref(12521)
const value = ref<Dayjs>()
const tasks = [
    {
        name:'清明节不写代码可惜了',
        tourl:''
    },
    {
        name:'清明节不写代码可惜了',
        tourl:''
    },
    {
        name:'清明节不写代码可惜了',
        tourl:''
    },
    {
        name:'清明节不写代码可惜了',
        tourl:''
    },
    {
        name:'清明节不写代码可惜了',
        tourl:''
    },
    {
        name:'清明节不写代码可惜了',
        tourl:''
    }

]
</script>

<style scoped>
.head{
    width:100px;
    position: absolute;
    height:10 0px;
    border-radius: 50%;
    margin-top: 40px;
    margin-left: 50px;
}
.binds:hover{
    background-color: blueviolet;
    color: white;
}
</style>