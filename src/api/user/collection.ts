import service from ".."

// -------------收藏-取消收藏---------------
interface collectionRequestData{
    collectionObjId: bigint,
    collectionObjType: bigint,
    favoriteId: bigint,
    requestType: bigint
  }
export function collectionRequest(data:collectionRequestData){
    return service({
        url:"/user/collection/collection/execute",
        method:"post",
        data
    })
}

// -------------获取收藏列表---------------
interface collectionQueryRequestData{
    current: bigint,
    pageSize: bigint,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function collectionQueryRequest(data:collectionQueryRequestData){
    return service({
        url:"/user/collection/collection/list/page/vo",
        method:"post",
        data
    })
}

// -------------创建收藏夹---------------
interface favoriteAddRequestData{
    favoriteName: string
}
export function favoriteAddRequest(data:favoriteAddRequestData){
    return service({
        url:"/user/favorite/add",
        method:"post",
        data
    })
}

// -------------删除收藏夹---------------
interface deleteRequestData{
    favoriteName: string
}
export function deleteRequest(data:deleteRequestData){
    return service({
        url:"/user/favorite/delete",
        method:"post",
        data
    })
}

// -------------获取收藏夹---------------
interface favoriteQueryRequestData{
    current: bigint,
    pageSize: bigint,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function favoriteQueryRequest(data:favoriteQueryRequestData){
    return service({
        url:"/user/favorite/list/page/vo",
        method:"post",
        data
    })
}
