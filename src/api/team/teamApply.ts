import service from ".."

// -------------分页获取列表（封装类）----------------
interface teamApplyAllUserListData{
    auditState: BigInt,
    current: BigInt,
    id: BigInt,
    pageSize: BigInt,
    searchText: string,
    sortField: string,
    sortOrder: string,
    teamId: BigInt,
    teamState: BigInt,
    userId: BigInt
}
export function teamApplyAllUserList(data:teamApplyAllUserListData){
    return service({
        url:"/team/apply/list/page/vo",
        method:"POST",
        data
    })
}

// -------------审批加入----------------
interface teamApplyUpdateUserData{
    auditState: BigInt,
    id: BigInt,
    teamId: BigInt,
    teamState: BigInt,
    userId: BigInt
  }
export function teamApplyUpdateUser(data:teamApplyUpdateUserData){
    return service({
        url:"teamApplyUpdateUserData",
        method:"POST",
        data
    })
}
