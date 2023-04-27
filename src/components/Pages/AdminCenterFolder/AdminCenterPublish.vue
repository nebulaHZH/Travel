<template>
    <div style="padding: 10px;">
        <div style="text-align: left;background-color: rgba(102, 51, 153, 0.5);padding: 10px;border-radius: 5px;">
            <router-link to="/AdminCenter/AdminCenterPublish/Write">
                <a-button>文章发布</a-button>
            </router-link>
            <router-link to="/AdminCenter/AdminCenterPublish/Video">
                <a-button>视频发布</a-button>
            </router-link>
            <router-link to="/AdminCenter/AdminCenterPublish/Official/">
                <a-button>官方发布</a-button>
            </router-link>
        </div>
        <div style="">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.c{
    background-color: rgb(102, 51, 153);
}
</style>