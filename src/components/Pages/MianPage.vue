
        <template>
            <div>
                <div>
                <div style="height: 250px;" class="backImg item">
                <div class="backgroundImg"></div>
            </div>
            <div style="height: 40px;width: 100%"></div>
                <!-- 热点景区 -->
                <div v-for="selection in selections" key="selection">
                    <div class="selectName" >
                        {{ selection.name }}
                    </div>
                    <a-row type="flex" justify="space-around" align="middle" v-for="row of 2" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                        <a-col :span="4" v-for="column of 3" key="column">
                            <a-card hoverable style="width: 300px">
                                <template #cover>
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    style="width: 300px;height:220px;overflow: hidden;"
                                />
                                </template>
                            <div>
                                <span style="float:left;">景区名字</span>
                            </div>        
                            <br>
                            <div>
                                <span>
                                    对景区的相关描述--------------------
                                </span>
                            </div>
                            </a-card>
                        </a-col>
                    </a-row>
                    <div>
                        <a-button type="primary" style="margin-bottom:200px;margin-top:70px">显示更多</a-button>
                    </div>
                </div>
                <div>
                    <span>designed by hhz 2023.3.7</span>
                </div>
            </div>
            </div>
            

            
          </template>
          <script lang="ts" setup>
          import { computed, defineComponent, reactive, toRefs } from 'vue';
         let spotName = "景区名字"
         const selections=[
            {name:"热点景区"},
            {name:"优质游记"},
            {name:"热门团队"},
            {name:"周边商城"},
        ]
          </script>
          <style scoped lang="scss">
          #components-grid-demo-playground :deep(.ant-col) {
            background: transparent;
            border: 0;
          }
          #components-grid-demo-playground :deep(.ant-col) > div {
            background: #00a0e9;
            height: 120px;
            line-height: 120px;
            font-size: 13px;
          }
          #components-grid-demo-playground pre {
            background: #f9f9f9;
            border-radius: 6px;
            font-size: 13px;
            padding: 8px 16px;
          }
          [data-theme='dark'] #components-grid-demo-playground pre {
            background: #2f2f2f;
          }
          /*  */
          .content{
            margin: 0   ;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(1, 1000px);
            grid-gap: 20px;
            grid-template-rows: 100px 200px;
          }
            .backImg{
                width: 100%;
                margin: 0;
                padding: 0;
                .backgroundImg{
                width: 100%;
                margin-top: 0;
                margin-top: 0;
                background-size: 100%;
                background-repeat: no-repeat;
                background-image: url("../../assets/navPicture.png");
                height: 250px;
                text-align: center;
                
                overflow: hidden;
                }
            }
            .selectName{
                font-size: 30px;
                font-weight:bolder;
                margin-bottom:30px;
                font-family: Youyuan;
                border: solid black;
                width: fit-content;
                margin-left: 45%;
            }

          </style>
          
