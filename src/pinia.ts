import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter",{
    persist:{
        enabled:true
    },
    state:()=>{
        return {
            count:0,
            teamList:[],
            teamDetail:{
                id: 0,
                userId: 0,
                teamName: "sdasd",
                iconUrl: "daaadd",
                coverUrl: "dadasd.com",
                intro: "daa ",
                teamSize: 0,
                capacity: 0,
                newsCount: 0,
                travelCount: 0,
                isAudit: 0,
                teamState: 0,
                ischecked:true,
                user: {
                  id: 1,
                  userName: "张三",
                  userAvatar: "123.com"
                },
                createTime: "2023-04-23T14:41:26.000+00:00",
                updateTime: "2023-04-23T14:41:26.000+00:00"
            },
            members:[],
            allTeams:[],
            hotRecommend:[],
            teamDetails:[],
            newsList:[],
            scenicDetail:[],
            travelDetail:[],
            derivativeDetail:[],
            spotDetail:[],
            notificationDetail:[],
            travelDetailId:0
        }
    },
    actions:{
        increment(){
            this.count ++ ;
        }
    }
})