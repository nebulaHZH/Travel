<template>
    <div style="text-align: left;margin-top: 20px;margin-left: 8 0px;">
        <div >
            <img :src="avatar" class="head">
            <a-input style="margin-left: 30px;font-size: 20px;width: 160px;" placeholder="团队名字" v-model:value="teamDetail.teamName"></a-input>
        </div>
        <div style="margin-top: 20px;margin-left: 100px;font-size: 18px;">
            <span>团队容量：</span>
            <span>{{ teamDetail.capacity }}人</span>
            <a-button type="danger" style="margin-left: 40px;">扩容</a-button>
        </div>
        <span style="font-size: 19px;">团队简介：</span>
        <div style="margin-top: 20px;text-align: left;">
            
            <a-textarea style="margin-top: -30px;width: 500px;height: 300px;font-size: 16px;border: solid 0.01cm;margin-left: 100px;padding: 10px;" v-model:value="teamDetail.intro"></a-textarea>
        </div>
        <br>
        <div>
            <a-upload
            v-model:file-list="fileList"
            list-type="picture"
            :max-count="1"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
                <a-button>
                    <upload-outlined></upload-outlined>
                    封面上传(最多一个)
                </a-button>
            </a-upload>
        </div>
        <div style="margin-top: 30px;">
            <span>是否需要审核：</span>
            <a-switch v-model:checked="teamDetail.ischecked" />
            <br>
            <br>
            <a-button type="primary" style="margin-left: 30%;" @click="saveTeam">保存</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UploadProps } from 'ant-design-vue';
import { ref,watch} from 'vue';
import '../../../../api/team/teamMember';
import { teamAddData, teamPersonalCreate, teamQueryPersonal, teamQueryPersonalData } from '../../../../api/team/teamMember';
import { teamAdd } from '../../../../api/team/teamMember';
import { useCounterStore } from '../../../../pinia';
import { storeToRefs } from 'pinia';
const load = useCounterStore()
const {teamDetail} = storeToRefs(load)
const ch = ()=>{
    if(teamDetail.value.isAudit === 1){
        return true
    }
    else{
        return false
    }
}
const fileList = ref<UploadProps['fileList']>([]);
watch(teamDetail.value,(value,oldvalue)=>{
    if(teamDetail.value.isAudit === 1){
        teamDetail.value.ischecked = true
    }else{
        teamDetail.value.ischecked = false
        
    }
})
const avatar = ref<string>('https://p1-q.mafengwo.net/s19/M00/59/5E/CoNJ9WQuclx1FVZ2AACi0hCC5-w.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90')
const saveTeam = (e:any)=>{
    let isAudit = 0
    if(teamDetail.value.ischecked===true){
        isAudit = 1
    }
    let teamMessage:teamAddData = {
    capacity: 100,
    coverUrl: "https://p1-q.mafengwo.net/s19/M00/59/5E/CoNJ9WQuclx1FVZ2AACi0hCC5-w.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
    iconUrl: "https://p1-q.mafengwo.net/s19/M00/59/5E/CoNJ9WQuclx1FVZ2AACi0hCC5-w.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
    intro: teamDetail.value.intro,
    isAudit: isAudit,
    teamName: teamDetail.value.teamName
    }
    teamAdd(teamMessage).then((response)=>{
        if(response.status === 200){
            alert("创建成功！");
            teamDetail.value.ischecked = false
            teamDetail.value.teamName = ''
            teamDetail.value.intro=''
            let aaaa:teamQueryPersonalData={
            }
            teamQueryPersonal(aaaa).then((res)=>{
                console.log(res.data)
                if(res.status === 200 ){
                    load.teamList = res.data.data
                }
                console.log(load.teamList)
            })
            
        }
    })
    
}
</script>

<style scoped lang="scss">
.head{
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
</style>