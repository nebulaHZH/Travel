import service from ".."
const  baseUrl="/api/data"
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
        url:`${baseUrl}/official/rcmd`,
        method:"POST",
        data
    })
}

// -------------个性化推荐请求----------------
export interface PersonalRecommendListData{
    current: number,
    pageSize: number,
    rcmdType: number,
  }
export function PersonalRecommendList(data:PersonalRecommendListData){
    return service({
        url:`${baseUrl}/personal/rcmd`,
        method:"POST",
        data
    })
}

// -------------游记推荐请求----------------
export interface TravelRecommendListData{
    current: number,
    pageSize: number,
    rcmdType: 1,
    travelType: 1,
    tag:string
  }
export function TravelRecommendList(data:TravelRecommendListData){
    return service({
        url:`${baseUrl}/travel/rcmd`,
        method:"POST",
        data
    })
}


