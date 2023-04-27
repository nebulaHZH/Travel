import service from ".."

// -------------删除消息---------------
interface deleteRequestData{
    id: bigint
  }
export function deleteRequest(data:deleteRequestData){
    return service({
        url:"/user/message/delete",
        method:"post",
        data
    })
}

// -------------根据id获取消息详情---------------
export function getMassageById(data:bigint){
    return service({
        url:"/user/message/get/detail",
        method:"GET",
        data
    })
}


// -------------获取消息列表---------------
interface messageQueryRequestData{
    current: bigint,
    pageSize: bigint,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function messageQueryRequest(data:messageQueryRequestData){
    return service({
        url:"/user/message/list/page/vo",
        method:"post",
        data
    })
}

