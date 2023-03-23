import {createRouter,createWebHistory} from 'vue-router'
import MainPage from '../components/Pages/MianPage.vue'
import Scenic from '../components/Pages/Scenic.vue'     
import Teams from '../components/Pages/Teams.vue'
import Notes from '../components/Pages/Notes.vue'
import Mall from '../components/Pages/Mall.vue'
import My from '../components/Pages/My.vue'
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
        component:Notes
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

]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
   
})
export default router