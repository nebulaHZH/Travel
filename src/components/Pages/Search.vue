<template>
    <div style="text-align: center;">
        <a-input-search   style="margin-left: 40px;width: 500px;margin-top: 100px;"  v-model:value="info" placeholder="请输入想查询的内容"  size="large"/>
        <div style="margin-top: 40px;margin-left: 25%;width: max-content;margin-bottom: 40px;" >
            <a-radio-group v-model:value="values"  size="large" style="width:max-content;">
                <a-radio-button class="searchButton" style="width: 120px;" value="scenic">景区</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="notes">游记</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="teams">团队</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="items">纪念品</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="hotel">酒店</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="food">美食</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="user">用户</a-radio-button>
            </a-radio-group>
        </div>
        <div style="float: right;margin-top: 20px;margin-right: 100px;">
            <a-button style="primary">按浏览数</a-button>
            <a-button style="primary">按时间</a-button>
        </div>
        <div style="margin-top: 120px;" v-if="values === 'scenic'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1975Lf.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div style="margin-top: 120px;" v-if="values === 'notes'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA196YiI.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div style="margin-top: 120px;" v-if="values === 'teams'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1975Lf.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div style="margin-top: 120px;" v-if="values === 'items'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1975Lf.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div style="margin-top: 120px;" v-if="values === 'hotel'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1975Lf.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div style="margin-top: 120px;" v-if="values === 'food'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1973Rf.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        <div style="margin-top: 120px;" v-if="values === 'user'">
            
            <div v-for="selection in selections" key="selection">
                <a-row type="flex" justify="space-around" align="middle" v-for="row of 1" key="row" style="margin-bottom: 30px;margin-left: 0;">              
                    <a-col :span="4" v-for="column of 4" key="column">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA196Mgj.img?w=768&h=432&m=6"
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
            </div>
            <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items />
        </div>
        
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const values = ref('scenic')
const selections=[
            {name:"热点景区"},
            {name:"优质游记"},
            {name:"热门团队"},
            {name:"周边商城"},
        ]
</script>

<style scoped>

.searchButton:hover{
    background-color: blueviolet;
    color: aliceblue;
}
</style>