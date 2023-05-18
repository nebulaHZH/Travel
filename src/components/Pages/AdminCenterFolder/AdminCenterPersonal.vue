<template>
    <div>
        <div style="text-align: left;padding: 10px;">
            <img class="head" :src="userMessage.avatar" >
            <div style="margin-top: 50px;position: absolute;margin-left: 200px;">
                <a-input type="text" style="font-weight: 400;font-size: 20px;width: max-content;" :placeholder="userMessage.name"></a-input>
                <br>
                <br>
                <a-input style="color: gray;width: 700px;" type="small" :placeholder="userMessage.moto" ></a-input>
            </div>
        </div>
        <div style="text-align: left;margin-top: 170px;margin-left: 210px;font-size: 20px;">
            <div style="">
                <span>账号：</span>
                <span>{{ userMessage.userAccount }}</span>
            </div>
            <div>
                <br>
                <span>性别：</span>
                <a-radio-group v-model:value="checked">
                    <a-radio value="boy">男</a-radio>
                    <a-radio value="girl">女</a-radio>
                </a-radio-group>
            </div>
            <div>
                <br>
                <span>出生日期：</span>
                <a-date-picker v-model:value="value" />
            </div>
            <div style="text-align: center;padding: 00px;">
                <br>
                <a-button type="primary" style="margin-left: -35%;margin-top: 100px;" @click="updateMessage">保存修改</a-button>
            </div>
            <br>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import {h, onMounted, ref} from 'vue'
import type { Dayjs } from 'dayjs';
import { getUserById } from '../../../api/user/users';
import { Modal } from 'ant-design-vue';
const userMessage = ref({
    name:'Travel',
    moto:'none',
    checked:'boy',
    avatar:"",
    userAccount:""
})
const name = ref('球球来了 (上海)')
const moto = ref('独立摄影师，人生理想是踏遍地球七大洲，目前还剩南极洲！')
const checked = ref<string>('boy')
const value = ref<Dayjs>()
const userid = 1 //改id：window.localStorage?.getItem('userId')
onMounted(() => {
    localStorage.setItem('userId','1')
    getUserById(userid).then((res)=>{
        console.log(res.data)
        userMessage.value.name = res.data.data.userName
        userMessage.value.moto = res.data.data.signature
        userMessage.value.avatar = res.data.data.userAvatar
        userMessage.value.userAccount = res.data.data.userAccount
    })
})
const updateMessage=()=>{
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
</style>