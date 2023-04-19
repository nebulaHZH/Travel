<template>
    <div>
        <div style="text-align: left;padding: 10px;margin-left: -10px;"> 
            <router-link to="./Notices">
                <a-button>资讯发布</a-button>
            </router-link>
            <router-link to="./OfficialGoods">
                <a-button>周边发布</a-button>
            </router-link>
            <router-link to="./Resource">
                <a-button>官方资源发布</a-button>
            </router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>