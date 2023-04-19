import {createRouter,createWebHistory} from 'vue-router'
import MainPage from '../components/Pages/MianPage.vue'
import Scenic from '../components/Pages/Scenic.vue'     
import Teams from '../components/Pages/Teams.vue'
import Notes from '../components/Pages/Notes.vue'
import Mall from '../components/Pages/Mall.vue'
import My from '../components/Pages/My.vue'
import Search from '../components/Pages/Search.vue'
import ScenicDetail from '../components/Pages/ScenicDetail.vue'
import ScenicContent from '../components/Pages/ScenicContent.vue'
import TeamDeatil from '../components/Pages/TeamDetail.vue'
import aa from '../components/Pages/aa.vue'
import TeamNotes from '../components/Pages/TeamDeatilFolder/TeamNotes.vue'
import TeamNews from '../components/Pages/TeamDeatilFolder/TeamNews.vue'
import TeamWall from '../components/Pages/TeamDeatilFolder/TeamWall.vue'
import TeamHome from '../components/Pages/TeamDeatilFolder/TeamHome.vue'
import AdminCenterHome from '../components/Pages/AdminCenterFolder/AdminCenterHome.vue'
import AdminCenterCommentManage from '../components/Pages/AdminCenterFolder/AdminCenterCommentManage.vue'

