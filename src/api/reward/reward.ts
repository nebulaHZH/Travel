import service from ".."
// -------------兑换记录 Controller:分页获取列表（封装类）----------------
interface exchangeRecordQueryData{
    certificate: string,
    current: bigint,
    derivativeId: bigint,
    id: bigint,
    isDeleted: bigint,
    isOfficial: bigint,
    pageSize: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function exchangeRecordQuery(data:exchangeRecordQueryData){
    return service({
        url:"/reward/exchange/vo/page/list",
        method:"post",
        data
    })
}
// -------------奖励任务 Controller:分页获取列表（封装类）[先不管]----------------

export function rewardTasks(data:0){
    return service({
        url:"/reward/task/list",
        method:"GET",
        data
    })
}

// -------------消费记录 Controller:分页获取列表（封装类）----------------
interface consumeRecordQueryData{
    consumeId: bigint,
    consumeType: bigint,
    content: string,
    current: bigint,
    id: bigint,
    isDeleted: bigint,
    pageSize: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function consumeRecordQuery(data:consumeRecordQueryData){
    return service({
        url:"/reward/consume/vo/page/list",
        method:"POST",
        data
    })
}