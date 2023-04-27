import service from ".."

// -------------点赞-取消点赞---------------
interface userLikeRequestData{
    likeObjId: bigint,
    likeObjType: bigint,
    likeState: bigint
  }
export function userLikeRequest(data:userLikeRequestData){
    return service({
        url:"/user/like/execute",
        method:"post",
        data
    })
}
