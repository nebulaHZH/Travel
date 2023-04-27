import service from ".."

const baseurl = '/api/team'
interface teamIdData{
  id:BigInteger
}

interface teamChangeData{
    joinOrQuitOrKick: BigInteger,
    teamId: BigInteger,
    userId: BigInteger
  }
export function teamChange(data:teamChangeData){
return service({
    url:`${baseurl}/change`,
    method:"POST",
    data
})
}



// -------------团队更换---------------
export interface teamAddData{
  capacity: number,
  coverUrl: string,
  iconUrl: string,
  intro: string,
  isAudit: number,
  teamName: string
}


export function teamAdd(data:teamAddData){
    return service({
        url:`${baseurl}/add`,
        method:"post",
        data:data
    })
}   
// -------------团队解散----------------

export function teamDelete(data:teamIdData){
    return service({
      url:"/team/delete",
      method:"post",
      data
})
}

// -------------根据 id 获取团队介绍详情----------------
export function getVo(data:number){
    return service({
      url:`${baseurl}/get/vo`,
      method:"GET",
      params:{
        id:data
      }
})
}

// -------------获取指定用户加入的团队列表----------------
export interface teamQueryPersonalData{
//   current: BigInteger,
//   id: BigInteger,
//   intro: string,
//   isAudit: BigInteger,
//   pageSize: BigInteger,
//   searchText: string,
//   sortField: string,
//   sortOrder: string,
//   teamName: string,
//   teamState: BigInteger,
//   userId: BigInteger
}
export function teamQueryPersonal(data:teamQueryPersonalData){
    return service({
      url:`${baseurl}/join/list`,
      method:"post",
      data:data
})
}

// -------------分页获取团队列表----------------
export interface teamQueryRequestData{
  current: number,
  // id: BigInteger,
  // intro: string,
  // isAudit: BigInteger,
  pageSize: number,
  // searchText: string,
  // sortField: string,
  // sortOrder: string,
  // teamName: string,
  // teamState: BigInteger,
  // userId: BigInteger
}
export function teamQueryRequest(data:teamQueryRequestData){
    return service({
      url:`${baseurl}/list/page/vo`,
      method:"post",
      data
})
}

// -------------分页获取当前用户创建的资源列表----------------
export interface teamPersonalCreateData{
  // current: BigInteger,
  // id: BigInteger,
  // intro: string,
  // isAudit: BigInteger,
  // pageSize: BigInteger,
  // searchText: string,
  // sortField: string,
  // sortOrder: string,
  // teamName: string,
  // teamState: BigInteger,
  // userId: BigInteger
}
export function teamPersonalCreate(data:teamPersonalCreateData){
  return service({
    url:`${baseurl}/my/list/page/vo`,
    method:"post",
    data:data
})
}

// -------------获取推荐团队（大众化推荐）----------------
export interface teamCommendData{
  current: number,
  // id: BigInteger,
  // intro: string,
  // isAudit: BigInteger,
  pageSize: number,
  // searchText: string,
  // sortField: string,
  // sortOrder: string,
  // teamName: string,
  // teamState: BigInteger,
  // userId: BigInteger
}
export function teamCommend(data:teamCommendData){
  return service({
    url:`${baseurl}/rcmd`,
    method:"post",
    data
})
}

// -------------更新团队----------------
interface teamUpdataData{
  capacity: BigInteger,
  coverUrl: string,
  iconUrl: string,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  teamName: string,
  teamState: BigInteger,
  userId: BigInteger
}

export function teamUpdata(data:teamUpdataData){
  return service({
    url:"/team/update",
    method:"post",
    data
})
}


// -------------查询团队所有成员----------------
export function teamQueryNumbers(data:number){
  return service({
    url:`${baseurl}/member/`+data,
    method:"GET"
})
}

