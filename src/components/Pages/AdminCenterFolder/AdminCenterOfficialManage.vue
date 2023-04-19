<template>
    <div style="padding: 10px;">
        <div class="Header" style="text-align: left;">
            <a-space size="middle" style="padding: 10px;">
                <router-link to="./ScenicEdit">
                    <a-button>景区介绍</a-button>
                </router-link>
                <router-link to="./NoticeEdit"><a-button>咨询管理</a-button></router-link>
                <router-link to="./SpotEdit"><a-button>景点管理</a-button></router-link>
                <router-link to="./GoodsEdit"><a-button>周边管理</a-button></router-link>
                <router-link to="./ExchangeEdit"><a-button>兑换管理</a-button></router-link>
            </a-space>
        </div>
        <div style="min-height: 620px;border-radius: 10px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>