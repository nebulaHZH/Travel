<template>
    <div>
        <keep-alive >
            <div class="Left">
                <a-menu
                id="dddddd"
                v-model:selectedKeys="selectedKeys"
                style="width: 13%;margin-left: 2%;margin-top: 50px;height: 500px;position: fixed;padding-bottom: 80px;"
                mode="inline"
                >   
                    <a-menu-item style="margin-top: 10px;text-align: center;" class="select" key="AdminCenterHome">
                        <router-link to="/AdminCenter/AdminCenterHome" class="select">
                            <span class="select" type="larger">首页</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item style="margin-top: 10px;text-align: center;" key="personal">
                        <router-link to="/AdminCenter/AdminCenterPersonal" class="select">
                            <span class="select" type="larger">个人资料</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item style="margin-top: 10px;text-align: center;" key="pubish">
                        <router-link to="/AdminCenter/AdminCenterPublish" class="select">
                            <span class="select" type="larger">发布</span>
                        </router-link>
                    </a-menu-item>

                    <a-menu-item style="margin-top: 10px;text-align: center;" key="publishManage">
                        <router-link to="/AdminCenter/AdminCenterPublishManage" class="select">
                            <span class="select" type="larger">发布管理</span>
                        </router-link>
                    </a-menu-item>

                    <a-menu-item style="margin-top: 10px;text-align: center;" key="commentManage">
                        <router-link to="/AdminCenter/AdminCenterCommentManage" class="select">
                            <span class="select" type="larger">评论管理</span>
                        </router-link>
                    </a-menu-item>

                    <a-menu-item style="margin-top: 10px;text-align: center;" key="exchangeHistory">
                        <router-link to="/AdminCenter/AdminCenterExchangeHistory" class="select">
                            <span class="select" type="larger">兑换记录</span>
                        </router-link>
                    </a-menu-item>

                    <a-menu-item style="margin-top: 10px;text-align: center;" key="officialManage">
                        <router-link to="/AdminCenter/AdminCenterOfficialManage" class="select">
                            <span class="select" type="larger">官方管理</span>
                        </router-link>
                    </a-menu-item>

                    <a-menu-item style="margin-top: 10px;text-align: center;" key="teamManage">
                        <router-link to="/AdminCenter/AdminCenterTeamManage" class="select">
                            <span class="select" type="larger">团队管理</span>
                        </router-link>
                    </a-menu-item>


                </a-menu>
            </div>
        </keep-alive>
        <div class="Right">
                <router-view></router-view>
            
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {RouteLocationNormalized, Router} from 'vue-router'
import router from '../../router';
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  // 根据路由路径设置左侧菜单栏的选中状态
  if (to.path === '/AdminCenter/AdminCenterHome') {
    selectedKeys.value = ['home']
  } else if (to.path === '/AdminCenter/AdminCenterPersonal') {
    selectedKeys.value = ['personal']
  } else if (to.path === '/AdminCenter/AdminCenterPublish') {
    selectedKeys.value = ['pubish']
  } else if (to.path === '/AdminCenter/AdminCenterPublishManage') {
    selectedKeys.value = ['publishManage']
  } else if (to.path === '/AdminCenter/AdminCenterCommentManage') {
    selectedKeys.value = ['commentManage']
  } else if (to.path === '/AdminCenter/AdminCenterExchangeHistory') {
    selectedKeys.value = ['exchangeHistory']
  } else if (to.path === '/AdminCenter/AdminCenterOfficialManage') {
    selectedKeys.value = ['officialManage']
  } else if (to.path === '/AdminCenter/AdminCenterTeamManage') {
    selectedKeys.value = ['teamManage']
  } else {
    // 如果路径无法匹配任何选项，则将选中状态重置为默认状态
    selectedKeys.value = []
  }
  next()
})
const selectedKeys=ref<string[]>(['home'])
</script>

<style scoped>

.select{
    width: 100%;
    height: 200px;
}
.Right{
    margin-left: 16%;
    border: solid 0.01cm;
    height: max-content;
    margin-right: 100px;
    border-radius: 10px;
}
</style>