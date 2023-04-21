import service from ".."

// -------------添加资讯通知----------------
interface officialNoticeAddData{
    coverUrl: string,
    detail: string,
    id: bigint,
    intro: string,
    notificationState: bigint,
    officialId: bigint,
    title: string,
    typeId: bigint,
    userId: bigint
  }
export function officialNoticeAdd(data:officialNoticeAddData){
    return service({
        url:"/official/notification/add",
        method:"POST",
        data
    })
}
// -------------下架资讯通知----------------
interface officialNoticeDelData{
    id: bigint
  }
export function officialNoticeDel(data:officialNoticeDelData){
    return service({
        url:"/official/notification/delete",
        method:"POST",
        data
    })
}
// -------------根据 id 获取资讯通知详情----------------
interface officialGetNoticeByIdData{
    id: bigint
  }
export function officialGetNoticeById(data:officialGetNoticeByIdData){
    return service({
        url:"/official/notification/get/vo",
        method:"POST",
        data
    })
}
// -------------分页获取列表（封装类）----------------
interface officialGetNoticeListData{
    createTime: string,
    current: bigint,
    detail: string,
    id: bigint,
    intro: string,
    notificationState: bigint,
    officialId: bigint,
    pageSiz: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    title: string,
    typeId: bigint,
    updateTime: string,
    userId: bigint,
    viewCount: bigint
  }
export function officialGetNoticeList(data:officialGetNoticeListData){
    return service({
        url:"/official/notification/list/page/vo",
        method:"POST",
        data
    })
}

// -------------更新资讯通知----------------
interface officialNoticeUpdateData{
    coverUrl: string,
    detail: string,
    id: bigint,
    intro: string,
    notificationState: bigint,
    officialId: bigint,
    title: string,
    typeId: bigint,
    userId: bigint
  }
export function officialNoticeUpdate(data:officialNoticeUpdateData){
    return service({
        url:"/official/notification/update",
        method:"POST",
        data
    })
}

