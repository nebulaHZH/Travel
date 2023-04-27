<template>
    <div style="text-align: center;">
        <!-- <a-input-search   style="margin-left: 40px;width: 500px;margin-top: 100px;"  v-model:value="info" placeholder="请输入想查询的内容"  size="large"/> -->
        <div style="margin-top: 40px;margin-left: 25%;width: max-content;margin-bottom: 40px;" >
                <a-button class="searchButton" style="width: 120px;"  @click="category('official')">官方</a-button>
                <a-button class="searchButton" style="width: 120px;"  @click="category('article')"> 游记</a-button>
                <a-button class="searchButton" style="width: 120px;"  @click="category('team')">团队</a-button>
                <a-button class="searchButton" style="width: 120px;"  @click="category('derivative')">周边</a-button>
                <!-- <a-radio-button class="searchButton" style="width: 120px;" value="hotel">酒店</a-radio-button>
                <a-radio-button class="searchButton" style="width: 120px;" value="food">美食</a-radio-button> -->
                <a-radio-button class="searchButton" style="width: 120px;" value="user">用户</a-radio-button>
        </div>
        <div style="float: right;margin-top: 20px;margin-right: 100px;">
            <a-button style="primary">按浏览数</a-button>
            <a-button style="primary">按时间</a-button>
        </div>
        <div style="margin-top: 120px;">
            <div v-if="parseInt(items?.length) === 0">
                <span style="font-size: 25px;font-weight: 600">暂时没有更多相关</span>
            </div>
            <div v-else-if="values === 'article'" style="text-align: left: ;">
                <a-row type="flex" justify="space-around" align="middle" v-for="row in 2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left: ;">              
                    <a-col :span="4" v-for="item in items?.slice(4*row-4,4*row)" key="column" @click="toDetail(item?.id)">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    :src=item.coverUrl
                                    style="width: 300px;height:220px;overflow: hidden;"
                                />
                                </template>
                            <div>
                                <span style="float:left;" v-html="item.title"></span>
                            </div>        
                            <br>
                            <div>
                                <span>
                                    {{ item.intro }}
                                </span>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <div v-else-if="values === 'official'" style="text-align: left: ;">
                <a-row type="flex" justify="space-around" align="middle" v-for="row in 2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left: ;">              
                    <a-col :span="4" v-for="item in items?.slice(4*row-4,4*row)" key="column" @click="toDetail(item?.id)">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    :src=item.coverUrl
                                    style="width: 300px;height:220px;overflow: hidden;"
                                />
                                </template>
                            <div>
                                <span style="float:left;" v-html="item.officialName"></span>
                            </div>        
                            <br>
                            <div>
                                <span>
                                    {{ item.intro }}
                                </span>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <div v-else-if="values === 'team'" style="text-align: left: ;">
                <a-row type="flex" justify="space-around" align="middle" v-for="row in 2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left: ;">              
                    <a-col :span="4" v-for="item in items?.slice(4*row-4,4*row)" key="column" @click="toDetail(item?.id)">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    :src=item.coverUrl
                                    style="width: 300px;height:220px;overflow: hidden;"
                                />
                                </template>
                            <div>
                                <span style="float:left;" v-html="item?.teamName"></span>
                            </div>        
                            <br>
                            <div>
                                <span>
                                    {{ item.intro }}
                                </span>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <div v-else-if="values === 'user'" style="text-align: left: ;">
                <a-row type="flex" justify="space-around" align="middle" v-for="row in 2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left: ;">              
                    <a-col :span="4" v-for="item in items?.slice(4*row-4,4*row)" key="column" @click="toDetail(item?.id)">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    :src=item.coverUrl
                                    style="width: 300px;height:220px;overflow: hidden;"
                                />
                                </template>
                            <div>
                                <span style="float:left;"  v-html="item.userName"></span>
                            </div>        
                            <br>
                            <div>
                                <span>
                                    {{ item.intro }}
                                </span>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <div v-else-if="values === 'derivative'" style="text-align: left: ;">
                <a-row type="flex" justify="space-around" align="middle" v-for="row in 2" key="row" style="margin-bottom: 30px;margin-left: 0;text-align: left: ;">              
                    <a-col :span="4" v-for="item in items?.slice(4*row-4,4*row)" key="column" @click="toDetail(item?.id)">
                        <a-card hoverable style="width: 300px">
                            <template #cover>
                                <img
                                    alt="example"
                                    :src=item.coverUrl
                                    style="width: 300px;height:220px;overflow: hidden;"
                                />
                                </template>
                            <div>
                                <span style="float:left;" v-html="item.derivativeName"></span>
                            </div>        
                            <br>
                            <div>
                                <span>
                                    {{ item.intro }}
                                </span>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <div v-else>
                <span style="font-size: 25px;font-weight: 600">暂时没有更多相关</span>
            </div>
            <!-- <a-pagination style="margin-top:20px;padding-bottom: 20px;" v-model:current="current" :total="50" show-less-items /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {SearchListData,SearchList} from '../../../src/api/DataService/DataSearch'
const values = ref('article')
const items = ref([])
const {query} = useRoute();
const total = ref()
onMounted(() => {
    console.log(query.key)
    let msg:SearchListData={
        searchText: query.key,
        type: 'article'
    }
    SearchList(msg).then((res)=>{
        console.log(res.data)
        items.value = res.data.data.dataPage?.records
        total.value = res.data.data.dataPage?.total
    })
})
const category=(s:string)=>{
    values.value = s
    let msg:SearchListData={
        searchText: query.key,
        type: s
    }
    SearchList(msg).then((res)=>{
        console.log(res.data)
        items.value = res.data.data.dataPage?.records
        total.value = res.data.data.dataPage?.total
    })
}
const router = useRouter()
const toDetail=(id:number)=>{
    if(values.value === 'team'){
        router.push({
            path:'/TeamDetail',
            query:{
                id:id
            }
        })
    }else if(values.value === 'official'){
        router.push({
            path:'/ScenicDetail',
            query:{
                id:id
            }
        })
    }else if(values.value === 'user'){
        router.push({
            path:'/My',
            query:{
                id:id
            }
        })
    }else if(values.value === 'article'){
        router.push({
            path:'/NotesDetail',
            query:{
                id:id
            }
        })
    }else if(values.value === 'article'){
        router.push({
            path:'/MallDetail',
            query:{
                id:id
            }
        })
    }
}
</script>

<style scoped>

.searchButton:hover{
    background-color: blueviolet;
    color: aliceblue;
}
</style>