import service from ".."

// -------------分页获取列表（封装类）----------------
export interface teamApplyAllUserListData{
    current: number,
    userId: number
}
export function teamApplyAllUserList(data:teamApplyAllUserListData){
    return service({
        url:"/api/team/list/page/vo",
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
