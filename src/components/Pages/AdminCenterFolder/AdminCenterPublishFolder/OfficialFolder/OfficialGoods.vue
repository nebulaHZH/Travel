<template>
    <div style="text-align: left;margin-left: 40px;margin-top: 40px;font-size: 20px;">
        <div>
            <span>物品名称：</span>
            <a-input placeholder="输入您的标题" style="width: 200px;"></a-input>
        </div>
        <div style="margin-top: 40px;   ">
            <span>内容：</span>
            <br>
            <v-md-editor v-model="text" height="max-content"  :disabled-menus="[]" @upload-image="handleUploadImage"></v-md-editor>
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
            <span>获取方式：</span>
            <a-radio-group v-model:value="exchangeWay">
                <a-radio value="a">代币兑换</a-radio>
                <a-radio value="b">线上购买</a-radio>
            </a-radio-group>
            <br>
            <br>
            <span>价格：</span>
            <a-input-number :controls="false" style="width: 100px;margin-right: 10px;"/>
            <span v-if="exchangeWay=='a'">T</span>
            <span v-else-if="exchangeWay=='b'" >元</span>
        </div>
        <br>
        <a-button type="primary" size="larger" style="margin-left: 40%;width: 80px;">添加</a-button>
        <br>
        <br>
    </div>
</template>

<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import _default, { UploadProps, message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import axios from 'axios'
import type { UploadChangeParam } from 'ant-design-vue';
const fileList = ref([])
const exchangeWay = ref('a')
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

const text = ref("# Vue 3 + TypeScript + Vite\n" +
            "\n" +
            "This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.\n" +
            "\n" +
            "## Recommended IDE Setup\n" +
            "\n" +
            "- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).\n" +
            "\n" +
            "## Type Support For `.vue` Imports in TS\n" +
            "\n" +
            "TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.\n" +
            "\n" +
            "If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:\n" +
            "\n" +
            "1. Disable the built-in TypeScript Extension\n" +
            "   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette\n" +
            "   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`\n" +
            "2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.\n" +
            "\n" +
            "\n" +
            "### 模式：\n" +
            "   第一节课：讲课\n" +
            "   第二节课：做实验\n" +
            "   第三节课：验收\n" +
            "#### 软件协同\n" +
            "   计划阶段暂停了\n" +
            "\n" +
            "##### 开发阶段：\n" +
            "   系统分析，系统实施，\n" +
            "\n" +
            "###### 系统分析：\n" +
            "   1.首先介绍系统分析概念和任务，交代任务，老师提出任务，完成任务\n" +
            "   2.在课堂上完成任务（做的快的可以直接验收）\n" +
            "   3.再上课时验收(根据任务大小看共三次课还是两次课)===>提交审核报告，会议纪要\n" +
            "      在老师审核报告期间指出问题后最后还是存在问题，则会扣分\n" +
            "###### *****审核报告：（无统一模板，在需求分析遇到的问题，如何发现的和如何解决的）===》只要最后报告完善就没问题\n" +
            "   1.用户类型有误\n" +
            "      写如何解决有误的方法\n" +
            "   2.**************\n\n" +
            "![](https://note.mafengwo.net/img/d8/42/15ee1878d06b351714e4a06e24beae28.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90)\n")


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