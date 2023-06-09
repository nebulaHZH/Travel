import service from ".."
const baseurl = '/api/team' 
// -------------发布团队动态----------------
export interface teamNewsPublishData{
    content: string,
    // id: BigInteger,
    imageUrl: string,
    teamId: number,
    // userId: BigInteger
  }
export function teamNewsPublish(data:teamNewsPublishData){
return service({
    url:`${baseurl}/news/add`,
    method:"post",
    data
})
}

// -------------删除团队动态----------------
interface teamNewsDeleteData{
    id:BigInteger
}

export function teamNewsDelete(data:teamNewsDeleteData){
    return service({
        url:"/team/news/delete",
        method:"post",
        data
    })
}

// -------------根据 id 获取团队动态----------------

export function teamNewsGetById(data:BigInteger){
    return service({
        url:"/team/news/get/vo",
        method:"GET",
        data
    })
}

// -------------分页获取列表（封装类）----------------
export interface teamNewsListData{
    // content: string,
    current: number,
    // id: BigInteger,
    // imageUrl: string,
    pageSize: number,
    // searchText: string,
    sortField: string,
    // sortOrder: string,
    teamId: number,
    // userId: BigInteger
  }
export function teamNewsList(data:teamNewsListData){
    return service({
        url:`${baseurl}/news/list/page/vo`,
        method:"POST",
        data
    })
}

// -------------分页获取当前用户创建的资源列表----------------
interface teamNewsUserCreateListData{
    content: string,
    current: BigInteger,
    id: BigInteger,
    imageUrl: string,
    pageSize: BigInteger,
    searchText: string,
    sortField: string,
    sortOrder: string,
    teamId: BigInteger,
    userId: BigInteger
  }
export function teamNewsUserCreateList(data:teamNewsUserCreateListData){
    return service({
        url:"/team/news/my/list/page/vo",
        method:"POST",
        data
    })
}
