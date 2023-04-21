import service from ".."

// -------------申请成为官方----------------
interface officialApplyAddData{
    applyState: bigint,
    city: string,
    contact: string,
    id: bigint,
    location: string,
    material: string,
    officialName: string,
    province: string,
    typeId: bigint,
    userId: bigint
  }
  export function officialApplyAdd(data:officialApplyAddData){
      return service({
          url:"/official/apply/add",
          method:"POST",
          data
      })
  }

// -------------分页获取列表（封装类）----------------
interface officialListData{
    applyState: bigint,
    city: string,
    contact: string,
    current: bigint,
    id: bigint,
    location: string,
    officialName: string,
    pageSize: bigint,
    province: string,
    searchText: string,
    sortField: string,
    sortOrder: string,
    typeId: bigint,
    userId: bigint
  }
  export function officialList(data:officialListData){
      return service({
          url:"/official/apply/vo/page/list",
          method:"POST",
          data
      })
  }