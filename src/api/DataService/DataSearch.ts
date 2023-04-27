import service from ".."

// -------------搜索请求----------------
export interface SearchListData{
    searchText: string,
    type: string
  }
export function SearchList(data:SearchListData){
    return service({
        url:"/api/data/search/all",
        method:"POST",
        data
    })
}