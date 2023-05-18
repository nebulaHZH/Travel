<template>
    <div class="header">
        <div class="nav">
            <div class="navBox">
                <a-menu v-model:selectedKeys="current" mode="horizontal" class="menus">
                <div class="titleMain" style="background: transparent;">
                    <a-space align="center" class="blocks">
                    <div  class="menuLeft">
                    
                    <a-menu-item key="TravelName" class="titleLeft" >
                    <router-link to="/Home">Travel</router-link>
                    </a-menu-item>
                    <a-menu-item key="Main" class="titleLeft">
                    <router-link class="names" to="/Home">首页</router-link>
                    </a-menu-item>
                    <a-menu-item key="Team" class="titleLeft">
                    <router-link class="names" to="/Teams">团队</router-link>
                    </a-menu-item>
                    <a-menu-item key="Scenic" class="titleLeft">
                    <router-link class="names" to="/Scenic">景区</router-link>
                    </a-menu-item>  
                    <a-menu-item key="Write" class="titleLeft">
                    <router-link class="names" to="/Notes">游记</router-link>
                    </a-menu-item>
                    <a-menu-item key="Market" class="titleLeft">
                    <router-link class="names" to="/Mall">周边</router-link>
                    </a-menu-item>
                </div>
<!-- 搜索栏部分 -->
                <div class="search" style="background: transparent;">
                    <a-menu-item key="search"   class="searchInput">
                        <a-input-search v-on:keyup.enter="search" @search="search"  class="ant-dropdown-link" v-model:value="info" placeholder="请输入想查询的内容" id="MainSearch" size="default" />
                        <!-- <div ref="dropwn">
                            <a-dropdown trigger="click" :getPopupContainer="(trigger:any) => trigger.parentNode">
                            
                            
                            <DownOutlined />
                            <template #overlay>
                            <a-menu  class="searchcard" style="position:absolute;z-index: 999;margin-top: 0;">
                                <a-menu-item>
                                <div calss="searchHistory">
                                    <div>
                                        <span style="font-weight: bolder;">搜索历史</span>
                                        <a-button type="danger" style="margin-left: 240px;font-size: small;" size="small">清空</a-button>
                                    </div>
                                    <br>
                                    <div class="tags">
                                        
                                            <div>
                                                <a-tag closable  @close.prevent :change="filled">苏州园林</a-tag>
                                                <a-tag closable @close="log">北京</a-tag>
                                                <a-tag closable @close.prevent>上海</a-tag>
                                            </div>
                                    </div>
                                    <br>
                                    <div>
                                        <span style="font-weight: bolder;">热门搜索</span>
                                    </div>
                                    <br>
                                    <div class="hotSearch" v-for="item in hotSearchData" style="margin-top:5px">
                                        <span>{{ item.num }}.</span>
                                        <a href="">{{ item.data }}</a>
                                         
                                    </div>
                                </div>
                                </a-menu-item>
                            </a-menu>
                            </template>
                        </a-dropdown> 
                    </div> -->
                </a-menu-item>
                </div>
<!-- 右边的导航栏 -->
                <div class="menuRight" style="background: transparent;">
<!-- 我的 -->
                    <a-menu-item key="my" class="titleRight" >
                        
                        <a-dropdown :getPopupContainer="(trigger:any) => trigger.parentNode">
                            <router-link to="/My?key=news">
                                <a-avatar class="ant-dropdown-link" >
                                    <template #icon>
                                    <user-outlined />
                                    </template>
                                </a-avatar>
                            </router-link>
                            
                            <template #overlay>
                            <div style="text-align: center;">
                                <a-menu style="margin-left: -30%;margin-top: 4px;width: 120px;border-radius: 10px;">
                                    <a-menu-item>
                                        <template #icon>
                                            <user-outlined /> 
                                        </template>
                                    <router-link to="/My">个人中心</router-link>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <template #icon>
                                            <logout-outlined /> 
                                        </template>

                                        <router-link to="">退出</router-link>
                                    </a-menu-item>
                                </a-menu>
                            </div>
                            
                            </template>
                        </a-dropdown>
                    </a-menu-item>
