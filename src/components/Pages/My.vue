<template>
    <div style="background-color:bisque ;height: max-content;">
        <div style="width: 100%;height:200px">
            <div class="top">
                <div style="width: max-content;position: relative;">
                    <img class="head" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100" alt="" >
                    <span class="myName" style="">骆驼驼Mango</span>
                    <a-button class="apply">申请官方</a-button>
                    <a-input class="motor"  placeholder='没有消息就是好消息~~'/>
                    <a-button class="edit" ghost="true">
                        <img class="editIcon" src="https://s1.aigei.com/src/img/png/c1/c1397c87cde441dca3252b026ac0c39d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:7-_pE33tleIC5NDkx0MFWJ-JKcg=" alt="" style="width: 20px;">
                    </a-button>
                </div>
                <div style="float: right;margin-top: -100px;margin-right: 10%;">
                    <a-button @click="chageLikeState()"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ likes }}</a-button>
                </div>
                
            </div>
            
        </div>
        <div style="margin-top: 80px;margin-left: 12%;width: max-content;margin-bottom: 40px;margin-bottom: 20px;padding: 20px;" >
            <a-radio-group v-model:value="values"  size="large" style="width:max-content;">
                <a-radio-button value="news">最新动态</a-radio-button>
                <a-radio-button value="notes">我的游记</a-radio-button>
                <a-radio-button value="teams">我的团队</a-radio-button>
                <a-radio-button value="likes">我的关注</a-radio-button>
                <a-radio-button value="collection">我的收藏</a-radio-button>
                <a-radio-button value="history">历史记录</a-radio-button>
            </a-radio-group>
            <a-input-search  style="margin-left: 40px;width: 300px;"  v-model:value="info" placeholder="请输入想查询的内容"  size="large"/>
            <span style="font-weight: 600;margin-left: 30px;">获赞数：</span>
            <span>{{ likeCount}}</span>
            <span style="font-weight: 600;margin-left: 30px;">浏览数：</span>
            <span>{{ browserCount}}</span>
        </div>
        <div v-if="values=== 'notes'" class="myNotes" >
            <a-row v-for="item in items" ref="items">
                <div style="text-align: left;background-color: transparent;; height: max-content;" :id="item.id">
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 35px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;margin-top: 10px;width: max-content;float: left;">
                        <span style="font-size: 20px;">巴厘岛 | 总有一个假日，要属于bali</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <a-textarea 
                            defaultValue="是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。"
                            style="resize:none;;color: gray;margin-left: -10px;"
                            :bordered="false"
                            placeholder="Borderless" />
                        </div>
                        <div>
                            <span  key="comment-basic-like">
                                <a-tooltip title="Like">
                                <template v-if="item.islike">
                                    <LikeFilled @click="like(item.id)" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like(item.id)" />
                                </template>
                                </a-tooltip>
                                <span style="padding-left: 8px; cursor: auto">
                                {{ item.count }}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </a-row>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        
        </div>
        <div v-if="values === 'collection'" class="myCollection" >
            <div style="float: left;padding: 0;margin-top: 60px;border-radius: 5px;height: 650px;overflow-y: auto;border-width: 0.005cm;" class="myTeamsLeftList" >
                <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                    <img src="https://s1.aigei.com/src/img/png/83/83c0164a722043789df68e793c9b0ecd.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:HP1AjZiW-IrqT9k30sRzezOpvZk=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;">
                    <span>添加收藏</span> 
                </a-button>
                <div v-for="item in files" >
                    
                    <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                        <img src="https://s1.aigei.com/src/img/png/1c/1c702401b53947b79e6a424df8c06696.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:KHVn3X2XiPLjs645LnFB6VVzbZE=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;;">
                        {{item.name}}
                    </a-button>
                </div>
            </div>
            <div style="float:right;margin-right: 10%;margin-top: 60px;" class="myTeamsRightList">
                <div v-for="selection in selections" key="selection" style="padding: 0;">
                    <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="5" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 260px;border-radius: 10px;">
                            <template #cover>
                            <img
                                
                                src="https://img14.360buyimg.com/n7/jfs/t1/187265/35/32321/43201/64008f01F1081ce7c/808779cce08abe06.jpg"
                                style="width: 210px;height:170px;overflow: hidden;border-radius: 10px;margin-left: 30px;"
                            />
                            </template>
                        <div>
                            <span style="float:left;font-weight: 500;">52TOYS Panda Roll</span>
                        </div>        
                        <br>
                        <div>
                            <span style="text-align: left;float:left">
                                生日礼物熊猫潮玩手办 单只 52TOYS Panda Roll日常第二弹系列盲盒 生日礼物熊猫潮玩手办
                            </span>
                        </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <a-pagination v-model:current="current" :total="50" show-less-items />
            <br>
            </div>
        </div>
        <div v-if="values === 'teams'" class="myTeams">
            <div style="float: left;padding: 0;margin-top: 60px;border-radius: 5px;height: 650px;overflow-y: auto;border-width: 0.005cm;" class="myTeamsLeftList" >
                <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                    <img src="https://s1.aigei.com/src/img/png/83/83c0164a722043789df68e793c9b0ecd.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:HP1AjZiW-IrqT9k30sRzezOpvZk=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;">
                    <span>新建团队</span> 
                </a-button>
                <div v-for="item in teams" >
                    
                    <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                        <img src="https://s1.aigei.com/src/img/png/1c/1c702401b53947b79e6a424df8c06696.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:KHVn3X2XiPLjs645LnFB6VVzbZE=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;;">
                        {{item.name.substring(0,6)}}
                    </a-button>
                </div>
            </div>
            <div style="float:right;margin-right: 10%;margin-top: 60px;" class="myTeamsRightList">
                <!-- 这部分是团队标题栏 -->
                <div style="width: 100%;height:200px">
                    <div class="top">
                        <div style="width: max-content;position: relative;">
                            <img class="head" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100" alt="" >
                            <span class="myName" style="">骆驼驼Mango</span>
                            <a-button class="apply">申请官方</a-button>
                            <a-input class="motor"  placeholder='没有消息就是好消息~~'/>
                            <a-button class="edit" ghost="true">
                                <img class="editIcon" src="https://s1.aigei.com/src/img/png/c1/c1397c87cde441dca3252b026ac0c39d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:7-_pE33tleIC5NDkx0MFWJ-JKcg=" alt="" style="width: 20px;">
                            </a-button>
                        </div>
                        <div style="float: right;margin-top: -100px;margin-right: 10%;">
                            <a-button @click="chageLikeState()"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ likes }}</a-button>
                        </div>
                    </div>
                </div>
                <!-- 这部分是团队的游记栏 -->
                <div style="margin-top: 100px;width:100%">
                    <div v-for="selection in selections" key="selection" style="padding: 0;">
                        <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                        <a-col :span="5.5" v-for="column of 4" key="column">
                            <a-card hoverable style="width: 260px;border-radius: 10px;">
                                <template #cover>
                                <img
                                    
                                    src="https://img14.360buyimg.com/n7/jfs/t1/187265/35/32321/43201/64008f01F1081ce7c/808779cce08abe06.jpg"
                                    style="width: 210px;height:170px;overflow: hidden;border-radius: 10px;margin-left: 30px;"
                                />
                                </template>
                            <div>
                                <span style="float:left;font-weight: 500;">52TOYS Panda Roll</span>
                            </div>        
                            <br>
                            <div>
                                <span style="text-align: left;float:left">
                                    生日礼物熊猫潮玩手办 单只 52TOYS Panda Roll日常第二弹系列盲盒 生日礼物熊猫潮玩手办
                                </span>
                            </div>
                            </a-card>
                        </a-col>
                    </a-row>
                    </div>
                </div>
                
            <a-pagination v-model:current="current" :total="50" show-less-items />
            <br>
            </div>
        </div>
        <div v-if="values === 'likes'" class="myLike">
            最新动态
        </div>
        <div v-if="values === 'news'" class="myNews" style="margin-top: 200px;background-color: white;border-radius: 5px;">
            <div style="text-align:left">
                <a-radio-group v-model:value="newValues"  size="large" style="width:max-content;margin-left: 185px;margin-top: 20px;">
                    <a-radio-button value="newNews">动态</a-radio-button>
                    <a-radio-button value="newNotes">游记</a-radio-button>
                    <a-radio-button value="newMessage">消息</a-radio-button>
                </a-radio-group>
            </div>
            
            <div v-if="newValues === 'newNews'" style="text-align:left;margin-left: 180px">
                <div style="width: max-content;position: relative;">
                    <img class="newHead" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100" alt="" >
                    <span class="newName" style="">骆驼驼Mango</span>
                    <div>
                        <pre>豆瓣9.0、2.2亿的点击量、海量的媒体采访......11位分集导演纵览古今，从多个全然不同的角度切入，为动画呈现了动画是如何承载中国的文化传统以及哲学积淀。

