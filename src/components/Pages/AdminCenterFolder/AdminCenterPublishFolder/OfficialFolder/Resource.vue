<template>
    <div style="text-align: left;margin-left: 40px;margin-top: 40px;font-size: 20px;">
        <div>
            <span>景点名称：</span>
            <a-input placeholder="输入景点名称" style="width: 200px;"/>
            <span style="margin-left: 10px;color: red;">*</span>
        </div>
        <div style="margin-top: 40px;   ">
            <br>
            <v-md-editor v-model="text" :disabled-menus="[]" @upload-image="handleUploadImage"></v-md-editor>
        </div>
        <div style="margin-top: 20px;">
            <span>景点图片上传：</span>
            <a-upload-dragger
                v-model:fileList="fileList"
                name="filePicture"
                :multiple="false"
                style="width: 400px;margin-top: 40px;margin-left: 60px;"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                max-count="5"
                @change="handleChange"
                @drop="handleDrop"
                :before-upload="beforeUpload2"
            >
                <p class="ant-upload-drag-icon" style="margin-top: 60px;">
                <inbox-outlined></inbox-outlined>
                </p>
                <p class="ant-upload-text" >点击上传景点图片</p>
                <br>
                <br>
                <br>
            </a-upload-dragger>
        </div>
        <br>
        <a-button type="primary" size="larger" style="margin-left: 40%;width: 80px;">发布</a-button>
        <br>
        <br>
    </div>
</template>

<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import _default, { UploadProps, message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import type { UploadChangeParam } from 'ant-design-vue';
const fileList = ref([])
const handleUploadImage = (event:any,insertImage:any,files:any)=>{
  //这里上传
  axios.get('http://10.41.220.212:81/picture/').then(ress=>{
    console.log(ress.data)
  }).catch(e=>{
    console.log('报错')
  })
  const formData = new FormData();
  formData.append('file',files[0]);
  axios.post('http://10.41.220.212:81/picture/',formData,{
    headers: {
    'Content-Type': 'multipart/form-data'
  }
  }).then(res=>{
    console.log(res)
  }).catch(e=>{
    if(e.response){
      console.log(e.response)
    }else if(e.request){
      // 查看有没有收到响应
      console.log(e.request)
    }else{
      console.log(e.message)
    }
  })
  console.log(files)
  insertImage({//如果上传成功就插入上传后的网址
        url:
          'http://10.41.220.212:81/picture/81586947706f4d5a9adf071d073bb689.jpg',
        desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
}

const text="#### 暂无"
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