<!-- 动态 -->
                    <a-menu-item key="space" class="titleRight" >
                        <router-link class="ant-dropdown-link" to="/My?key=news" @mouseover="changeNews">动态</router-link>
                        <!-- <a-dropdown  :getPopupContainer="(trigger:any) => trigger.parentNode" v-model="news"> -->
                            
                            <!-- <template #overlay @click.stop>
                                <div style="text-align: center;margin-left: -500px;padding: 0;" >
                                    <a-card
                                        class="spaceCard"
                                        :tab-list="tabListNoTitle"
                                        :active-tab-key="noTitleKey"
                                        style="padding: 0;margin: 0;"
                                        @tabChange="(key: string) => onTabChange(key, 'noTitleKey')"
                                    >
                                        <p v-if="noTitleKey === '动态'">
                                            <div style="text-align:left;overflow-y:scroll;height: 500px;border: solid 0.01cm;margin: 00px;height: 500px;border-bottom-left-radius: 10px;border-top-left-radius: 10px;">
                                                <div v-for="item in newsMessage" style="width: max-content;position: relative;">
                                                    <img class="newHead" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,jpg/quality,q_100" alt="" >
                                                    <span style="margin-left:30px;font-weight: 600;margin-top: 80px;position: absolute;width: max-content;">{{item.writer}}</span>
                                                    <span style=" margin-left:30px;font-weight: 600;margin-top: 120px;position: absolute;width: max-content;">{{item.team}}</span>
                                                    <div style="margin-left: 20px;border: solid 0.01pc;padding: 10px;border-radius: 5px;margin-right: 20px;">
                                                        <pre style="width:650px;white-space: pre-wrap;word-wrap: break-word">豆瓣9.0、2.2亿的点击量、海量的媒体采访......11位分集导演纵览古今，从多个全然不同的角度切入，为动画呈现了动画是如何承载中国的文化传统以及哲学积淀。其中有着这样一部作品——它娓娓道来，极富想象力地展现了一位乡村少年质朴、有趣的童年图景，并由此引起了观众对于时光易逝、童年不再的乡愁与思索。这部作品，就是由刘毛宁执导的《中国奇谭》第四集——《乡村巴士带走了王孩儿和神仙》。 作者：动画学术趴 https://www.bilibili.com/read/cv22268997?from=category_0 出处：bilibili</pre>
                                                        <div>
                                                            <a-row  >
                                                                <a-col v-for="ss in item.imgs">
                                                                    <img  :src="ss.url" alt="" style="width: 120px;height: 120px;margin: 20px;">
                                                                </a-col>
                                                            </a-row>
                                                            
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                    <br>
                                                    <br>
                                                </div>
                                            </div>
                                        </p>
                                        <p v-else-if="noTitleKey === '游记'">
                                            <div style="text-align:left;overflow-y:scroll;height: 500px;border: solid 0.01cm;margin-top: 10px;height: 500px;border-bottom-left-radius: 10px;border-top-left-radius: 10px;margin: 0px;">
                                                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 0%;border-radius:10px">
                                                <a-row v-for="item in items" ref="items">
                                                <div style="text-align: left;background-color: transparent; height: max-content;margin-top: 20px;" :id="item.id">
                                                    <div style="float: right;">
                                                        
                                                    </div>
                                                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 200px;height:180px;overflow: hidden;float: left;margin: 10px;">
                                                    <div style="margin-left: 20px;width: max-content;float: left;">
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
                                                        
                                                        <div style="margin-top: 5px;min-width: 400px;">
                                                            <pre style="width:400px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                                                        </div>
                                                        <div style="float: right;margin-right: 10%;margin-top: 20px;">
                                                            <span  key="comment-basic-like">
                                                                <template>
                                                                    <LikeOutlined/>
                                                                </template>
                                                                <span style="padding-left: 8px; cursor: auto">
                                                                {{ item.likeCount }}
                                                                </span>
                                                            </span>
                                                            <span>
                                                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                                                <span style="margin-left: 10px;">{{ item.commentCount }}</span>
                                                            </span>
                                                            <span>
                                                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                                                <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a-row>
                                            </div>
                                            </div>
                                        </p>
                                        <p v-else  style="border: solid 0.01cm;overflow-y: scroll;position: relative;height: 500px;">
                                            <div class="messageList" style="overflow-y: scroll;text-align: left;float: left;">
                                                <div v-for="item in messages" style=";">
                                                    <a-button  style="font-weight: 500;font-size:small;;width: 170px;height: 40px;font-size: small;padding: 0;  ">
                                                        {{item.name.substring(0,11)}}
                                                    </a-button>
                                                </div>
                                            </div>
                                            <div style="border: solid 0.01ch;margin-left: 200px;min-height: 500px;margin-top: 10px;margin-right: 10px;text-align: center;width: 600px;" class="myTeamsRightList">
                                                <div style="float:right;margin-right: 40px;margin-top: 20px;">
                                                    <a-button type="danger">删除</a-button>
                                                </div>
                                                <div style="border: solid 0.01cap;margin-top: 60px;">
                                                    <span style="font-size: larger;max-width: 400px;;">有关软件协同的说明通知</span>
                                                </div>
                                                
                                                <div>
                                                    <pre style="width:400px;white-space: pre-wrap;word-wrap: break-word;text-align: left;margin: 10%;">{{ texts }}</pre>
                                                </div>
                                                <div style="float: right;margin-right: 60px;">
                                                    <span>时间：2023.3.24 </span>
                                                </div>
                                                <br>
                                                <br>
                                            <br>
                                            </div>  
                                                
                                        </p>
                                    </a-card>
                                </div>
                            </template> -->
                        <!-- </a-dropdown> -->
                    </a-menu-item>
