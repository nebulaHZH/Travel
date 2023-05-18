<template>
    <div>
        <div style="text-align: left;padding: 10px;">
            <img class="head" :src="userMessage.avatar" >
            <div style="margin-top: 50px;position: absolute;margin-left: 200px;">
                <a-span style="font-weight: 400;font-size: 20px;width: max-content;">{{ userMessage.name }}</a-span>
                <br>
                <br>
                <a-span style="color: gray;width: 700px;" type="small" >{{ userMessage.moto }}</a-span>
            </div>
        </div>
        <div style="text-align: left;margin-top: 170px;margin-left: 170px;font-size: 20px;">
            <div style="">
                <span>账号：</span>
                <span>123456789789</span>
                <span style="margin-left: 30%;">我的代币：</span>
                <span>{{ userMessage.coins }}</span>
                <a-button  style="margin-left: 20px;background-color:coral;color: white;" @click="change">去兑换</a-button>
            </div>
            <div>
                <br>
                <span>每日任务：</span>
                <br>
                <div style="border: solid 0.03cm;min-height: 200px;max-height: 300px;overflow-y: auto;width: min-width: 400px;;width: 600px;margin-top:10px;padding: 4px;">
                    <div v-for="item in userMessage.tasks" style="margin-top: 10px;margin-bottom: 10px;">
                        <span style="font-size: 15px;margin-left: 20px;">{{ item.name }}</span>
                        <a v-if="item.name !=='暂无'" :href="item.tourl" target="_blank" style="background-color: blueviolet;color: white;border-radius: 2px;padding-left: 2px;padding-right: 3px;float: right;;">去完成</a>
                    </div>
                </div>
                
            </div>
            <div>
                <br>
                <span>账号安全：</span>
                <br>
                <a-button class="binds" style="margin-top: 30px;" @click="change">绑定手机号</a-button>
                <a-button class="binds" style="margin-left: 20%;" @click="change">绑定邮箱</a-button>
                <a-button class="binds" style="margin-left: 20%;" @click="change">绑定修改密码</a-button>   
            </div>
            <br>
        </div>
    </div>
</template>

<script setup lang="ts">
import {h, onMounted, ref} from 'vue'
import { getUserById } from '../../../api/user/users';
import { Modal } from 'ant-design-vue';
const userid = 1//用户id
const userMessage =ref({
    name:'Travel',
    moto:'none',
    avatar:"",
    tasks:[
    {
        name:'暂无',
        tourl:''
    }
        ],
    coins:12521
})
onMounted(() => {
    localStorage.setItem('userId','1')
    getUserById(userid).then((res)=>{
        console.log(res.data)
        userMessage.value.name = res.data.data.userName
        userMessage.value.moto = res.data.data.signature
        userMessage.value.coins = 1960//res.data.data.coins
        userMessage.value.avatar = res.data.data.userAvatar
    })
})
const change = ()=>{
    Modal.info({
        centered:true,
        title: '该业务还在粉刷中....',
        content: h('div', {}, []),
        onOk() {
          console.log('知道了');
        },
      });
}
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