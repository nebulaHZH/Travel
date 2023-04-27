import service from ".."
const baseurl="/api/official"
// -------------添加官方介绍----------------
export interface officialAddIntroData{
    //city: string,
    //contact: string,
    coverUrl: string,
    detail: string,
    id: number,
    intro: string,
    //latAndLong: string,
    //location: string,
    //officialDetailId: bigint,
    officialName: string,
    //province: string,
    tag: string,
    //typeId: number,
    //userId: bigint,
    videoUrl: string
  }
export function officialAddIntro(data:officialAddIntroData){
    return service({
        url:`${baseurl}/add`,
        method:"POST",
        data
    })
}
// -------------根据 Id 获取官方详情----------------
export interface officialGetIntroByIdData{
	detailId: number, //这里是登录的用户的id
	offId: number//官方的id
}
export function officialGetIntroById(data:officialGetIntroByIdData){
    return service({
        url:`${baseurl}/detail`,
        method:"GET",
        params:data
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
export interface officialGetCommendData{
    current: number,
    pageSize: number,
    sortField: string,
    typeId: number
  }
export function officialGetCommend(data:officialGetCommendData){
    return service({
        url:`${baseurl}/rcmd`,
        method:"POST",
        data
    })
}
// -------------更新官方介绍----------------
export interface officialUpdateIntroData{
    //city: string,
    //contact: string,
    coverUrl: string,
    detail: string,
    id: number,
    intro: string,
    //latAndLong: string,
    //location: string,
    officialDetailId: number,//官方详情id
    officialName: string,
    //province: string,
    //tag: string,
    //typeId: bigint,
    //userId: bigint,
    videoUrl: string,
  }
export function officialUpdateIntro(data:officialUpdateIntroData){
    return service({
        url:`${baseurl}/update`,
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
export interface officialViewPageListData{
//   city: string,
//   contact: string,
//   coverUrl: string,
current: number,
//   detail: string,
//   id: bigint,
//   intro: string,
//   latAndLong: string,
//   location: string,
//   officialDetailId: bigint,
//   officialName: string,
pageSize: number,
//   province: string,
//   searchText: string,
//   sortField: string,
//   sortOrder: string,
//   tag: string,
//   typeId: bigint,
//   userId: bigint,
//   videoUrl: string,
}
export function officialViewPageList(data:officialViewPageListData){
    return service({
        url:`${baseurl}/vo/page/list`,
        method:"POST",
        data
    })
}