
<template>
<div>
    <div>
    <div style="height: 400px;" class="backImg item">
    <div class="backgroundImg"></div>
</div>
<div style="height: 40px;width: 100%"></div>
    <!-- 热点景区 -->
    <div v-for="selection in selections" key="selection">
        <div >
            <img src="../../assets/左箭头travel.png" alt="" style="width: 200px;height: 150px;">
            <span class="selectName">
                {{ selection.name }}
            </span>
            
            <img src="../../assets/travel箭头.png" style="width: 200px;height: 150px;">
        </div>
        <a-row v-if="selection.name!=='热门团队'" type="flex" justify="space-around" align="middle" v-for="items in  selection.content" key="row" style="margin-bottom: 30px;margin-left: 0;">              
            <a-col :span="4" v-for="item in items" key="column">
                <a-card hoverable style="width: 300px"  @click="linkToDetail(item.linkTo)">
                    <template #cover>
                    <img
                        alt="example"
                        :src="item.imgsrc"
                        style="width: 300px;height:220px;overflow: hidden;"
                    />
                    </template>
                <div>
                    <span style="float:left;font-weight: 600;">{{ item.name }}</span>
                </div>        
                <br>
                <div>
                    <span>
                        {{ item.detail }}
                    </span>
                </div>
                </a-card>
            </a-col>
        </a-row>
        <a-row v-else-if="selection.name==='热门团队'" type="flex" justify="space-around" align="middle" v-for="items in  selection.content"     style="margin-bottom: 30px;margin-left: 0;">              
            <a-col :span="4" v-for="item in items">
                <a-card hoverable style="width: 300px" @click="linkToDetail(item.linkTo)">
                    <template #cover>
                    <img
                        alt="example"
                        :src="item.imgsrc"
                        style="width: 250px;height:250px;overflow: hidden;border-radius: 50%;object-fit: cover;margin-left: 25px;margin-top: 10px;"
                    />
                    </template>
                <div>
                    <span style="float:left;font-weight: 600;">{{ item.name }}</span>
                </div>        
                <br>
                <div>
                    <span>
                        {{ item.detail }}
                    </span>
                </div>
                </a-card>
            </a-col>
        </a-row>
        <div>
            <a-button type="primary" style="margin-bottom:200px;margin-top:70px" @click="linkToMore(selection.linkTo)">显示更多</a-button>
        </div>
    </div>
</div>
</div>



