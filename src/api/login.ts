import service from ".";
 interface loginData{
    username:string,
    usercode:string
 }
export function login(data:loginData){
    return service({
        url:"/login",
        method:"post",
        data
    })
}