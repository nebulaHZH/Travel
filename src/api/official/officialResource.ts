import service from ".."
const baseurl = "/api/official"
// -------------添加官方资源----------------
export interface officialResourceAddData{
    coverUrl: string,
    detail: string,
    //id: bigint,
    intro: string,
    //officialId: bigint,
    //price: string,
    //resourceDetailId: bigint,
    title: string,
    //typeId: bigint,
    //userId: bigint
  }
  export function officialResourceAdd(data:officialResourceAddData){
      return service({
          url:`${baseurl}/resource/add`,
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
        url:`${baseurl}/resource/delete`,
        method:"POST",
        data
    })
}

// -------------根据 Id 获取官方资源详情----------------
export interface officialGetResourceDetailByIdData{
    offResId: number,
    detailId:number
  }
export function officialGetResourceDetailById(data:officialGetResourceDetailByIdData){
    return service({
        url:`${baseurl}/resource/detail`,
        method:"GET",
        params:data
    })
}
// -------------根据 id 获取官方资源----------------
export function officialGetResourceById(data:bigint){
    return service({
        url:`${baseurl}/resource/get/vo`,
        method:"GET",
        data
    })
}

// -------------根据获取官方资源详情----------------
export interface officialGetResourceListData{
    intro: string,
    sortField: string,
    title: string,
    officialId:number
  }
export function officialGetResourceList(data:officialGetResourceListData){
    return service({
        url:`${baseurl}/resource/list/page/vo`,
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