<!-- 收藏 -->
                    <a-menu-item key="collection"  class="titleRight" >
                        <router-link class="ant-dropdown-link" to="/My?key=collection"   @mouseover="change" >收藏</router-link>
                        <!-- <a-dropdown v-model="vise"  :getPopupContainer="(trigger:any) => trigger.parentNode"  style="margin-top:12px;" :visible="vise"> -->
                            
                            <!-- <template #overlay>
                            <div
                            @mouseleave="change"
                            style="width: max-content;margin-left: 40%;margin-top: 16px;" class="contain" >
                                <div style="float: left;display: flex;height: 500px;"  >
                                    <a-menu
                                        style="width: 200px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;"
                                        mode="inline"
                                        
                                        >
                                        <a-menu-item v-for="item in files" :key="item" visible="true">
                                            <span>aaaaa</span>
                                        </a-menu-item>
                                    </a-menu>
                                </div>
                                <div style="float:right">
                                    <a-menu style="width: max-content;height: 500px;overflow: scroll;overflow-x: hidden;">
                                        <a-menu-item v-for="item in histories" style="width: 400px;height:max-content;margin-top: 10px;margin-bottom:10px;">
                                            <img src="https://img14.360buyimg.com/n7/jfs/t1/187265/35/32321/43201/64008f01F1081ce7c/808779cce08abe06.jpg" alt="" style="float: left; width: 150px;height:120px;margin-top: 10px;margin-bottom:5px">
                                            <div style="margin-left: 170px;">
                                                <div style="margin-top: 10px;">
                                                    <a-textarea 
                                                defaultValue="对方会觉得三分间六年"
                                                :rows="2"
                                                style="resize:none;font-weight: bold;"
                                                :bordered="false"
                                                placeholder="Borderless" />
                                                </div>
                                                
                                            
                                            <div style="margin-top: 20px">
                                                <a href="" style="margin-bottom: 0;">
                                                    <user-outlined />
                                                    <span style="font-weight: 100;"> 作者名字</span>
                                                </a>
                                                    
                                                <a href="" style="font-weight: 100;margin-top: 0;padding-top: 0;float: right;">
                                                    浏览时间</a>
                                            </div>
                                                
                                            </div>              
                                        </a-menu-item>
                                    </a-menu>
                                        
                                </div>
                            </div>
                            
                            </template> -->
                        <!-- </a-dropdown> -->
                    </a-menu-item>
