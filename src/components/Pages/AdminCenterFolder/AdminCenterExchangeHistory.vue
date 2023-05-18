<template>
    <div style="text-align: left;margin-top: 20px;">
        <div class="header" style="margin-left: 30px;border-bottom: solid 0.01cm ;;padding: 5px;margin-right: 50px;">
            <a-button>兑换记录</a-button>
            <a-button>购买记录</a-button>
        </div>
        <div>
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
    </div>
</template>

<script setup lang="ts">
const message = [
    {
        head:'https://p1-q.mafengwo.net/s13/M00/E2/37/wKgEaV2cOiaAKJ_yAACOXfWIS1Q40.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90',
        scenicname:'魔都',
        time:'2023.4.5',
        record:'31235453123514531588',
        goodsimage:'https://p1-q.mafengwo.net/s19/M00/4C/18/CoNBGWN8ekABCF9lAAQ-qn9CeSA.jpeg?imageMogr2%2Fthumbnail%2F%21680x400r%2Fgravity%2FCenter%2Fcrop%2F%21680x400%2Fquality%2F90',
        goosname:'一日游',
        goodsdetail:'上海魔都超巨魅力！'
    },
    {
        head:'https://note.mafengwo.net/img/94/4d/a215494cc269054d1040f8b9e7e96139.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
        scenicname:'巴厘岛',
        time:'2023.4.5',
        record:'48121354534343153152',
        goodsimage:'https://note.mafengwo.net/img/e5/45/48a383a15329085353943a33f72ec063.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
        goosname:'纪念卡片',
        goodsdetail:'蔚蓝，壮阔了踏浪勇气，浩渺了心灵半径'
    },
    {
        head:'https://note.mafengwo.net/img/b9/a5/b3a19b74a3692ab2bf5a3af004c21a9f.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90',
        scenicname:'三亚',
        time:'2023.4.5',
        record:'xxxxxxxxxxxxxxxxxxxxxxxx',
        goodsimage:'https://note.mafengwo.net/img/c4/98/c704430d38960234a0b252b6a3dda6a7.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
        goosname:'明信片',
        goodsdetail:'续写人生之旅'
    },
    {
        head:'https://note.mafengwo.net/img/8b/1d/45bbfbf5253d09cd8f9ef6d5423ffeb9.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90',
        scenicname:'菲律宾',
        time:'2023.4.5',
        record:'xxxxxxxxxxxxxxxxxxxxxxxx',
        goodsimage:'https://note.mafengwo.net/img/bd/ab/a9bd22ce3a54fa17bd75128918c640f4.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
        goosname:'一日游',
        goodsdetail:'速来，手慢无'
    },
]
</script>

<style scoped>

</style>