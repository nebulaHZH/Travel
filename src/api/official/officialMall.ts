import service from ".."

// -------------添加周边----------------
interface officialDerivativeAddData{
    coverUrl: string,
    derivativeName: string,
    id: bigint,
    intro: string,
    obtainMethod: bigint,
    officialId: bigint,
    price: bigint,
    totalCount: bigint,
    typeId: bigint,
    userId: bigint
  }
  export function officialDerivativeAdd(data:officialDerivativeAddData){
      return service({
          url:"/official/derivative/add",
          method:"POST",
          data
      })
  }
// -------------添加周边----------------
interface officialDerivativeDelData{
    id: bigint
  }
  export function officialDerivativeDel(data:officialDerivativeDelData){
      return service({
          url:"/official/derivative/delete",
          method:"POST",
          data
      })
  }
// -------------添加周边----------------
interface officialGetDerivativeByIdData{
    id: bigint
  }
  export function officialGetDerivativeById(data:officialGetDerivativeByIdData){
      return service({
          url:"/official/derivative/get/vo",
          method:"GET",
          data
      })
  }

// -------------分页获取列表（封装类）----------------
interface officialGetDerivativeListData{
    current: bigint,
    derivativeName: string,
    derivativeState: bigint,
    id: bigint,
    intro: string,
    obtainMethod: bigint,
    officialId: bigint,
    pageSize: bigint,
    price: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    totalCount: bigint,
    typeId: bigint,
    userId: bigint
  }
  export function officialGetDerivativeList(data:officialGetDerivativeListData){
      return service({
          url:"/official/derivative/list/page/vo",
          method:"POST",
          data
      })
  }
// -------------获取周边（购买 or 兑换）----------------
interface officialDerivativeObtainData{
    id: bigint
  }
  export function officialDerivativeObtain(data:officialDerivativeObtainData){
      return service({
          url:"/official/derivative/obtain",
          method:"POST",
          data
      })
  }
// -------------获取推荐周边（大众化推荐）----------------
interface officialDerivativeCommendData{
    current: bigint,
    derivativeName: string,
    derivativeState: bigint,
    id: bigint,
    intro: string,
    obtainMethod: bigint,
    officialId: bigint,
    pageSize: bigint,
    price: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    totalCount: bigint,
    typeId: bigint,
    userId: bigint
  }
  export function officialDerivativeCommend(data:officialDerivativeCommendData){
      return service({
          url:"/official/derivative/rcmd",
          method:"POST",
          data
      })
  }
// -------------获取推荐周边（大众化推荐）----------------
interface officialDerivativeUpdateData{
    coverUrl: string,
    derivativeName: string,
    derivativeState: bigint,
    id: bigint,
    intro: string,
    obtainMethod: bigint,
    officialId: bigint,
    price: bigint,
    totalCount: bigint,
    typeId: bigint,
    userId: bigint
  }
  export function officialDerivativeUpdate(data:officialDerivativeUpdateData){
      return service({
          url:"/official/derivative/update",
          method:"POST",
          data
      })
  }
