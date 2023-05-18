<template>
    <div>
        <div style="width: 100%;height:200px">
            <div class="top">
                <div style="width: max-content;position: relative;">
                    <img class="head" :src=user?.user?.userAvatar alt="" >
                    <span class="myName" style="">{{ user?.user?.userName }}</span>
                    <span class="motor">更新于 ：{{ user?.createTime }}</span>
                    
                </div>
            </div>
            <div>
                <div style="margin-left: 10%;width: 80%;margin-top: 20px;text-align: left;border: solid 0.01cm;padding: 20px;">
                        <div style="margin-top: 40px;padding: 20px;" >
                            <span style="font-size: larger;padding: 20px;padding-left: 30px;padding-right: 30px;background-color: blueviolet;color: white;border-radius: 5px;font-size:30px;"   >{{ SpotName }}</span>

                        </div>
                        <br>
                        <br>
                        <div>
                        <p style="margin-top: 20px;width: 100%;" v-html="markdowns"></p>
                    </div>
                </div>

            
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed,onMounted,ref} from 'vue'
import md from 'markdown-it'
import { useRoute } from 'vue-router';
import { officialGetNoticeById, officialGetNoticeByIdData } from '../../api/official/officialNotification';
const markdown = ref("")
const mds = new md()
const SpotName = ref("")
const markdowns = computed(()=>(mds.render(markdown.value)))
const user = ref()
const getLikes = ref('关注')
const route = useRoute()
onMounted(() => {
    if(route.query.Nid!==null){
        let data:officialGetNoticeByIdData={
            id: route.query.Nid
        }
        officialGetNoticeById(data).then((res)=>{
            console.log(res.data)
            markdown.value = res.data.data.detail
            SpotName.value = res.data.data.title
            user.value = res.data.data
        })
    }
    
})
</script>

<style scoped>
/* 选项 */
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
.top{
    background-image: url('https://img.zcool.cn/tubelocation/844564131f7d000e991000e46abc.jpg?x-oss-process=image/format,webp/quality,q_100');
    height: max-content;
    padding: 0;
}
.motor{
    
    margin-top: 160px;
    position: absolute;
    width: max-content;
    width:300px;
    border-radius: 10px;
}

</style>