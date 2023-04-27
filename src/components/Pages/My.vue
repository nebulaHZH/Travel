<template>
    <div style="background-color:bisque ;height: max-content;padding: 0;">
        <div style="width: 100%;height:200px">
            <div class="top">
                <div style="width: max-content;">
                    <a-upload-dragger
                        v-model:fileList="fileList"
                        name="file"
                        :multiple="false"
                        :headers="header"
                        class="avatar-uploader"
                        list-type="picture-card"
                        :show-upload-list="false"
                        style="width: 130px;border-radius: 50%;margin-left: 100px;padding: 0;min-height: 100px;background: transparent;"
                        action="/api/data/file/upload"
                        max-count="1"
                        @change="handleChange"
                        :data="{'biz':'user_avatar'}"
                        :before-upload="beforeUpload2"
                    >
                    <img  style="width: 100px;height: 100px;border-radius: 50%" class="head" :src=message?.userAvatar alt="" >
                    </a-upload-dragger>
                    
                    <span class="myName" style="">{{ message?.userName }}</span>
                    <a-button class="apply">申请官方</a-button>
                    <a-input class="motor"  :placeholder="message?.signature"/>
                    <a-button class="edit" ghost="true">
                        <img class="editIcon" src="https://s1.aigei.com/src/img/png/c1/c1397c87cde441dca3252b026ac0c39d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:7-_pE33tleIC5NDkx0MFWJ-JKcg=" alt="" style="width: 20px;">
                    </a-button>
                </div>
                <div style="float: right;margin-top: -100px;margin-right: 10%;">
                    <a-button @click="chageLikeState()"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ likes }}</a-button>
                </div>
                
            </div>
            
        </div>
        <div style="margin-top: 80px;margin-left: 12%;width: max-content;margin-bottom: 40px;" >
            <a-radio-group v-model:value="values"  size="large" style="width:max-content;">
                <a-radio-button value="news">最新动态</a-radio-button>
                <a-radio-button value="notes">我的游记</a-radio-button>
                <a-radio-button value="teams">我的团队</a-radio-button>
                <a-radio-button value="likes">我的关注</a-radio-button>
                <a-radio-button value="collection">我的收藏</a-radio-button>
                <a-radio-button value="history">历史记录</a-radio-button>
            </a-radio-group>
            <a-input-search  style="margin-left: 40px;width: 300px;"  v-model:value="info" placeholder="请输入想查询的内容"  size="large"/>
            <span style="font-weight: 600;margin-left: 30px;">获赞数：</span>
            <span>{{ likeCount}}</span>
            <span style="font-weight: 600;margin-left: 30px;">浏览数：</span>
            <span>{{ browserCount}}</span>
        </div>
        <div v-if="values=== 'notes'" class="myNotes" style="background-color: white;width: 100%;;">
            <div style="width: 100%;background-color: white;width: 88%%;margin-left: 12%;border-radius:10px">
                <a-row v-for="item in items" ref="items">
                <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 30px;" :id="item.id">
                    <div style="float: right;margin-right: 10%;margin-top: 10px;">
                        
                        <a-dropdown :getPopupContainer="(trigger) => trigger.parentNode">
                            <div  style="width: 20px;height: 20px;border-radius: 5px;background: transparent;background-size: contain;background-repeat: no-repeat;background-image: url('https://s1.chu0.com/src/img/png/f8/f874e6406cd6423aa409becfc3cfb925.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:sBLlo-MOGFnTMjBRYrZZuZ4ohWo=');">
                        </div>
                            
                            
                            <template #overlay>
                            <div style="text-align: center;">
                                <a-menu style="width: max-content;margin: 0;">
                                    <a-menu-item style="margin-left: -50px;padding: 0;">
                                        <a-button style="margin: 0;">编辑</a-button>
                                    </a-menu-item>
                                    <a-menu-item style="margin-left: -50px;padding: 0;margin-top: -8px;">
                                        <a-button >删除</a-button>
                                    </a-menu-item>
                                </a-menu>
                            </div>
                            
                            </template>
                        </a-dropdown>
                        
                    </div>
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;width: max-content;float: left;">
                        <span style="font-size: 20px;">巴厘岛 | 总有一个假日，要属于bali</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;margin-top: 20px;">
                            <span  key="comment-basic-like">
                                <a-tooltip title="Like">
                                <template v-if="item.islike">
                                    <LikeFilled @click="like(item.id)" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like(item.id)" />
                                </template>
                                </a-tooltip>
                                <span style="padding-left: 8px; cursor: auto">
                                {{ item.likeCount }}
                                </span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                <span style="margin-left: 10px;">{{ item.commentCount }}</span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                </a-row>
                <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
            </div>
            
        
        </div>
        <div v-if="values === 'collection'" class="myCollection" >
            <br>
            <div style="float: left;padding: 0;margin-top: 60px;border-radius: 5px;height: 650px;overflow-y: auto;border-width: 0.005cm;" class="myTeamsLeftList" >
                <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                    <img src="https://s1.aigei.com/src/img/png/83/83c0164a722043789df68e793c9b0ecd.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:HP1AjZiW-IrqT9k30sRzezOpvZk=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;">
                    <span>添加收藏</span> 
                </a-button>
                <div v-for="item in files" >
                    
                    <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                        <img src="https://s1.aigei.com/src/img/png/1c/1c702401b53947b79e6a424df8c06696.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:KHVn3X2XiPLjs645LnFB6VVzbZE=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;;">
                        {{item.name}}
                    </a-button>
                </div>
            </div>
            <div style="float:right;;margin-top: 60px;margin-right: 7%;" class="myTeamsRightList">
                <div v-for="selection in selections" key="selection" style="padding: 0;">
                    <a-row type="flex" justify="space-around"  v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="5" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 260px;border-radius: 10px;">
                            <template #cover>
                            <img
                                
                                src="https://img14.360buyimg.com/n7/jfs/t1/187265/35/32321/43201/64008f01F1081ce7c/808779cce08abe06.jpg"
                                style="width: 210px;height:170px;overflow: hidden;border-radius: 10px;margin-left: 30px;"
                            />
                            </template>
                        <div>
                            <span style="float:left;font-weight: 500;">52TOYS Panda Roll</span>
                        </div>        
                        <br>
                        <div>
                            <span style="text-align: left;float:left">
                                生日礼物熊猫潮玩手办 单只 52TOYS Panda Roll日常第二弹系列盲盒 生日礼物熊猫潮玩手办
                            </span>
                        </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <a-pagination v-model:current="current" :total="50" show-less-items />
            <br>
            </div>
        </div>
        <div v-if="values === 'teams'" class="myTeams">
            <br>
            <div style="float: left;padding: 0;margin-top: 60px;border-radius: 5px;height: 650px;overflow-y: auto;border-width: 0.005cm;" class="myTeamsLeftList" >
                <a-button style="font-weight: 500;font-size:larger;;width: 172px;height: 50px;">
                    <img src="https://s1.aigei.com/src/img/png/83/83c0164a722043789df68e793c9b0ecd.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:HP1AjZiW-IrqT9k30sRzezOpvZk=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;">
                    <span>新建团队</span> 
                </a-button>
                <div v-for="item in teams" >
                    
                    <a-button style="font-weight: 500;font-size:larger;;width: 170px;height: 50px;">
                        <img src="https://s1.aigei.com/src/img/png/1c/1c702401b53947b79e6a424df8c06696.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:KHVn3X2XiPLjs645LnFB6VVzbZE=" alt="" style="width: 20px;height:20px;overflow: hidden;float: left;;">
                        {{item.name.substring(0,6)}}
                    </a-button>
                </div>
            </div>
            <div style="float:right;margin-right: 10%;margin-top: 60px;padding: 0;width: max-content;">
                <!-- 这部分是团队标题栏 -->
                <div style="width: 100%;height:200px;margin: 0;padding: 0;">
                    <div class="top">
                        <div style="width: max-content;position: relative;">
                            <img class="head" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100" alt="" >
                            <span class="myName" style="">骆驼驼Mango</span>
                            <a-button class="apply">申请官方</a-button>
                            <a-input class="motor"  placeholder='没有消息就是好消息~~'/>
                            <a-button class="edit" ghost="true">
                                <img class="editIcon" src="https://s1.aigei.com/src/img/png/c1/c1397c87cde441dca3252b026ac0c39d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:7-_pE33tleIC5NDkx0MFWJ-JKcg=" alt="" style="width: 20px;">
                            </a-button>
                        </div>
                        <div style="float: right;margin-top: -100px;margin-right: 10%;">
                            <a-button @click="chageLikeState()"  style="background-color:blueviolet;border: solid blueviolet;color: aliceblue;">{{ likes }}</a-button>
                        </div>
                    </div>
                </div>
                <!-- 这部分是团队的游记栏 -->
                <div style="margin-top: 100px;width:100%">
                    <div v-for="selection in selections" key="selection" style="padding: 0;">
                        <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                        <a-col :span="5.5" v-for="column of 4" key="column">
                            <a-card hoverable style="width: 260px;border-radius: 10px;">
                                <template #cover>
                                <img
                                    
                                    src="https://img14.360buyimg.com/n7/jfs/t1/187265/35/32321/43201/64008f01F1081ce7c/808779cce08abe06.jpg"
                                    style="width: 210px;height:170px;overflow: hidden;border-radius: 10px;margin-left: 30px;"
                                />
                                </template>
                            <div>
                                <span style="float:left;font-weight: 500;">52TOYS Panda Roll</span>
                            </div>        
                            <br>
                            <div>
                                <span style="text-align: left;float:left">
                                    生日礼物熊猫潮玩手办 单只 52TOYS Panda Roll日常第二弹系列盲盒 生日礼物熊猫潮玩手办
                                </span>
                            </div>
                            </a-card>
                        </a-col>
                    </a-row>
                    </div>
                </div>
                
            <a-pagination v-model:current="current" :total="50" show-less-items />
            <br>
            </div>
        </div>
        <div v-if="values === 'likes'" class="myLike" style="width: 100%;background-color: white;">
            <br>
            <div style="background-color: white;width: 76%;margin-left: 12%;">
                <div v-for="item in myLikes" style="text-align: left;width: 100%;border: solid 0.01ch;height: max-content;margin-top: 20px;border-radius: 10px;">
                    <div style="float: right;margin-right: 9%;margin-top: 60px;">
                        <a-button type="primary" @click="isLikeFunction($event)" style="width:100px">{{item.islike}}</a-button>
                    </div>
                    <img class="myLikeHead" src="https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,jpg/quality,q_100" alt="" >
                    <span style="margin-left:30px;font-weight: 600;margin-top: 40px;position: absolute;width: max-content;">{{item.name}}</span>
                    <span style=" margin-left:30px;font-weight: 300;margin-top: 70px;position: absolute;width: max-content;max-width: 700px;text-align: left;max-height: 400px;">{{item.cover}}</span>
                
                </div>

            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div v-if="values === 'news'" class="myNews" style="margin-top: 20px;background-color: white;border-radius: 5px;">
            <div style="text-align:left">
                <a-radio-group v-model:value="newValues"  size="large" style="width:max-content;margin-left: 185px;margin-top: 20px;">
                    <a-radio-button value="newNews">动态</a-radio-button>
                    <a-radio-button value="newNotes">游记</a-radio-button>
                    <a-radio-button value="newMessage">消息</a-radio-button>
                </a-radio-group>
            </div>
           
            <div v-if="newValues === 'newNews'" style="text-align:left;margin-left: 10%;background: linear-gradient(to bottom right, rgba(0,229,238,0.1), white);margin-top: 30px;margin-right: 10%;border-radius: 10px;box-shadow:5px 5px 5px 5px rgba(0,229,238,0.1);">
                <div v-for="item in news" style="width: 100%;position: relative;">
                    <img class="newHead" :src="item?.user?.userAvatar">
                    <span style="margin-left:30px;font-weight: 600;margin-top: 120px;position: absolute;width: max-content;">{{item?.user?.userName}}</span>
                    <span style=" margin-left:30px;font-weight: 600;margin-top: 160px;position: absolute;width: max-content;">团队id：{{item?.teamId}}</span>
                    <div style="border: solid 0.01pc;padding: 10px;border-radius: 5px;">
                        <pre style="width:1000px;white-space: pre-wrap;word-wrap: break-word">  {{ item?.content }}</pre>
                        <div  style="margin-left: 1%;margin-right: 1%;">
                            <a-row  >
                                <a-col>
                                    <img  :src="item?.imageUrl" alt="" style="width: 200px;height: 200px;margin: 20px;">
                                </a-col>
                            </a-row>
                            
                        </div>
                    </div>
                    
                    
                    <br>
                    <br>
                </div>
            </div>
            <div v-if="newValues==='newNotes'" style="text-align:left;margin-left: 10%;border: solid 0.01cm;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
                <div style="width: 100%;background-color: white;width: 88%%;margin-left: 0%;border-radius:10px">
                <a-row v-for="item in items" ref="items">
                <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 30px;" :id="item.id">
                    <div style="float: right;margin-right: 10%;margin-top: 10px;">
                        
                        <a-dropdown :getPopupContainer="(trigger) => trigger.parentNode">
                            <div  style="width: 20px;height: 20px;border-radius: 5px;background: transparent;background-size: contain;background-repeat: no-repeat;background-image: url('https://s1.chu0.com/src/img/png/f8/f874e6406cd6423aa409becfc3cfb925.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:sBLlo-MOGFnTMjBRYrZZuZ4ohWo=');">
                        </div>
                            
                            
                            <template #overlay>
                            <div style="text-align: center;">
                                <a-menu style="width: max-content;margin: 0;">
                                    <a-menu-item style="margin-left: -50px;padding: 0;">
                                        <a-button style="margin: 0;">编辑</a-button>
                                    </a-menu-item>
                                    <a-menu-item style="margin-left: -50px;padding: 0;margin-top: -8px;">
                                        <a-button >删除</a-button>
                                    </a-menu-item>
                                </a-menu>
                            </div>
                            
                            </template>
                        </a-dropdown>
                        
                    </div>
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;width: max-content;float: left;">
                        <span style="font-size: 20px;">巴厘岛 | 总有一个假日，要属于bali</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;margin-top: 20px;">
                            <span  key="comment-basic-like">
                                <a-tooltip title="Like">
                                <template v-if="item.islike">
                                    <LikeFilled @click="like(item.id)" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like(item.id)" />
                                </template>
                                </a-tooltip>
                                <span style="padding-left: 8px; cursor: auto">
                                {{ item.likeCount }}
                                </span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                <span style="margin-left: 10px;">{{ item.commentCount }}</span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                </a-row>
                <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
            </div>
            </div>
            <div v-if="newValues==='newMessage'" style="text-align:left;margin-left: 10%;margin-top: 30px;margin-right: 10%;border-radius: 10px;">
            <div class="messageList" >
                <div v-for="item in messages" >
                    <a-button style="font-weight: 500;font-size:small;;width: 172px;height: 50px;">
                        {{item.name.substring(0,11)}}
                    </a-button>
                </div>
            </div>
            <div style="border: solid 0.01ch;margin-left: 190px;min-height: 500px;margin-top: 60px;margin-right: 7%;text-align: center;" class="myTeamsRightList">
                <div style="float:right;margin-right: 40px;margin-top: 20px;">
                    <a-button type="danger">删除</a-button>
                </div>
                <div style="border: solid 0.01cap;margin-top: 60px;">
                    <span style="font-size: larger;max-width: 700px;;">有关软件协同的说明通知</span>
                </div>
                
                <div>
                    <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;margin: 10%;">{{ texts }}</pre>
                </div>
                <div style="float: right;margin-right: 60px;">
                    <span>时间：2023.3.24 </span>
                </div>
                <br>
                <br>
            <br>
            </div>  
            </div>
            <br>
            <br>
        </div>
        <div v-if="values === 'history'"  class="myHistory" style="background-color: white;width: 100%;;">
            <div style="width: 100%;background-color: white;width: 88%%;margin-left: 12%;border-radius:10px">
                <a-row v-for="item in itemHistroy" ref="items">
                <div style="text-align: left;background-color: transparent;; height: max-content;margin-top: 30px;" :id="item.id">
                    <div style="float: right;margin-right: 10%;margin-top: 10px;">
                        
                        <a-dropdown :getPopupContainer="(trigger) => trigger.parentNode">
                            <div  style="width: 20px;height: 20px;border-radius: 5px;background: transparent;background-size: contain;background-repeat: no-repeat;background-image: url('https://s1.chu0.com/src/img/png/f8/f874e6406cd6423aa409becfc3cfb925.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:sBLlo-MOGFnTMjBRYrZZuZ4ohWo=');">
                        </div>
                            
                            
                            <template #overlay>
                            <div style="text-align: center;">
                                <a-menu style="width: max-content;margin: 0;">
                                    <a-menu-item style="margin-left: -50px;padding: 0;">
                                        <a-button style="margin: 0;">编辑</a-button>
                                    </a-menu-item>
                                    <a-menu-item style="margin-left: -50px;padding: 0;margin-top: -8px;">
                                        <a-button >删除</a-button>
                                    </a-menu-item>
                                </a-menu>
                            </div>
                            
                            </template>
                        </a-dropdown>
                        
                    </div>
                    <img src="https://youimg1.c-ctrip.com/target/0102h120008g8yxwy973B_C_286_190.jpg" style="border-radius: 10px;width: 300px;height:200px;overflow: hidden;float: left;margin: 10px;">
                    <div style="margin-left: 50px;width: max-content;float: left;">
                        <span style="font-size: 20px;">巴厘岛 | 总有一个假日，要属于bali</span>
                        <div style="width: 100%;height:max-content">
                            <div style="text-align: left;position: relative;display: flex;">
                                <a-avatar class="ant-dropdown-link" @click.prevent style="margin-top:10px;width: 20px;height: 20px;">
                                    <template #icon>
                                    <img src="https://dimg04.c-ctrip.com/images/0Z85u120009d7a407CAD8_C_180_180.jpg" alt="">
                                    </template>
                                </a-avatar>
                                <span style="margin-left:10px;margin-top: 8px;">用户名</span>
                            </div>
                        </div>
                        
                        <div style="margin-top: 5px;min-width: 800px;">
                            <pre style="width:800px;white-space: pre-wrap;word-wrap: break-word;text-align: left;">是没想到，提笔写此篇 巴厘岛 之行的回忆时，是此番境况。</pre>
                        </div>
                        <div style="float: right;margin-right: 10%;margin-top: 20px;">
                            <span  key="comment-basic-like">
                                <a-tooltip title="Like">
                                <template v-if="item.islike">
                                    <LikeFilled @click="like(item.id)" />
                                </template>
                                <template v-else>
                                    <LikeOutlined @click="like(item.id)" />
                                </template>
                                </a-tooltip>
                                <span style="padding-left: 8px; cursor: auto">
                                {{ item.likeCount }}
                                </span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.aigei.com/src/img/png/c8/c8c2eeb58230418b9868bdd246b1716b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XGdsndtyiYMYv9kO9SAP7V8WSmU=" alt="">
                                <span style="margin-left: 10px;">{{ item.commentCount }}</span>
                            </span>
                            <span>
                                <img style="width: 20px;height: 20px;margin-left: 20px;" src="https://s1.chu0.com/src/img/png/95/95d22610a232417c9dbb068729c2c16d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:VmeHyGmnsxXvY1SpNzBOKVG17dc=" alt="">
                                <span style="margin-left: 10px;">{{ item.browserCount }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                </a-row>
                <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { LikeFilled,LikeOutlined } from '@ant-design/icons-vue';
import { UploadChangeParam, UploadProps, message } from 'ant-design-vue';
import { getUserById } from '../../api/user/users';
import { teamNewsList, teamNewsListData } from '../../api/team/teamNews';
import { useRoute } from 'vue-router';
const likes = ref<string>('关注')
const news = ref()
const chageLikeState=()=>{
    console.log(likes.value)
    if(likes.value==="关注"){
        // 这里向后端传送信息
        likes.value = "取消关注"
    }
    else{
        //向后端传送消息
        likes.value="关注"
    }
    return likes.value
}
//加载数据----------
const message = ref()
const {query} = useRoute()
onMounted(()=>{
    console.log(query.key)
    if(query.key!==''){
        values.value=query.key
    }
    const id = 1 ///////////////////////////////这里到时候改成对应进入的个人空间
    getUserById(id).then((res)=>{
        message.value = res.data.data
    })
    //获取动态：
    const msg:teamNewsListData={
        current: 0,
        pageSize: 10,
        sortField: 'create_time',
        teamId: 4   //////////////////////////这里到时候改成新的接口，接口还没写
    }
    teamNewsList(msg).then((res)=>{
        console.log(res.data.data.records)
        news.value = res.data.data.records
        console.log(news.value)
    })
})
// 上传头像：
const fileList = ref([])
const avatar = ref("https://img.zcool.cn/community/0149d95f4ba8a311013e3187856dad.jpg?x-oss-process=image/resize,m_fill,w_160,h_160,limit_0/auto-orient,1/sharpen,100/format,webp/quality,q_100")
const header = {
  authentication:'2b5d7640af954456b07e0604d90dbb83'
}
const handleChange = (info: UploadChangeParam) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 图片上传成功.`);
        avatar.value = info.file.response.data
      } else if (status === 'error') {
        message.error(`${info.file.name} 图片上传失败.`);
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
const likeCount = ref(20)
const browserCount = ref(20000)
const values=ref('news')

// 这个是单选框更换部分

// 这里是我的收藏部分
const files=[
    {name:'默认收藏夹'},
    {name:'vue'},
    {name:'合集'},
    {name:'胡桁彰'},
    {name:'胡桁彰'},
    {name:'胡桁彰'},

]
// 这里是卡片的数据
const selections=[
            {name:"热点景区"},
            {name:"优质游记"},

        ]
//这里是我的团队部分：
const teams=[
    {name:'宇宙无敌暴龙战士'},
    {name:'vue团队'},
    {name:'QQ群'},
    {name:'微信群'},
    {name:'aBCA'},
    {name:'胡桁彰'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},
    {name:'宇宙无敌暴龙战士'},

]
//这里是最新动态部分
const newValues = ref('newNews')
const texts = 
"群居、肉食、附魔的胡狼，只剩一对母女相依为命，在白山黑水的风雪中唱着《胡不归去》的挽歌。"+
"依靠工具和组织的恐怖直立猿，形成了更强大的狩猎团体，但首领同样是单亲家庭，小虎母亲的缺位可能亦与狼有关。"+
"林林可以变人，但妈妈始终只有狼的形象，对女儿的教导也是失去人形，失去一点，失去兽形，失去一切。"+
"拥有双重形态的林林，没有成为两个种族和解交流的沟通使者，即便坐在一张桌子上一起吃饭，人类的熟食带来的是能力的剥夺。反而林林最终以人的形态为狼妈妈复仇，跟人族的家长同归于尽。"+
"对于这段风雪中奇缘，人类代表的选择是不与狼共屋。小虎没有为父寻仇，转而做出了一个违背祖宗的决定，我不做猎人了，林林。"+
"掠夺者向生产者的转变，暗合着采集型的狩猎生活，转入种田流的农耕文明。"+
"以自然人格化的视角，我愿将《林林》的戏剧冲突称为『新仙女木事件』。新故事、狼仙女孩其名四木、酷寒气候、人类从打猎转职种地……"+
"林海雪原，隔出一抔农桑田，刀耕火种姑且对丛林法则有所调和。"+
"而真实的神州，以白山黑水为主体的天地间，的确曾是游牧族群与农耕王朝的千古战场，也是华夏文明工业化的先行起点。"
const messages=[
    {name:'哔哩哔哩隐私政策的修订通知'},
    {name:'拜年纪全片回顾上线！'},
    {name:'拜年纪直播即将开始！'},
    {name:'拜年纪倒计时一天！'},
    {name:'2023拜年纪开启预约啦！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},
    {name:'终于！你的B站专属年度报告来了！'},

]
// 这里是我的游记部分
const items = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    commentCount:200,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
]
// 这里是我的关注部分：
const myLikes=[
    {
        name:'abcda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'sdada',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'abcdasda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'absaacda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'absaacda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'absaacda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'absaacda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'absaacda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
    {
        name:'absaacda',
        islike:'取消关注',
        cover:'一名普普通通爱摸鱼的设计师，如果你喜欢的这个新人up的话记得关注我哦，说不定下期音乐更好听哦~（日推日系带欧美和纯音）'
    },
]
function isLikeFunction(e:any){
    console.log(e.currentTarget.innerText==='关注')
    if (e.currentTarget.innerText==='关注') {

        e.currentTarget.innerText='取消关注'
    } else {
        e.currentTarget.innerText='关注'
    }
    
}
const current=ref(1)
// 这里是点赞收藏评论数：

const like = (id: string) => {
        //先异步发送
        items.forEach(function (item,index){
            if(item.id===id){
                item.islike = !item.islike
                return 1
            }
        })
    };
//我的历史部分：
const itemHistroy = [
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:10,
    commentCount:200,
    browserCount:1000,
    id:'10101',
    islike:true},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:12,
    commentCount:200,
    browserCount:1000,
    id:'10102',
    islike:false},
    
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    browserCount:1000,
    commentCount:200,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
    {name:'aaaaaaaaaaaaaaaa',
    likeCount:13,
    commentCount:200,
    browserCount:1000,
    id:'10103',
    islike:false},
]
</script>

<style scoped lang="scss">
.head:hover{
    opacity: 90%;
    background: url("https://s1.chu0.com/src/img/png/22/22a8a8b8a0c040c4a02a7b86c7a3b588.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:SuMbz7d1U5QE3PkEsVfheTmIfNE=");
}
.myName{
    margin-left:120px;
    font-weight: 600;
    margin-top: -80px;
    position: absolute;
    width: max-content;
}
.apply{
    margin-left:280px;
    font-weight: 600;
    margin-top: -85px;
    position: absolute;
    width: max-content;
    
}
.top{
    background-image: url('https://img.zcool.cn/tubelocation/844564131f7d000e991000e46abc.jpg?x-oss-process=image/format,webp/quality,q_100');
    height: 200px;
    padding: 20px;
    padding-top: 50px;
}
.motor{
    margin-left:100px;
    position: absolute;
    width: max-content;
    margin-top: -40px;
    width: 500px;
    border-radius: 10px;
}
.edit{
    margin-left:620px;
    margin-top: -40px;
    position: absolute;
    border: transparent;
    padding: 0;
    .editIcon:active{
        filter:invert(100%);
    }

}
#choose{
    margin-top: 40px;
    margin-left: 2.5%;
    width: 95%;
    height: max-content;

}
.myNotes{
    width: max-content;
    background-color: #e1ebf5;
    border-radius: 20px;
    margin-top: 50px;
}
.myCollection{
    margin-left: 10%;
    width: 90%;
    height: fit-content;
}
.myTeams{
    margin-left: 10%;
    width: 90%;
    height: fit-content;
}
// 最新动态部分
.newName{
    margin-left:30px;
    font-weight: 600;
    margin-top: 120px;
    position: absolute;
    width: max-content;
}
.newHead{
    width: 100px;
    margin-top: 100px;
    margin-left: 10px;
    height:100px;
    border: solid;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
.messageList{
    float: left;
    padding: 0;
    border-radius: 5px;
    height: 500px;
    overflow-y: auto;
    border-width: 0.005cm;
}
// 我的关注部分
.myLikeHead{
    margin-left: 20px;
    width: 100px;
    margin-top: 20px;
    height:100px;
    border: solid;
    border-radius: 50%;
    margin-bottom: 30px;
    padding: 0;
    overflow: hidden;
}
</style>