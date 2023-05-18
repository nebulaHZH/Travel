import service from ".."
const baseurl = '/api/travel/article'
const baseurl2 = '/api/travel/video'
// -------------发布文章游记----------------
export interface articleAddRequestData{
    coverUrl: string,
    detail: string,
    intro: string,
    //location: string,
    permission: number,
    tag:string,
    title: string,
}
export function articleAddRequest(data:articleAddRequestData){
    return service({
        url:`${baseurl}/add`,
        method:"POST",
        data
    })
}
// -------------删除文章游记----------------
export interface deleteRequestData{
    //id:number
}
export function deleteRequest(data:deleteRequestData){
    return service({
        url:`${baseurl}/delete`,
        method:"POST",
        data
    })
}
// -------------根据Id查询文章游记----------------
export function searchTravelById(id:number){
    return service({
        url:`${baseurl}/get/vo`,
        method:"GET",
        params:{
            id:id
        }
    })
}
// -------------分页查询文章游记【热门和最新】----------------
export interface articleQueryRequestData{
    current: number,
    //pageSize: number,
    sortField: string,
    orderType:number,
}
export function articleQueryRequest(data:articleQueryRequestData){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------分页查询文章游记根据userid【热门和最新】----------------
export interface RequestByUserIdData{
    current: number,
    pageSize: number,
    sortField: string,
    userId:number
}
export function RequestByUserId(data:RequestByUserIdData){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------根据teamId分页查询文章游记【热门和最新】----------------
export interface articleQueryRequestByTeamIdData{
    current: number,
    pageSize: number,
    sortOrder:string,
    teamId:number
}
export function articleQueryRequestByTeamId(data:articleQueryRequestByTeamIdData){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------分页查询文章游记【热门和最新】----------------
export interface articleQueryRequestByIdData{
    
    pageSize: number,
    sortField: string,
    orderType:number,
    userId:number,
    currents: number,
}
export function articleQueryRequestById(data:articleQueryRequestByIdData){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------分页查询文章游记[类型]----------------
export interface articleQueryRequestData2{
    //current: number,
    //pageSize: number,
    sortField: string,
    queryType:number
}
export function articleQueryRequest2(data:articleQueryRequestData2){
    return service({
        url:`${baseurl}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------更新文章游记----------------
export interface articleUpdateRequestData{
    articleState: number,
    coverUrl: string,
    detail: string,
    id: number,
    intro: string,
    location: string,
    permission: number,
    tag: string,
    teamId: number,
    title: string,
    userId: number
}
export function articleUpdateRequest(data:articleUpdateRequestData){
    return service({
        url:`${baseurl}/update`,
        method:"POST",
        data
    })
}
// -------------获取文章详情----------------
export interface getArticleDeatilData{
    detailId:number,
    articleId:number
}
export function getArticleDeatil(data:getArticleDeatilData){
    return service({
        url:'/api/travel/detail',
        method:"GET",
        params:data
    })
}
// -------------发布视频游记----------------
export interface videoAddRequestData{
    coverUrl: string,
    intro: string,
    location: string,
    //permission: number,
    tag: string,
    //teamId: number,
    title: string,
    videoUrl: string
}
export function videoAddRequest(data:videoAddRequestData){
    return service({
        url:`${baseurl2}/add`,
        method:"POST",
        data
    })
}
// -------------删除视频游记----------------
export interface deleteArtileRequestData{
    //id:number
}
export function deleteArtileRequest(data:deleteArtileRequestData){
    return service({
        url:`${baseurl2}/delete`,
        method:"POST",
        data
    })
}
// -------------根据Id查询视频游记----------------
export function getVideoById(){
    return service({
        url:`${baseurl2}/get/vo`,
        method:"GET"
    })
}
// -------------分页查询视频游记----------------
export interface videoQueryRequestData{
    current: number,
    //idList: [],
    //orderType: number,
    pageSize: number,
    //queryType: number,
    sortField: string,
    //sortOrder: string
}
export function videoQueryRequest(data:videoQueryRequestData){
    return service({
        url:`${baseurl2}/list/page/vo`,
        method:"POST",
        data
    })
}
// -------------更新视频游记----------------
export interface videoUpdateRequestData{
    coverUrl: string,
    id: number,
    intro: string,
    location: string,
    permission: number,
    tag: string,
    //teamId: number,
    title: string,
    userId: number,
    videoUrl: string
}
export function videoUpdateRequest(data:videoUpdateRequestData){
    return service({
        url:`${baseurl2}/update`,
        method:"POST",
        data
    })
}