其中有着这样一部作品——它娓娓道来，极富想象力地展现了一位乡村少年质朴、有趣的童年图景，并由此引起了观众对于时光易逝、童年不再的乡愁与思索。

这部作品，就是由刘毛宁执导的《中国奇谭》第四集——《乡村巴士带走了王孩儿和神仙》。 作者：动画学术趴 https://www.bilibili.com/read/cv22268997?from=category_0 出处：bilibili</pre>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="values === 'history'"  class="myHistory">
            我的关注
        </div>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { LikeFilled,LikeOutlined } from '@ant-design/icons-vue';
const likes = ref<string>('关注')
const chageLikeState=()=>{
    console.log(likes.value)
    if(likes.value==="关注"){
        // 这里向后端传送信息
        likes.value = "取消关注"
    }
    else{
        //向后端传送消息
        likes.value="关注"
    }
    return likes.value
}
const likeCount = ref(20)
const browserCount = ref(20000)
const values=ref('collection')
// 这个是单选框更换部分

// 这里是我的收藏部分
const files=[
    {name:'默认收藏夹'},
    {name:'vue'},
    {name:'合集'},
    {name:'胡桁彰'},
    {name:'胡桁彰'},
    {name:'胡桁彰'},

]
// 这里是卡片的数据
const selections=[
            {name:"热点景区"},
            {name:"优质游记"},

        ]
