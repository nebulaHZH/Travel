import service from ".."
const baseurl = "/api/official"
// -------------添加周边----------------
export interface officialDerivativeAddData{
    coverUrl: string,
    derivativeName: string,
    //id: bigint,
    intro: string,
    obtainMethod: number,
    //officialId: bigint,
    price: number,
    //totalCount: bigint,
    typeId: number,
    //userId: bigint
  }
  export function officialDerivativeAdd(data:officialDerivativeAddData){
      return service({
          url:`${baseurl}/derivative/add`,
          method:"POST",
          data
      })
  }
// -------------删除周边----------------
export interface officialDerivativeDelData{
    id: number
  }
  export function officialDerivativeDel(data:officialDerivativeDelData){
      return service({
          url:`${baseurl}/derivative/delete`,
          method:"POST",
          data
      })
  }
// -------------通过id获取周边----------------
export interface officialGetDerivativeByIdData{
    id: number
  }
  export function officialGetDerivativeById(data:officialGetDerivativeByIdData){
      return service({
          url:`${baseurl}/derivative/get/vo`,
          method:"GET",
          data
      })
  }

// -------------分页获取列表（封装类）----------------
export interface officialGetDerivativeListData{
    current: number,
    // derivativeName: string,
    // derivativeState: bigint,
    // id: bigint,
    // intro: string,
    // obtainMethod: bigint,
    // officialId: bigint,
    pageSize: number,
    // price: bigint,
    // searchText: string,
    // sortField: string,
    // sortOrder: string,
    // totalCount: bigint,
    // typeId: bigint,
    // userId: bigint
  }
  export function officialGetDerivativeList(data:officialGetDerivativeListData){
      return service({
          url:`${baseurl}/derivative/list/page/vo`,
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
          url:`${baseurl}/derivative/obtain`,
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
          url:`${baseurl}/derivative/rcmd`,
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
          url:`${baseurl}/derivative/update`,
          method:"POST",
          data
      })
  }
