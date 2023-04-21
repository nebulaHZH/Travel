import service from ".."

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
    url:"/team/change",
    method:"POST",
    data
})
}



// -------------团队更换---------------
interface teamAddDate{
    capacity: BigInteger,
  coverUrl: string,
  iconUrl: string,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  teamName: string,
  userId: BigInteger
}


export function teamAdd(data:teamAddDate){
    return service({
        url:"/team/add",
        method:"post",
        data
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
export function getVo(data:teamIdData){
    return service({
      url:"/team/get/vo",
      method:"GET",
      data
})
}

// -------------获取指定用户加入的团队列表----------------
interface teamQueryPersonalData{
  current: BigInteger,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  pageSize: BigInteger,
  searchText: string,
  sortField: string,
  sortOrder: string,
  teamName: string,
  teamState: BigInteger,
  userId: BigInteger
}
export function teamQueryPersonal(data:teamQueryPersonalData){
    return service({
      url:"/team/join/list",
      method:"post",
      data
})
}

// -------------分页获取团队列表----------------
interface teamQueryRequestData{
  current: BigInteger,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  pageSize: BigInteger,
  searchText: string,
  sortField: string,
  sortOrder: string,
  teamName: string,
  teamState: BigInteger,
  userId: BigInteger
}
export function teamQueryRequest(data:teamQueryRequestData){
    return service({
      url:"/team/list/page/vo",
      method:"post",
      data
})
}

// -------------分页获取当前用户创建的资源列表----------------
interface teamPersonalCreateData{
  current: BigInteger,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  pageSize: BigInteger,
  searchText: string,
  sortField: string,
  sortOrder: string,
  teamName: string,
  teamState: BigInteger,
  userId: BigInteger
}
export function teamPersonalCreate(data:teamPersonalCreateData){
  return service({
    url:"/team/my/list/page/vo",
    method:"post",
    data
})
}

// -------------获取推荐团队（大众化推荐）----------------
interface teamCommendData{
  current: BigInteger,
  id: BigInteger,
  intro: string,
  isAudit: BigInteger,
  pageSize: BigInteger,
  searchText: string,
  sortField: string,
  sortOrder: string,
  teamName: string,
  teamState: BigInteger,
  userId: BigInteger
}
export function teamCommend(data:teamCommendData){
  return service({
    url:"/team/rcmd",
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
export function teamQueryNumbers(data:BigInteger){
  return service({
    url:"/team/member/{"+data+"}",
    method:"GET",
})
}

