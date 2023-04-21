import service from ".."

// -------------添加官方介绍----------------
interface officialAddIntroData{
    city: string,
    contact: string,
    coverUrl: string,
    detail: string,
    id: bigint,
    intro: string,
    latAndLong: string,
    location: string,
    officialDetailId: bigint,
    officialName: string,
    province: string,
    tag: string,
    typeId: bigint,
    serId: bigint,
    videoUrl: string
  }
export function officialAddIntro(data:officialAddIntroData){
    return service({
        url:"/official/add",
        method:"POST",
        data
    })
}
// -------------根据 Id 获取官方详情----------------
interface officialGetIntroByIdData{
	code: bigint,
	data: bigint,
	message: string
}
export function officialGetIntroById(data:officialGetIntroByIdData){
    return service({
        url:"/official/detail",
        method:"GET",
        data
    })
}

// -------------点赞官方、官方点评、官方资源----------------
interface officialLikeData{
	code: bigint,
	data: bigint,
	message: string
}
export function officialLike(data:officialLikeData){
    return service({
        url:"/official/like",
        method:"POST",
        data
    })
}

// -------------获取推荐官方（大众化推荐）----------------
interface officialGetCommendData{
    city: string,
    contact: string,
    coverUrl: string,
    current: bigint,
    detail: string,
    id: bigint,
    intro: string,
    latAndLong: string,
    location: string,
    officialDetailId: bigint,
    officialName: string,
    pageSize: bigint,
    province: string,
    searchText: string,
    sortField: string,
    sortOrder: string,
    tag: string,
    typeId: bigint,
    userId: bigint,
    videoUrl: string,
  }
export function officialGetCommend(data:officialGetCommendData){
    return service({
        url:"/official/rcmd",
        method:"POST",
        data
    })
}
// -------------更新官方介绍----------------
interface officialUpdateIntroData{
    city: string,
    contact: string,
    coverUrl: string,
    detail: string,
    id: bigint,
    intro: string,
    latAndLong: string,
    location: string,
    officialDetailId: bigint,
    officialName: string,
    province: string,
    tag: string,
    typeId: bigint,
    userId: bigint,
    videoUrl: string,
  }
export function officialUpdateIntro(data:officialUpdateIntroData){
    return service({
        url:"/official/update",
        method:"POST",
        data
    })
}

// -------------根据 id 获取官方视图体（不包含官方详情）----------------

export function officialViewById(data:bigint){
    return service({
        url:"/official/vo",
        method:"GET",
        data
    })
}

// -------------分页获取列表（封装类）----------------
interface officialViewPageListData{
  city: string,
  contact: string,
  coverUrl: string,
  current: bigint,
  detail: string,
  id: bigint,
  intro: string,
  latAndLong: string,
  location: string,
  officialDetailId: bigint,
  officialName: string,
  pageSize: bigint,
  province: string,
  searchText: string,
  sortField: string,
  sortOrder: string,
  tag: string,
  typeId: bigint,
  userId: bigint,
  videoUrl: string,
}
export function officialViewPageList(data:officialViewPageListData){
    return service({
        url:"/official/vo/page/list",
        method:"POST",
        data
    })
}