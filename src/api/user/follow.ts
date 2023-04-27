import service from "..";

// -------------关注-取消关注---------------
 interface followRequestData{
    followState: bigint,
    followUserId: bigint
  }
export function followRequest(data:followRequestData){
    return service({
        url:"/user/follow/execute",
        method:"post",
        data
    })
}
// -------------获取关注列表---------------
interface followQueryRequestData{
    current: bigint,
    pageSize: bigint,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function followQueryRequest(data:followQueryRequestData){
    return service({
        url:"/user/follow/list/page/vo",
        method:"post",
        data
    })
}

