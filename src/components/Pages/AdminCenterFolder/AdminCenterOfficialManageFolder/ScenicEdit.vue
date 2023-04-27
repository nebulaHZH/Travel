<template>
  <div>
    <div style="text-align: left;font-weight: 700;font-size: 20px;padding: 20px;">
      <span>官方名称：</span>
      <a-input style="width: 200px;" v-model:value="officialName"></a-input>
      <span style="color: red;margin-left: 10px;">*</span>
    </div>
    <div class="home">
      <v-md-editor v-model="text" height="max-content" :disabled-menus="[]" @upload-image="handleUploadImage"></v-md-editor>
    </div>
    <br>
    <div style="display: flex;">
      
      <div>
        
      <a-upload
        v-model:file-list="fileList"
        name="file"
        list-type="picture-card"
        class="upload-list-inline"
        :show-upload-list="true"
        action="/api/data/file/upload"
        :data="{'biz':'official_cover'}"
        :headers="header"
        :before-upload="beforeUpload"
        :max-count="1"
        @change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
          <loading-outlined v-if="loading"></loading-outlined>
          <plus-outlined v-else></plus-outlined>
          <div class="ant-upload-text">视频上传</div>
        </div>
      </a-upload>

    </div>
    <div style="text-align: left;margin-left: 50px;margin-top: 0px;"  >
      <a-upload
        v-model:file-list="fileList1"
        :max-count="1"
        :headers="header"
        action="/api/data/file/upload"
        :data="{'biz':'official_cover'}"
        :before-upload="beforeUpload2"
        list-type="picture-card"
        class="upload-list-inline"
      >
        <div >
          <upload-outlined></upload-outlined>
          封面上传
        </div>
      </a-upload>
    </div>
    
    </div>
    <div>
        <a-button type="primary" @click="submit">保存</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref  } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { fileUpload, fileUploadData } from '../../../../api/DataService/DataFileUpload';
import { officialUpdateIntro, officialUpdateIntroData } from '../../../../api/official/official';
const officialName = ref('')
const header = {
  authentication:'2b5d7640af954456b07e0604d90dbb83'
}
const coverurl = ref('')
const coverurl1 = ref('')
// 图片上传
const fileList1 = ref([]);
//上传文件【markdown内】
const handleUploadImage = (event:any,insertImage:any,file:any)=>{
  //这里上传
    let formData = new FormData();
    formData.append('biz', 'official_cover')
    formData.append('file',file[0]);
    console.log(formData.get('file'))
    console.log(file[0])
    let a:fileUploadData={
      file: formData
    }
  fileUpload(a).then((res)=>{
    const cover = ref('')
    cover.value = res.data.data
    insertImage({//如果上传成功就插入上传后的网址
        url:encodeURI(res.data.data),
        desc: '图片',
        // width: 'auto',
        // height: 'auto',
      });
    }
)
}

//上传视频
const handleChange1 = (info: UploadChangeParam) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        console.log(info.file.response.data)
        coverurl1.value = info.file.response.data
        message.success(`${info.file.name} 文件上传成功.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    };
//上传封面
const handleChange = (info: UploadChangeParam) => {
      const status = info.file.status;
      console.log(fileList.value[0])
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        coverurl.value = info.file.response.data
        message.success(`${info.file.name} 文件上传成功.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    };
//上传时判断类型
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
}
const text = ref('请输入您想输入的内容！'+'输入图片：![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)'+
                '\n输入代码块：\n```python\n'+'print("hello World")'+'\n```\n'+'表格:\n|column1|column2|column3|\n'+'|-|-|-|\n'+'|content1|content2|content3|')

// 视频上传
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

const beforeUpload = (file: UploadProps['fileList'][number]) => {
  const isVideo = file.type === 'video/MP4' || file.type === 'video/MOV' || file.type === 'video/AVI' || file.type === 'video/mp4';
  if (!isVideo) {
    message.error('只支持上传视频文件FLV 、AVI、MOV、MP4、WMV');
  }
  const isLt10GB = file.size / 1024 / 1024 /1024 < 10;
  if (!isLt10GB) {
    message.error('视频大小必须小于10GB');
  }
  return isVideo && isLt10GB;
}
// 提交发布
const submit=()=>{
  if(officialName.value === ''){
    message.error("没有填写标题")
  }else if(text.value === ''){
    message.error("请填写官方资源内容")
  }else if(fileList.value.length === 0){
    message.error("请上传封面")
  }else{
    let msg:officialUpdateIntroData={
    //tag: '标签',
    id: 1,
    videoUrl: coverurl1.value,
    coverUrl: coverurl.value,
    intro: text.value.slice(1, 20),
    detail: text.value,
    officialName: officialName.value,
    officialDetailId: 1
}
officialUpdateIntro(msg).then((res)=>{
      console.log(res.data)
      message.success("更新成功！")
      text.value = '请输入您想输入的内容！'+'输入图片：![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)'+
      '\n输入代码块：\n```python\n'+'print("hello World")'+'\n```\n'+'表格:\n|column1|column2|column3|\n'+'|-|-|-|\n'+'|content1|content2|content3|'
      officialName.value = ''  
      fileList.value = []
    })
  }
}
</script>
  
<style scoped lang="scss">
.home {
  background: white;
  text-align: left;
  border: solid 0.01cm;
}
.avatar-uploader{
  font-size: 40px;
  margin-top: 10px;
  text-align: left;
  margin-left: 40px;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 20px;
  color: #666;
}
</style>
