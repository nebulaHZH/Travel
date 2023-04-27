<template>
    <div style="text-align: left;margin-left: 40px;margin-top: 40px;font-size: 20px;">
        <div>
            <span>景点名称：</span>
            <a-input placeholder="输入景点名称" style="width: 200px;" v-model:value="titleName"/>
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
                name="file"
                :multiple="false"
                style="width: 400px;margin-top: 40px;margin-left: 60px;"
                action="/api/data/file/upload"
                max-count="1"
                :headers="header"
                :data="{'biz':'official_cover'}"
                @change="handleChange"
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
        <a-button type="primary" size="larger" style="margin-left: 40%;width: 80px;" @click="submit">发布</a-button>
        <br>
        <br>
    </div>
</template>

<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import _default, { UploadProps, message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam } from 'ant-design-vue';
import { fileUpload, fileUploadData } from '../../../../../api/DataService/DataFileUpload';
import { officialResourceAdd, officialResourceAddData } from '../../../../../api/official/officialResource';
const fileList = ref([])
const text = ref('请输入您想输入的内容！'+'输入图片：![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)'+
                '\n输入代码块：\n```python\n'+'print("hello World")'+'\n```\n'+'表格:\n|column1|column2|column3|\n'+'|-|-|-|\n'+'|content1|content2|content3|')
const header = {
  authentication:'2b5d7640af954456b07e0604d90dbb83'
}
const coverUrl=ref('')
const titleName = ref('')
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
//上传封面
const handleChange = (info: UploadChangeParam) => {
      const status = info.file.status;
      console.log(fileList.value[0])
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        coverUrl.value = info.file.response.data
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

// 提交发布
const submit=()=>{
  if(titleName.value === ''){
    message.error("没有填写标题")
  }else if(text.value === ''){
    message.error("请填写官方资源内容")
  }else if(fileList.value.length === 0){
    message.error("请上传封面")
  }else{
    let msg:officialResourceAddData={
        coverUrl: coverUrl.value,
        intro: text.value.slice(1, 20),
        detail: text.value,
        title: titleName.value
    }
    officialResourceAdd(msg).then((res)=>{
      console.log(res.data)
      message.success("发布成功！")
      text.value = '请输入您想输入的内容！'+'输入图片：![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)'+
      '\n输入代码块：\n```python\n'+'print("hello World")'+'\n```\n'+'表格:\n|column1|column2|column3|\n'+'|-|-|-|\n'+'|content1|content2|content3|'
      titleName.value = ''  
      fileList.value = []
    })
  }
}
</script>

<style scoped>

</style>