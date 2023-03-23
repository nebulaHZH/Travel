<template>
    <div class="home">
        <Header class="header"></Header>
        <Content class="Content"></Content>
        <Footer class="Footer"></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Content from "./common/Content.vue"

</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    margin: 0%;
    padding: 0%;
    position: absolute;
    .header{
        
        top: 0;
        height: 50px;
    }
    .Content{
        width: 100%;
        height: 600px;
    }
    .Footer{
        width: 100%;
        height: 100px;
    }
}
</style>