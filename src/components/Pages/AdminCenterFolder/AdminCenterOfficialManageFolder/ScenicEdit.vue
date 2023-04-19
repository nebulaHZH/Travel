<template>
  <div>
    <div class="home">
      <v-md-editor v-model="text" height="max-content" :disabled-menus="[]" @upload-image="handleUploadImage"></v-md-editor>
    </div>
    <div style="display: flex;">
      <div>
      <a-upload
        v-model:file-list="fileList"
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
    <div style="text-align: left;margin-left: 40px;margin-top: 10px;"  >
  
    <a-upload
      v-model:file-list="fileList1"
      :max-count="4"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
    
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

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

// 视频上传
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === 'error') {
    loading.value = false;
    message.error('upload error');
  }
};

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


function getBase64(originFileObj: import("ant-design-vue/lib/upload/interface.js").FileType | undefined, arg1: (base64Url: string) => void) {
throw new Error('Function not implemented.');
}
// 图片上传
const fileList1 = ref<UploadProps['fileList']>([
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ]);
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
