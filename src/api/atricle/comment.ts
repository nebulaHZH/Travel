import service from ".."
const baseurl = '/api/travel/travel/comment'
// -------------发布评论----------------
export interface commentAddRequestData{
    commentObjId: number,
    commentObjType: number,
    content: string,
    parentUserId: number,
    topId: number
  }
export function commentAddRequest(data:commentAddRequestData){
    return service({
        url:`${baseurl}/add`,
        method:"POST",
        data
    })
}

// -------------删除评论----------------
export interface deleteRequestData{
    //id: number,
  }
export function deleteRequest(data:deleteRequestData){
    return service({
        url:`${baseurl}/delete`,
        method:"POST",
        data
    })
}

// -------------获取评论----------------
export interface commentQueryRequestData{
    commentObjId: number,
    commentObjType: number,
}
export function commentQueryRequest(data:commentQueryRequestData){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------获取所有评论----------------
export interface commentAllQueryRequestData{
    commentObjType: number,
    current:number,
    pageSize:number
}
export function commentAllQueryRequest(data:commentAllQueryRequestData){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
