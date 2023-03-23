<template>
    <div class="header">
        <div class="nav">
            <div class="navBox">
                <a-menu v-model:selectedKeys="current" mode="horizontal" class="menus">
                <div class="titleMain" style="background: transparent;">
                    <a-space align="center" class="blocks">
                    <div  class="menuLeft">
                    
                    <a-menu-item key="TravelName" class="titleLeft" >
                    <a class="TravelName" href="../Home">Travel</a>
                    </a-menu-item>
                    <a-menu-item key="Main" class="titleLeft">
                    <a class="names" href="../Home">首页</a>
                    </a-menu-item>
                    <a-menu-item key="Team" class="titleLeft">
                    <a class="names" href="../Teams">团队</a>
                    </a-menu-item>
                    <a-menu-item key="Scenic" class="titleLeft">
                    <a class="names" href="../Scenic">景区</a>
                    </a-menu-item>  
                    <a-menu-item key="Write" class="titleLeft">
                    <a class="names" href="../Notes">游记</a>
                    </a-menu-item>
                    <a-menu-item key="Market" class="titleLeft">
                    <a class="names" href="../Mall">周边</a>
                    </a-menu-item>
                </div>
<!-- 搜索栏部分 -->
                <div class="search" style="background: transparent;">
                    <a-menu-item key="search"   class="searchInput">
                        <div ref="dropwn">
                            <a-dropdown trigger="click" :getPopupContainer="(trigger) => trigger.parentNode">
                            
                            <a-input-search   class="ant-dropdown-link" v-model:value="info" placeholder="请输入想查询的内容" id="MainSearch" size="default" />
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
                                        <!-- 这里用v-for 遍历把tag填入 -->
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
                    </div>
                </a-menu-item>
                </div>
<!-- 右边的导航栏 -->
                <div class="menuRight" style="background: transparent;">
<!-- 我的 -->
                    <a-menu-item key="my" class="titleRight" >
                        
                        <a-dropdown :getPopupContainer="(trigger) => trigger.parentNode">
                            <a href="../My">
                                <a-avatar class="ant-dropdown-link" >
                                <template #icon>
                                <user-outlined />
                                </template>
                            </a-avatar>
                            </a>
                            
                            <template #overlay>
                            <div style="text-align: center;">
                                <a-menu style="margin-left: -30%;margin-top: 4px;width: 120px;border-radius: 10px;">
                                    <a-menu-item>
                                        <template #icon>
                                            <user-outlined /> 
                                        </template>
                                    <a href="../My">
                                        个人中心
                                    </a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <template #icon>
                                            <logout-outlined /> 
                                        </template>
                                        <a href="">退出</a>
                                    </a-menu-item>
                                </a-menu>
                            </div>
                            
                            </template>
                        </a-dropdown>
                    </a-menu-item>
<!-- 动态 -->
                    <a-menu-item key="space" class="titleRight" >
                        <a-dropdown  :getPopupContainer="(trigger) => trigger.parentNode" v-model="news">
                            <a class="ant-dropdown-link" @click.prevent @mouseover="changeNews">动态</a>
                            <template #overlay>
                                <div style="text-align: center">
                                    <a-card
                                        class="spaceCard"
                                        :tab-list="tabListNoTitle"
                                        :active-tab-key="noTitleKey"
                                        @tabChange="key => onTabChange(key, 'noTitleKey')"
                                    >
                                        <p v-if="noTitleKey === '动态'">动态</p>
                                        <p v-else-if="noTitleKey === '游记'">游记</p>
                                        <p v-else>消息</p>
                                    </a-card>
                                </div>
                            </template>
                        </a-dropdown>
                    </a-menu-item>
<!-- 收藏 -->
                    <a-menu-item key="collection"  class="titleRight" >
                        <a-dropdown v-model="vise"  :getPopupContainer="(trigger) => trigger.parentNode"  style="margin-top:12px;" :visible="vise">
                            <a class="titleIcon"   @mouseover="change">
                                收藏
                            </a>
                            <template #overlay>
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
                            
                            </template>
                        </a-dropdown>
                    </a-menu-item>
<!-- 历史 -->
                    <a-menu-item v-model="visible" key="history"  class="titleRight" >
                        <a-dropdown  :getPopupContainer="(trigger) => trigger.parentNode">
                            <a class="ant-dropdown-link" @mouseover="changeHistory" >历史</a>
                            <template #overlay>
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
                            </template>
                        </a-dropdown>
                    </a-menu-item>
<!-- 管理中心 -->
                    <a-menu-item key="administrator" class="titleRight">
                        <div class="titleIcon">
                            <span class="menuName">管理中心</span>
                        </div>
                    </a-menu-item>
<!-- 发布 -->
                    <a-menu-item key="publish" class="titleRight" style="background-color:cornflowerblue">
                        <div class="titleIcon">
                            <span class="menuName" style="color: white;">发布 </span>
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
const current = ref<string[]>(['TravelName']);
const info=""
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
const key = ref('tab1');
const noTitleKey = ref('app');
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
                width:220px;
                text-align: center;
                margin-top: 12px;
                margin-left: -40%;
                border-radius: 10px;
                
            }
       }
    
        
    }
    
    
}
</style>