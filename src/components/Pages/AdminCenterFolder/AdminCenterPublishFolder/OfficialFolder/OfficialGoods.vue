<template>
    <div style="text-align: left;margin-left: 40px;margin-top: 40px;font-size: 20px;">
        <div>
            <span>物品名称：</span>
            <a-input placeholder="输入您的标题" style="width: 200px;" v-model:value="titleName"></a-input>
        </div>
        <div style="margin-top: 40px;">
            <span>内容：</span>
            <br>
            <v-md-editor v-model="text" height="max-content"  :disabled-menus="[]" @upload-image="handleUploadImage"></v-md-editor>
        </div>
        <div style="margin-top: 20px;">
            <span>封面上传：</span>
            <a-upload-dragger
                v-model:fileList="fileList"
                name="file"
                :multiple="false"
                :headers="header"
                style="width: 400px;margin-top: 40px;margin-left: 60px;"
                action="/api/data/file/upload"
                max-count="4"
                @change="handleChange"
                :data="{'biz':'derivative_cover'}"
                :before-upload="beforeUpload2"
                :remove="handleFileRemove"
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
            <span>获取方式：</span>
            <a-radio-group v-model:value="exchangeWay">
                <a-radio value="0">代币兑换</a-radio>
                <a-radio value="1">线上购买</a-radio>
            </a-radio-group>
            <br>
            <br>
            <span>价格：</span>
            <a-input-number :controls="false" style="width: 100px;margin-right: 10px;" v-model:value="money"/>
            <span v-if="exchangeWay=='0'">T</span>
            <span v-else-if="exchangeWay=='1'" >元</span>
        </div>
        <br>
        <a-button type="primary" size="larger" style="margin-left: 40%;width: 80px;" @click="submit">添加</a-button>
        <br>
        <br>
    </div>
</template>

<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import _default, { UploadProps, message } from 'ant-design-vue';
import { ref } from 'vue';
import type { UploadChangeParam } from 'ant-design-vue';
import { fileUpload, fileUploadData } from '../../../../../api/DataService/DataFileUpload';
import { officialDerivativeAdd, officialDerivativeAddData } from '../../../../../api/official/officialMall';
const fileList = ref([])
const exchangeWay = ref('0')
const coverUrl = ref<string[]>([])
const header = {
  authentication:'2b5d7640af954456b07e0604d90dbb83'
}
const titleName = ref('')
const money = ref<number>(0)
const text = ref('请输入您想输入的内容！'+'输入图片：![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)'+
                '\n输入代码块：\n```python\n'+'print("hello World")'+'\n```\n'+'表格:\n|column1|column2|column3|\n'+'|-|-|-|\n'+'|content1|content2|content3|')

//上传文件【markdown内】
const handleUploadImage = (event:any,insertImage:any,file:any)=>{
  //这里上传
    let formData = new FormData();
    formData.append('biz', 'derivative_cover')
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
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        coverUrl.value.push(info.file.response.data)
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
    message.error("请填写周边详细内容")
  }else if(fileList.value.length < 4){
    console.log(coverUrl.value)
    message.error("请上传封面")
  }else{
    console.log(coverUrl.value.join(','))
    let msg:officialDerivativeAddData={
      coverUrl: "['"+coverUrl.value.join("','")+"']",
      intro: text.value.slice(1, 20),
      derivativeName: titleName.value,
      obtainMethod: parseInt(exchangeWay.value),
      price: money.value,
      typeId: 1,
    }
    officialDerivativeAdd(msg).then((res)=>{
      console.log(res.data)
      message.success("发布成功！")
      text.value = '请输入您想输入的内容！'+'输入图片：![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)'+
      '\n输入代码块：\n```python\n'+'print("hello World")'+'\n```\n'+'表格:\n|column1|column2|column3|\n'+'|-|-|-|\n'+'|content1|content2|content3|'
      titleName.value = ''  
      money.value = 0
    })
  }
}
const handleFileRemove = (file:File)=>{
//删除还没做
}
</script>

<style scoped>
</style>