</template>
<script lang="ts" setup>
const selections=[
{
    name:"热点景区",
    linkTo:'./Scenic',
    content:[
        [
            {
                name:'九寨沟',
                linkTo:'./ScenicDetail',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/21/2F/wKgBZ1i2Dm-AKvApAAuvYUYnQ8038.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'台湾',
                linkTo:'./ScenicDetail',
                imgsrc:'https://b1-q.mafengwo.net/s10/M00/70/E1/wKgBZ1i0ONOASPegAAUFqXKv-x452.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'阿富汗',
                linkTo:'./ScenicDetail',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/17/B6/wKgBZ1iYOMqAHPcTAAYOE3VCTow38.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ],
        [
            {
                name:'菲律宾',
                linkTo:'./ScenicDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/2D/AA/wKgBs1f6G0aAc7wuACXhHQTNlos27.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'喀纳斯',
                linkTo:'./ScenicDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/4E/20/wKgBs1hQ4waAcRM7AEGUrl2GJio63.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'古巴',
                linkTo:'./ScenicDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/FC/BE/wKgBs1hhCxWAY4ilABG7t8DKQ8456.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ]
        
    ]
},
{
    name:"优质游记",
    linkTo:'./Notes',
    content:[
        [
            {
                name:'九寨沟',
                linkTo:'./NotesDetail',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/21/2F/wKgBZ1i2Dm-AKvApAAuvYUYnQ8038.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'台湾',
                linkTo:'./NotesDetail',
                imgsrc:'https://b1-q.mafengwo.net/s10/M00/70/E1/wKgBZ1i0ONOASPegAAUFqXKv-x452.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'阿富汗',
                linkTo:'./NotesDetail',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/17/B6/wKgBZ1iYOMqAHPcTAAYOE3VCTow38.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ],
        [
            {
                name:'菲律宾',
                linkTo:'./NotesDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/2D/AA/wKgBs1f6G0aAc7wuACXhHQTNlos27.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'喀纳斯',
                linkTo:'./NotesDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/4E/20/wKgBs1hQ4waAcRM7AEGUrl2GJio63.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'古巴',
                linkTo:'./NotesDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/FC/BE/wKgBs1hhCxWAY4ilABG7t8DKQ8456.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ]
        
    ]
},
{
    name:"热门团队",
    linkTo:'./Teams',
    content:[
        [
            {
                name:'九寨沟',
                linkTo:'TeamDeatil/TeamHome',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/21/2F/wKgBZ1i2Dm-AKvApAAuvYUYnQ8038.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'台湾',
                linkTo:'TeamDeatil/TeamHome',
                imgsrc:'https://b1-q.mafengwo.net/s10/M00/70/E1/wKgBZ1i0ONOASPegAAUFqXKv-x452.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'阿富汗',
                linkTo:'TeamDeatil/TeamHome',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/17/B6/wKgBZ1iYOMqAHPcTAAYOE3VCTow38.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ],
        [
            {
                name:'菲律宾',
                linkTo:'TeamDeatil/TeamHome',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/2D/AA/wKgBs1f6G0aAc7wuACXhHQTNlos27.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'喀纳斯',
                linkTo:'TeamDeatil/TeamHome',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/4E/20/wKgBs1hQ4waAcRM7AEGUrl2GJio63.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'古巴',
                linkTo:'TeamDeatil/TeamHome',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/FC/BE/wKgBs1hhCxWAY4ilABG7t8DKQ8456.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ]
        
    ]
},
{
    name:"周边商城",
    linkTo:'./Mall',
    content:[
        [
            {
                name:'九寨沟',
                linkTo:'./MallDetail',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/21/2F/wKgBZ1i2Dm-AKvApAAuvYUYnQ8038.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'台湾',
                linkTo:'./MallDetail',
                imgsrc:'https://b1-q.mafengwo.net/s10/M00/70/E1/wKgBZ1i0ONOASPegAAUFqXKv-x452.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'阿富汗',
                linkTo:'./MallDetail',
                imgsrc:'https://p1-q.mafengwo.net/s10/M00/17/B6/wKgBZ1iYOMqAHPcTAAYOE3VCTow38.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ],
        [
            {
                name:'菲律宾',
                linkTo:'./MallDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/2D/AA/wKgBs1f6G0aAc7wuACXhHQTNlos27.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'喀纳斯',
                linkTo:'./MallDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/4E/20/wKgBs1hQ4waAcRM7AEGUrl2GJio63.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            },
            {
                name:'古巴',
                linkTo:'./MallDetail',
                imgsrc:'https://p1-q.mafengwo.net/s9/M00/FC/BE/wKgBs1hhCxWAY4ilABG7t8DKQ8456.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90',
                detail:'作为一个正宗的 四川 大妹子，在大美 四川 看过无数的湖与沟（绝美的 九寨沟 也是沟  ）'
            }
        ]
        
    ]
}
]
const linkToMore=(link:string)=>{
    window.open(link,'_blank')
}
const linkToDetail=(link:string)=>{
    window.open(link,'_blank')
}
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
    background-image: url("https://p1-q.mafengwo.net/s19/M00/19/46/CoNJlGQyjhdD3qA7AArFegvGvlk.jpeg?imageMogr2%2Fstrip");
    height: 400px;
    text-align: center;
    
    overflow: hidden;
    }
}
.selectName{
    font-size: 30px;
    font-weight:bolder;
    margin-bottom:30px;
    font-family: Youyuan;
    margin-left: -20px;
    padding: 10px;
}

</style>

