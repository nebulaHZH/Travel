<template>
    <div>
        <div style="text-align: left;padding: 10px;">
            <img class="head" src="https://p1-q.mafengwo.net/s19/M00/78/E3/CoNI4WO2ZdUm9DPyAACJ8w1yY9w.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" >
            <div style="margin-top: 50px;position: absolute;margin-left: 200px;">
                <a-input type="text" style="font-weight: 400;font-size: 20px;width: max-content;" :placeholder="name"></a-input>
                <br>
                <br>
                <a-input style="color: gray;width: 700px;" type="small" :placeholder="moto" ></a-input>
            </div>
        </div>
        <div style="text-align: left;margin-top: 170px;margin-left: 210px;font-size: 20px;">
            <div style="">
                <span>账号：</span>
                <span>123456789789</span>
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
            <div style="text-align: center;">
                <br>
                <a-button type="primary" style="margin-left: -35%;margin-top: 100px;">保存修改</a-button>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Dayjs } from 'dayjs';
const name = ref('球球来了 (上海)')
const moto = ref('独立摄影师，人生理想是踏遍地球七大洲，目前还剩南极洲！')
const checked = ref<string>('boy')
const value = ref<Dayjs>()
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