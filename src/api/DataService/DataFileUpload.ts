import service from ".."

// -------------文件上传----------------
interface fileUploadData{
    biz:string,
    file:File
  }
export function fileUpload(data:fileUploadData){
    return service({
        url:"/data/file/upload",
        method:"POST",
        data
    })
}