<!-- 历史 -->
                    <a-menu-item v-model="visible" key="history"  class="titleRight" >
                        <router-link to="/My?key=history" class="ant-dropdown-link" @mouseover="changeHistory">历史</router-link>
                        <!-- <a-dropdown  :getPopupContainer="(trigger:any) => trigger.parentNode"> -->
                            
                            <!-- <template #overlay>
                                <div style="text-align: center;">
                                <a-menu style="margin-left: 40%;margin-top: 15px;width: max-content;border-radius: 10px;height: 500px;overflow: scroll;overflow-x: hidden;">
                                    <a-menu-item v-for="item in histories" style="width: 400px;height:max-content;margin-top: 10px;margin-bottom:10px;">
                                    <img src="../../assets/example.jpg" alt="" style="float: left; width: 150px;height:100px;margin-top: 10px;margin-bottom:5px">
                                    <div style="margin-left: 170px;">
                                        <div style="margin-top: 10px;">
                                            <a-textarea 
                                        defaultValue="对方会觉得三分拿到手就浪费你的时间六年"
                                        :rows="2"
                                        style="resize:none;font-weight: bold;"
                                         :bordered="false"
                                          placeholder="Borderless" />
                                        </div>
                                        
                                    
                                    <div style="margin-top: 20px">
                                        <a href="" style="margin-bottom: 0;">
                                            <user-outlined />
                                            <span style="font-weight: 100;"> 作者名字</span>
                                        </a>
                                            
                                        <a href="" style="font-weight: 100;margin-top: 0;padding-top: 0;float: right;">
                                            浏览时间</a>
                                    </div>
                                        
                                    </div>              
                                </a-menu-item>
                                </a-menu>
                            </div>
                            </template> -->
                        <!-- </a-dropdown> -->
                    </a-menu-item>
<!-- 管理中心 -->
                    <a-menu-item key="administrator" class="titleRight">
                        <div class="titleIcon">
                            <router-link class="menuName" to="/AdminCenter" target="_blank">管理中心</router-link>
                        </div>
                    </a-menu-item>
<!-- 发布 -->
                    <a-menu-item key="publish" class="titleRight" style="background-color:cornflowerblue">
                        <div class="titleIcon">
                            <router-link to="/AdminCenter/AdminCenterPublish/Video" class="menuName"  target="_blank" style="color: white;">发布</router-link>
                        </div> 
                    </a-menu-item>
                </div>
                </a-space>
                </div>
                
            </a-menu>
            
            </div>
            
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
import { UserOutlined,LogoutOutlined } from '@ant-design/icons-vue';
import { func } from 'vue-types';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
const current = ref<string[]>(['TravelName']);
const info=ref<string>('')
const history=ref<HTMLElement | null>(null)
const log = (e: MouseEvent) => {
      console.log(e);
    };
const hotSearchData=[
    {num:1,data:"新创华致歉"},
    {num:2,data:"新奥特曼中配翻车"},
    {num:3,data:"随便一截都是幅中国画"},
    {num:4,data:"建议完善在校大学生婚育服务"},
    {num:5,data:"利物浦7-0曼联"},
    {num:6,data:"冥河水母现身南极深海"}
    ]
function filled(){
    console.log(history.value)
}
const tabListNoTitle = [
      {
        key: '动态',
        tab: '动态',
      },
      {
        key: '游记',
        tab: '游记',
      },
      {
        key: '消息',
        tab: '消息',
      },
    ];
const router = useRouter()
const search = ()=>{
    if(info.value === ''){
        message.error('尚未输入关键词')
    }else{
       const s =  router.resolve({
            path:'/Search',
            query:{
                key:info.value
            }
        })
        window.open(s.href)
    }
    
}
const key = ref('tab1');
const noTitleKey = ref('动态');
const onTabChange = (value: string, type: string) => {
      console.log(value, type);
      if (type === 'key') {
        key.value = value;
      } else if (type === 'noTitleKey') {
        noTitleKey.value = value;
      }
    };
