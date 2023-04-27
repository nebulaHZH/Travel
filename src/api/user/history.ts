import service from ".."

// -------------添加浏览记录---------------
interface historyAddRequestData{
    historyObjId: bigint,
    historyObjType: bigint
  }
export function historyAddRequest(data:historyAddRequestData){
    return service({
        url:"/user/history/history/add",
        method:"post",
        data
    })
}
// -------------删除浏览记录---------------
interface deleteRequestData{
    historyObjId: bigint,
    historyObjType: bigint
  }
export function deleteRequest(data:deleteRequestData){
    return service({
        url:"/user/history/history/delete",
        method:"post",
        data
    })
}

// -------------获取浏览记录---------------
interface historyQueryRequestData{
    current: bigint,
    pageSize: bigint,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function historyQueryRequest(data:historyQueryRequestData){
    return service({
        url:"/user/history/history/list/page",
        method:"post",
        data
    })
}

