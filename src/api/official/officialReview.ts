import service from ".."
const baseUrl='/api/official'
// -------------添加点评----------------
export interface officialReviewAddData{
    content: string,
    reviewObjId: number,
    reviewObjType: number,
  }
export function officialReviewAdd(data:officialReviewAddData){
    return service({
        url:`${baseUrl}/review/add`,
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
export interface officialGetReviewListData{
    reviewObjId: number,
    sortField: string
  }
export function officialGetReviewList(data:officialGetReviewListData){
    return service({
        url:`${baseUrl}/review/list/page/vo`,
        method:"POST",
        data
    })
}