const histories = [
    {picture:"",msg:""},
    {picture:"",msg:""},
    {picture:"",msg:""},
    {picture:"",msg:""},
    {picture:"",msg:""},
]
//动态部分
const news = ref(false)
const changeNews=()=>{
    if(vise.value=true){
        vise.value=false
    }
    
}
const newsMessage = [
    {
        writer:'h2asx',
        team:'撒啊了',
        imgs:[//只能上传四张图片
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
        ]
    },
    {
        writer:'h2asx',
        team:'撒啊了',
        imgs:[
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            {url:'//puui.qpic.cn/tv/0/1249827613_276386/450?max_age=7776001'},
            ]
    },
    {
        writer:'h2asx',
        team:'大苏打',
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
const items = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    commentCount:200,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
]
const messages=[
    {name:'哔哩哔哩隐私政策的修订通知'},
    {name:'拜年纪全片回顾上线！'},
    {name:'拜年纪直播即将开始！'},
    {name:'拜年纪倒计时一天！'},
    {name:'2023拜年纪开启预约啦！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},

]

const texts = 
"群居、肉食、附魔的胡狼，只剩一对母女相依为命，在白山黑水的风雪中唱着《胡不归去》的挽歌。"+
"依靠工具和组织的恐怖直立猿，形成了更强大的狩猎团体，但首领同样是单亲家庭，小虎母亲的缺位可能亦与狼有关。"+
"林林可以变人，但妈妈始终只有狼的形象，对女儿的教导也是失去人形，失去一点，失去兽形，失去一切。"+
"拥有双重形态的林林，没有成为两个种族和解交流的沟通使者，即便坐在一张桌子上一起吃饭，人类的熟食带来的是能力的剥夺。反而林林最终以人的形态为狼妈妈复仇，跟人族的家长同归于尽。"+
"对于这段风雪中奇缘，人类代表的选择是不与狼共屋。小虎没有为父寻仇，转而做出了一个违背祖宗的决定，我不做猎人了，林林。"+
"掠夺者向生产者的转变，暗合着采集型的狩猎生活，转入种田流的农耕文明。"+
"以自然人格化的视角，我愿将《林林》的戏剧冲突称为『新仙女木事件』。新故事、狼仙女孩其名四木、酷寒气候、人类从打猎转职种地……"+
"林海雪原，隔出一抔农桑田，刀耕火种姑且对丛林法则有所调和。"+
"而真实的神州，以白山黑水为主体的天地间，的确曾是游牧族群与农耕王朝的千古战场，也是华夏文明工业化的先行起点。"
//收藏部分
let visible = ref(false)
let vise = ref(false);
const files = [
    {name:"file1"},
    {name:"file2"},
    {name:"file3"},
    {name:"file4"},
    {name:"file5"},
]
const change=()=>{
    if(visible.value==true){
        visible.value=false
    }
    else if(news.value==true){
        news.value=false
    }   
    vise.value = !vise.value
    console.log(vise)

}
//收藏部分
//历史部分
const changeHistory=()=>{
    if(vise.value==true){
        vise.value=false
    }
    visible.value = !visible.value
}
</script>

<style lang="scss" scoped>
div,p{
    margin: 0;
    padding: 0;
}
.header{
    width: 100%;
    height: 50px;
    .nav{
        width: 100%;
        height: 50px;
        font-size: 14px;
        font-weight: bolder;
        font-family: 微软雅黑;
        color: black;
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        .navBox{
            height: 100%;
            margin: 0 auto;
            
        }
    }
    .menus{
       display: flex;
        justify-content: space-between;
       .menuLeft{
            display: flex;
            .titleLeft{
                width: 8%;
                margin: 0;
                padding: 0;
        }
       }
       .search{
        margin-left: 20px;
        width: 400px;
        
        .ant-dropdown-link{
            position: absolute;
            z-index: 999;
            top: -15px;
            left: 25px;
            width:360px;
            justify-items: center;
        }
        
        
       }
       .menuRight{
            display: flex;
            .titleRight{
                width: 8%;
                margin: 0;
                padding: 0;
            }
            .spaceCard{
                width:max-content;
                margin: 0;
                padding: 0;
                text-align: center;
                margin-top: 12px;
                
                border-radius: 10px;
                
            }
       }
    
        
    }
    .newHead{
    width: 100px;
    margin-top: 40px;
    margin-left: 10px;
    height:100px;
    border: solid;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
    .messageList{
    float: left;
    padding: 0;
    overflow-y: scroll;
    border-radius: 5px;
    height: 500px;
    border-width: 0.005cm;
}
   
    }
    
    
}
</style>