//这里是我的团队部分：
const teams=[
    {name:'宇宙无敌暴龙战士'},
    {name:'vue团队'},
    {name:'QQ群'},
    {name:'微信群'},
    {name:'aBCA'},
    {name:'胡桁彰'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},

]
//这里是最新动态部分
const newValues = ref('newNews')

// 这里是我的游记部分
const items = [
    {name:'aaaaaaaaaaaaaaaa',
    count:10,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    count:12,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    count:13,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    count:13,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    count:13,
    id:'10103',
    islike:false},
]
const current=ref(1)
// 这里是点赞收藏评论数：

const like = (id: string) => {
        //先异步发送
        items.forEach(function (item,index){
            if(item.id===id){
                item.islike = !item.islike
                return 1
            }
        })
    };
</script>

<style scoped lang="scss">
.head{
    width: 100px;
    margin-top: 100px;
    margin-left: 100px;
    height:100px;
    border: solid;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
.myName{
    margin-left:30px;
    font-weight: 600;
    margin-top: 120px;
    position: absolute;
    width: max-content;
}
.apply{
    margin-left:400px;
    font-weight: 600;
    margin-top: 115px;
    position: absolute;
    width: max-content;
    background-color: blanchedalmond;
}
.top{
    background-image: url('https://img.zcool.cn/tubelocation/844564131f7d000e991000e46abc.jpg?x-oss-process=image/format,webp/quality,q_100');
    height: max-content;
    padding: 0;
}
.motor{
    margin-left:30px;
    margin-top: 160px;
    position: absolute;
    width: max-content;
    width: 500px;
    border-radius: 10px;
}
.edit{
    margin-left:540px;
    margin-top: 160px;
    position: absolute;
    border: transparent;
    padding: 0;
    .editIcon:active{
        filter:invert(100%);
    }

}
#choose{
    margin-top: 40px;
    margin-left: 2.5%;
    width: 95%;
    height: max-content;

}
.myNotes{
    width: max-content;
    background-color: #e1ebf5;
    border-radius: 20px;
    margin-left: 12%;
    margin-top: 50px;
}
.myCollection{
    margin-left: 10%;
    width: 90%;
    height: fit-content;
}
.myTeams{
    margin-left: 10%;
    width: 90%;
    height: fit-content;
}
// 最新动态部分
.newName{
    margin-left:30px;
    font-weight: 600;
    margin-top: 120px;
    position: absolute;
    width: max-content;
}
.newHead{
    width: 100px;
    margin-top: 100px;
    margin-left: 10px;
    height:100px;
    border: solid;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
</style>