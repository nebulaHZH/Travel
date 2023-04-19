<template>
    <div>
        <div style="text-align: left;">
            <a-input-search
            v-model:value="value"
            placeholder="输入您想查询的内容"
            style="width: 200px;margin-left: 10px;margin-top: 20px;"
            @search="onSearch"
            />
        </div>
            <div v-for="item in message" style="text-align: left;font-weight: 600;font-size: 18px;margin-top: 20px;margin: 10px;border: solid 0.03cm;border-radius: 10px;padding: 10px;background-image:url('../travel专用章.jpg')">
                <img :src="item.head" style="width: 80px;height: 80px;border-radius: 50%;">
                <span style="margin-left: 20px;">{{ item.scenicname }}</span>
                <div style="float: right;margin-top: 20px;">
                    <span>兑换凭证：</span>
                    <span>{{ item.record }} </span>
                    <span style="margin-left: 100px;">兑换时间：</span>
                    <span style="margin-right: 100px;">{{ item.time }}</span>
                </div>
                
                <div style="margin-top: 30px;height: max-content;">
                    <img :src="item.goodsimage" style="width: 200px;height: 150px;border-radius: 10px;">
                    <div style="margin-left: 250px;margin-top: -150px;">
                        <span>{{ item.goosname }}</span>
                        <br>
                        <pre style="white-space: pre-wrap;word-wrap: break-word;text-align: left;margin-top: 50px;width: 91%;font-weight: 400;font-size: 15px;">{{ item.goodsdetail }}</pre>
                        <br>
                    </div>
                </div>
            </div>
            
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const value = ref<string>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
const message = [
    {
        head:'https://p1-q.mafengwo.net/s13/M00/E2/37/wKgEaV2cOiaAKJ_yAACOXfWIS1Q40.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
        scenicname:'用户名',
        time:'2023.4.5',
        record:'xxxxxxxxxxxxxxxxxxxxxxxx',
        goodsimage:'https://p1-q.mafengwo.net/s19/M00/4C/18/CoNBGWN8ekABCF9lAAQ-qn9CeSA.jpeg?imageMogr2%2Fthumbnail%2F%21680x400r%2Fgravity%2FCenter%2Fcrop%2F%21680x400%2Fquality%2F90',
        goosname:'Sakrucat',
        goodsdetail:'一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！'
    },
    {
        head:'https://p1-q.mafengwo.net/s14/M00/6E/D6/wKgE2l0N9Z6AUUoIAACMbPRWxLc01.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        scenicname:'用户名',
        time:'2023.4.5',
        record:'xxxxxxxxxxxxxxxxxxxxxxxx',
        goodsimage:'https://p1-q.mafengwo.net/s19/M00/4C/18/CoNBGWN8ekABCF9lAAQ-qn9CeSA.jpeg?imageMogr2%2Fthumbnail%2F%21680x400r%2Fgravity%2FCenter%2Fcrop%2F%21680x400%2Fquality%2F90',
        goosname:'Sakrucat',
        goodsdetail:'一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！'
    },
    {
        head:'https://p1-q.mafengwo.net/s14/M00/6E/D6/wKgE2l0N9Z6AUUoIAACMbPRWxLc01.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90',
        scenicname:'用户名',
        time:'2023.4.5',
        record:'xxxxxxxxxxxxxxxxxxxxxxxx',
        goodsimage:'https://p1-q.mafengwo.net/s19/M00/4C/18/CoNBGWN8ekABCF9lAAQ-qn9CeSA.jpeg?imageMogr2%2Fthumbnail%2F%21680x400r%2Fgravity%2FCenter%2Fcrop%2F%21680x400%2Fquality%2F90',
        goosname:'Sakrucat',
        goodsdetail:'一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！一个好用的梯子！'
    }
]
</script>

<style scoped>

</style>