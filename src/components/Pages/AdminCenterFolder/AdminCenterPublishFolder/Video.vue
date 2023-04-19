<template>
    <div style="text-align: left;margin-left: 40px;margin-top: 40px;font-size: 20px;">
        <div>
            <span>视频标题：</span>
            <a-input placeholder="输入您的标题" style="width: 200px;"></a-input>
        </div>
        <div style="margin-top: 40px;   ">
            <span>简介：</span>
            <br>
            <a-textarea placeholder="简述您的视频" style="width: 600px;height: 100px;margin-left: 60px;margin-top: -22px;"></a-textarea>
        </div>
        <div style="margin-top: 20px;">
            <span>视频上传：</span>
            <a-upload-dragger
                v-model:fileList="fileList"
                name="file"
                :multiple="true"
                style="width: 400px;margin-top: 40px;margin-left: 60px;"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                max-count="1"
                @change="handleChange"
                @drop="handleDrop"
                :before-upload="beforeUpload"
            >
                <p class="ant-upload-drag-icon" style="margin-top: 60px;">
                <inbox-outlined></inbox-outlined>
                </p>
                <p class="ant-upload-text" >点击上传视频</p>
                <br>
                <br>
                <br>
            </a-upload-dragger>
        </div>
        <div style="margin-top: 20px;">
            <span>封面上传：</span>
            <a-upload-dragger
                v-model:fileList="fileList"
                name="filePicture"
                :multiple="false"
                style="width: 400px;margin-top: 40px;margin-left: 60px;"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                max-count="1"
                @change="handleChange"
                @drop="handleDrop"
                :before-upload="beforeUpload2"
            >
                <p class="ant-upload-drag-icon" style="margin-top: 60px;">
                <inbox-outlined></inbox-outlined>
                </p>
                <p class="ant-upload-text" >点击上传封面</p>
                <br>
                <br>
                <br>
            </a-upload-dragger>
        </div>
        <div style="margin-top: 30px;">
            <span>选择发布范围：</span>
            <a-radio-group :value="value" @change="changes($event)">
                <a-radio value="1">公开</a-radio>
                <a-radio value="2">部分可见</a-radio>
                <a-radio value="3">私密</a-radio>
            </a-radio-group>
            <br>
            <div v-if="value === '2'" style="margin-top: 20px;">
                <span>选择要发布到：</span>
                <a-button>团队列表</a-button>
                <br>
            </div>
            <br>
            <div>
                <span>自定义标签：</span>
                <a-input style="width: 200px;" v-model:value="tagDiy"/>
                <a-button  @click.prevent="moreTags">确定</a-button>
                <div v-if="tags">
                    <a-tag closable v-for="item in tags" @close="popTags($event)"> {{ item }}</a-tag>
                </div>
            </div>
        </div>
        <br>
        <a-button type="primary" size="larger" style="margin-left: 40%;width: 80px;">确定</a-button>
        <br>
        <br>
    </div>
</template>

<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import _default, { UploadProps, message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam } from 'ant-design-vue';
const fileList = ref([])
const handleChange = (info: UploadChangeParam) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };
const handleDrop = ()=>{
    console.log("");
}
const beforeUpload = (file: UploadProps['fileList'][number]) => {
  const isVideo = file.type === 'video/MP4' || file.type === 'video/MOV' || file.type === 'video/AVI' || file.type === 'video/FLV';
  if (!isVideo) {
    message.error('只支持上传视频文件FLV 、AVI、MOV、MP4、WMV');
  }
  const isLt10GB = file.size / 1024 / 1024 /1024 < 10;
  if (!isLt10GB) {
    message.error('视频大小必须小于10GB');
  }
  return isVideo && isLt10GB;
};
const beforeUpload2 = (file: UploadProps['fileList'][number]) => {
  const isVideo = file.type === 'image/png' || file.type === 'image/jpg';
  if (!isVideo) {
    message.error('只支持上传图片');
  }
  const isLt10GB = file.size / 1024 / 1024 < 10;
  if (!isLt10GB) {
    message.error('视频大小必须小于10MB');
  }
  return isVideo && isLt10GB;
};
const changes=(e:any)=>{
    value.value = e.target.value
    
}
const tagDiy =ref()
const value = ref<string>('1')
const tags=ref<string[]>(['hdsaj'])
const moreTags = ()=>{
    const s = (tagDiy.value);
    tags.value.push(s)
}
const popTags = (e:any)=>{
  const x = tags.value.indexOf(e.currentTarget.parentElement.innerText)
  if(x!==-1){
    tags.value.splice(x,1)
  }
}
</script>

<style scoped>

</style>