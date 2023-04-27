import service from ".."

// -------------文件上传----------------
export interface fileUploadData{
    file:FormData
  }
export function fileUpload(data:fileUploadData){
    return service({
        url:"/api/data/file/upload",
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        data:data.file
    })
}

