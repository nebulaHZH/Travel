import service from ".."

// -------------添加官方资源----------------
interface officialResourceAddData{
    coverUrl: string,
    detail: string,
    id: bigint,
    intro: string,
    officialId: bigint,
    price: string,
    resourceDetailId: bigint,
    title: string,
    typeId: bigint,
    userId: bigint
  }
  export function officialResourceAdd(data:officialResourceAddData){
      return service({
          url:"/official/resource/add",
          method:"POST",
          data
      })
  }
// -------------下架官方资源----------------
interface officialResourceDelData{
    id: bigint
  }
export function officialResourceDel(data:officialResourceDelData){
    return service({
        url:"/official/resource/delete",
        method:"POST",
        data
    })
}

// -------------根据 Id 获取官方资源详情----------------
interface officialGetResourceDetailByIdData{
    id: bigint
  }
export function officialGetResourceDetailById(data:officialGetResourceDetailByIdData){
    return service({
        url:"/official/resource/detail",
        method:"POST",
        data
    })
}
// -------------根据 id 获取官方资源----------------
export function officialGetResourceById(data:bigint){
    return service({
        url:"/official/resource/get/vo",
        method:"GET",
        data
    })
}

// -------------根据获取官方资源详情----------------
interface officialGetResourceListData{
    current: bigint,
    detail: string,
    id: bigint,
    intro: string,
    likeCount: bigint,
    officialId: bigint,
    pageSize: bigint,
    price: string,
    resourceDetailId: bigint,
    resourceState: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    title: string,
    typeId: bigint,
    userId: bigint,
    viewCount: bigint
  }
export function officialGetResourceList(data:officialGetResourceListData){
    return service({
        url:"/official/resource/list/page/vo",
        method:"POST",
        data
    })
}
// -------------更新官方资源----------------
interface officialResourceUpdateData{
    coverUrl: string,
    detail: string,
    id: bigint,
    intro: string,
    officialId: bigint,
    price: string,
    resourceDetailId: bigint,
    resourceState: bigint,
    title: string,
    typeId: bigint,
    userId: bigint
  }
export function officialResourceUpdate(data:officialResourceUpdateData){
    return service({
        url:"/official/resource/update",
        method:"POST",
        data
    })
}
