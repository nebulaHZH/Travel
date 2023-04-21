import service from ".."

// -------------获取默认标签----------------
export function getTags(){
    return service({
        url:"/data/tag/list",
        method:"GET",
    })
}
