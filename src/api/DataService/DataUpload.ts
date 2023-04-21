import service from ".."

// -------------官方推荐请求----------------
interface OfficialRecommendListData{
    current: bigint,
    latAndLong: string,
    officialId: bigint,
    pageSize: bigint,
    rcmdType: bigint,
    sortField: string,
    sortOrder: string   
  }
export function OfficialRecommendList(data:OfficialRecommendListData){
    return service({
        url:"/data/official/rcmd",
        method:"POST",
        data
    })
}

// -------------个性化推荐请求----------------
interface PersonalRecommendListData{
    current: bigint,
    pageSize: bigint,
    rcmdType: bigint,
    sortField: string,
    sortOrder: string
  }
export function PersonalRecommendList(data:PersonalRecommendListData){
    return service({
        url:"/data/personal/rcmd",
        method:"POST",
        data
    })
}

// -------------游记推荐请求----------------
interface TravelRecommendListData{
    current: bigint,
    id: bigint,
    pageSize: bigint,
    rcmdType: bigint,
    sortField: string,
    sortOrder: string,
    tag: string,
    travelType: bigint,
    userId: bigint
  }
export function TravelRecommendList(data:TravelRecommendListData){
    return service({
        url:"/data/travel/rcmd",
        method:"POST",
        data
    })
}


