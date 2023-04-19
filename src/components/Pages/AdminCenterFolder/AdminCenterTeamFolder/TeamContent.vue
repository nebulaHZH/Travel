<template>
    <div style="text-align: left;margin-top: 20px;margin-left: 8 0px;">
        <div >
            <img src="https://p1-q.mafengwo.net/s19/M00/59/5E/CoNJ9WQuclx1FVZ2AACi0hCC5-w.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" class="head">
            <a-input style="margin-left: 30px;font-size: 20px;width: 160px;" placeholder="团队名字"></a-input>
        </div>
        <div style="margin-top: 20px;margin-left: 100px;font-size: 18px;">
            <span>团队容量：</span>
            <span>100/200人</span>
            <a-button type="danger" style="margin-left: 40px;">扩容</a-button>
        </div>
        <div style="margin-top: 20px;text-align: left;">
            <span style="font-size: 19px;">团队简介：</span>
            <pre style="width: 500px;height: 300px;font-size: 16px;border: solid 0.01cm;margin-left: 100px;padding: 10px;">{{introduction}}</pre>
        </div>
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
            <a-switch v-model:checked="checked" />
            <br>
            <br>
            <a-button type="primary" style="margin-left: 30%;">保存</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UploadProps } from 'ant-design-vue';
import { ref } from 'vue';

const introduction = ref('sdadsdadsda')
const fileList = ref<UploadProps['fileList']>([]);
const checked = ref<boolean>(false);
</script>

<style scoped lang="scss">
.head{
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
</style>