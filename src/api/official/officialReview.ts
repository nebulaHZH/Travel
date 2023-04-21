import service from ".."

// -------------添加点评----------------
interface officialReviewAddData{
    content: string,
    id: bigint,
    isDeleted: bigint,
    location: string,
    reviewObjId: bigint,
    reviewObjType: bigint,
    userId: bigint
  }
export function officialReviewAdd(data:officialReviewAddData){
    return service({
        url:"/official/review/add",
        method:"POST",
        data
    })
}

// -------------删除点评----------------
interface officialReviewDelData{
    id: bigint
  }
export function officialReviewDel(data:officialReviewDelData){
    return service({
        url:"/official/review/delete",
        method:"POST",
        data
    })
}
// -------------分页获取列表（封装类）----------------
interface officialGetReviewListData{
    content: string,
    current: bigint,
    id: bigint,
    isDeleted: bigint,
    location: string,
    pageSize: bigint,
    reviewObjId: bigint,
    reviewObjType: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    userId: bigint
  }
export function officialGetReviewList(data:officialGetReviewListData){
    return service({
        url:"/official/review/list/page/vo",
        method:"POST",
        data
    })
}