import AdminCenterExchangeHistory from '../components/Pages/AdminCenterFolder/AdminCenterExchangeHistory.vue'
import AdminCenterOfficialManage from '../components/Pages/AdminCenterFolder/AdminCenterOfficialManage.vue'
import AdminCenterPersonal from '../components/Pages/AdminCenterFolder/AdminCenterPersonal.vue'
import AdminCenterPublish from '../components/Pages/AdminCenterFolder/AdminCenterPublish.vue'
import AdminCenterPublishManage from '../components/Pages/AdminCenterFolder/AdminCenterPublishManage.vue'
import AdminCenterTeamManage from '../components/Pages/AdminCenterFolder/AdminCenterTeamManage.vue'
import AdminCenter from '../components/Pages/AdminCenter.vue'
import MallDetail from '../components/Pages/MallDetail.vue'
const routes = [
    {        
        path:'/',
        redirect:'/Home',
        component:MainPage,
        children:[]
    },
    
    {
        path:'/Home',
        name:'Home',
        component:MainPage
    },
    {
        path:'/Scenic',
        name:'Scenic',
        component:Scenic
    },
    {
        path:'/Teams',
        name:'Teams',
        component:Teams
    },
    {
        path:'/Notes',
        name:'Notes',
        component:Notes,
        children:[
            
        ]
    },
    {
        path:'/NotesDetail',
        name:'NotesDetail',
        component:()=>import('../components/Pages/NotesDetail.vue')
    },
    {
        path:'/Mall',
        name:'Mall',
        component:Mall
    },
    {
        path:'/My',
        name:'My',
        component:My
    },
    {
        path:'/Search',
        name:'Search',
        component:Search
    },
    {
        path:'/ScenicDetail',
        name:'ScenicDetail',
        component:ScenicDetail,
    },
    {
        path:'/aa',
        name:'aa',
        component:aa
    },
    {
        path:'/ScenicContent',
        name:'ScenicCOntent',
        component:ScenicContent
    },
    {
        path:'/MallDetail',
        name:'MallDetail',
        component:MallDetail
    },
    {
        path:'/AdminCenter',
        name:'AdminCenter',
        redirect:'/AdminCenter/AdminCenterHome',
        meta:{
            keepAlive:true,
            cache: true
        },
        component:AdminCenter,
        children:[
            {
                path:'AdminCenterHome',
                name:'AdminCenterHome',
                component:AdminCenterHome,
            },
            {
                path:'AdminCenterCommentManage',
                name:'AdminCenterCommentManage',
                component:AdminCenterCommentManage,
            },
            {
                path:'AdminCenterExchangeHistory',
                name:'AdminCenterExchangeHistory',
                component:AdminCenterExchangeHistory,
            },
            {
                path:'AdminCenterOfficialManage',
                name:'AdminCenterOfficialManage',
                component:AdminCenterOfficialManage,
                redirect:'/AdminCenter/AdminCenterOfficialManage/ScenicEdit',
                children:[
                    {
                        path:'ScenicEdit',
                        name:'ScenicEdit',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterOfficialManageFolder/ScenicEdit.vue'),
                    },
                    {
                        path:'NoticeEdit',
                        name:'NoticeEdit',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterOfficialManageFolder/NoticeEdit.vue'),
                    },
                    {
                        path:'GoodsEdit',
                        name:'GoodsEdit',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterOfficialManageFolder/GoodsEdit.vue'),
                    },
                    {
                        path:'SpotEdit',
                        name:'SpotEdit',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterOfficialManageFolder/SpotEdit.vue'),
                    },
                    {
                        path:'ExchangeEdit',
                        name:'ExchangeEdit',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterOfficialManageFolder/ExchangeEdit.vue'),
                    },
                    
                ]
            },
            {
                path:'AdminCenterPersonal',
                name:'AdminCenterPersonal',
                component:AdminCenterPersonal,
            },
            {
                path:'AdminCenterPublish',
                name:'AdminCenterPublish',
                component:AdminCenterPublish,
                redirect:'/AdminCenter/AdminCenterPublish/Video',
                children:[
                    {
                        path:'Official',
                        name:'Official',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterPublishFolder/Official.vue'),
                        redirect:'/AdminCenter/AdminCenterPublish/Official/Notices',
                        children:[
                            {
                                path:'OfficialGOods',
                                name:'OfficialGOods',
                                component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterPublishFolder/OfficialFolder/OfficialGoods.vue'),       
                            },
                            {
                                path:'Notices',
                                name:'Notices',
                                component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterPublishFolder/OfficialFolder/Notices.vue'),       
                            },
                            {
                                path:'Resource',
                                name:'Resource',
                                component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterPublishFolder/OfficialFolder/Resource.vue'),       
                            },

                        ]
                    },
                    {
                        path:'Video',
                        name:'Video',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterPublishFolder/Video.vue'),
                    },
                    {
                        path:'Write',
                        name:'Write',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterPublishFolder/Write.vue'),
                    },
                ]
            },
            {
                path:'AdminCenterPublishManage',
                name:'AdminCenterPublishManage',
                component:AdminCenterPublishManage,
                children:[]
            },
            {
                path:'AdminCenterTeamManage',
                name:'AdminCenterTeamManage',
                component:AdminCenterTeamManage,
                redirect:'/AdminCenter/AdminCenterTeamManage/TeamContent',
                children:[
                    {
                        path:'TeamContent',
                        name:'TeamContent',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterTeamFolder/TeamContent.vue'),
                    },
                    {
                        path:'NoteManager',
                        name:'NoteManager',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterTeamFolder/NoteManager.vue'),
                    },
                    {
                        path:'NewsManager',
                        name:'NewsManager',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterTeamFolder/NewsManager.vue'),
                    },
                    {
                        path:'MemberManage',
                        name:'MemberManage',
                        component:()=>import('../components/Pages/AdminCenterFolder/AdminCenterTeamFolder/MemberManage.vue'),
                    },
                ]
            }
        ]
    },
    {
        path:'/TeamDeatil',
        name:'TeamDeatil',
        redirect:'/TeamDeatil/TeamHome',
        component:TeamDeatil,
        children:[
            {
                path:'TeamHome',
                name:'TeamHome',
                component:TeamHome
            },
            {
                path:'TeamNews',
                name:'TeamNews',
                component:TeamNews
            },
            {
                path:'TeamNotes',
                name:'TeamNotes',
                component:TeamNotes
            },
            {
                path:'TeamWall',
                name:'TeamWall',
                component:TeamWall
            }
            
        ]
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
   
})
export default router