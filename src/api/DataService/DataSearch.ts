import service from ".."

// -------------搜索请求----------------
interface SearchListData{
    classifyTypeId: bigint,
    current: bigint,
    pageSize: bigint,
    searchText: string,
    sortField: string,
    sortOrder: string,
    type: string
  }
export function SearchList(data:SearchListData){
    return service({
        url:"/data/search/all",
        method:"POST",
        data
    })
}