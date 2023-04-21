import service from ".."

// -------------发布团队墙----------------
interface teamWallUserCreateListData{
    content: string,
    id: BigInt,
    teamId: BigInt,
    userId: BigInt
}
export function teamWallUserCreateList(data:teamWallUserCreateListData){
    return service({
        url:"/team/wall/add",
        method:"POST",
        data
    })
}

// -------------删除团队墙----------------
interface teamWallUserDeleteListData{
    id: BigInt
}
export function teamWallUserDeleteList(data:teamWallUserDeleteListData){
    return service({
        url:"/team/wall/delete",
        method:"POST",
        data
    })
}

// -------------根据 id 获取团队墙----------------
interface teamWallUserGetByIdListData{
    id: BigInt
}
export function teamWallUserGetByIdList(data:teamWallUserGetByIdListData){
    return service({
        url:"/team/wall/get/vo",
        method:"GET",
        data
    })
}

// -------------分页获取列表（封装类）----------------
interface teamWallAllUserListData{
    "content": "",
    "current": 0,
    "id": 0,
    "pageSize": 0,
    "searchText": "",
    "sortField": "",
    "sortOrder": "",
    "teamId": 0,
    "userId": 0
  }
export function teamWallAllUserList(data:teamWallAllUserListData){
    return service({
        url:"/team/wall/list/page/vo",
        method:"POST",
        data
    })
}

