<template>
    <div>
        <div style="text-align:left;margin-left: 1%;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
            <div v-for="item in newsMessage" style="width: max-content;position: relative;margin-top: 40px;margin-left: 20px;">
                <img class="newHead" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,jpg/quality,q_100" alt="" >
                <span style="margin-left:30px;font-weight: 600;margin-top: 120px;width: max-content;">{{item.writer}}</span>
                <a-button type="danger" style="margin-left: 70%;">删除</a-button>
                <div style="margin-left: 90px;border: solid 0.01pc;padding: 10px;border-radius: 5px;">
                    <pre style="width:600px;white-space: pre-wrap;word-wrap: break-word">豆瓣9.0、2.2亿的点击量、海量的媒体采访......11位分集导演纵览古今，从多个全然不同的角度切入，为动画呈现了动画是如何承载中国的文化传统以及哲学积淀。其中有着这样一部作品——它娓娓道来，极富想象力地展现了一位乡村少年质朴、有趣的童年图景，并由此引起了观众对于时光易逝、童年不再的乡愁与思索。这部作品，就是由刘毛宁执导的《中国奇谭》第四集——《乡村巴士带走了王孩儿和神仙》。 作者：动画学术趴 https://www.bilibili.com/read/cv22268997?from=category_0 出处：bilibili</pre>
                    <div  style="margin-left: 1%;margin-right: 1%;">
                        <a-row>
                            <a-col v-for="ss in item.imgs">
                                <img  :src="ss.url" alt="" style="width: 100px;height:100px;margin: 20px;">
                            </a-col>
                        </a-row>
                    </div>
                </div>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const newsMessage = [
    {
        writer:'h2asx',
        imgs:[//只能上传四张图片
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
        ]
    },
    {
        writer:'h2asx',
        imgs:[
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            ]
    },
    {
        writer:'h2asx',
        imgs:[
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
        ]
    },
    {
        writer:'h2asx',
        team:'8iyuj',    
        imgs:[
        ]
    }
]
</script>

<style scoped>
.newHead{
    border-radius: 50%;
    width: 70px;
    height: 70px;
}
</style>