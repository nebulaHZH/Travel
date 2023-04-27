import service from ".."

// -------------校验验证码---------------
interface codeCheckRequestData{
    code: string,
    codeType: bigint,
    credential: string,
    credentialType: bigint
  }
export function codeCheckRequest(data:codeCheckRequestData){
    return service({
        url:"/user/code/check",
        method:"post",
        data
    })
}

// -------------发送验证码---------------
interface codeSendRequestData{
    codeType: bigint,
    credential: string,
    credentialType: bigint
  }
export function codeSendRequest(data:codeSendRequestData){
    return service({
        url:"/user/code/send",
        method:"post",
        data
    })
}
// -------------根据id查询用户---------------
export function getUserById(data:bigint){
    return service({
        url:"/user/get/vo",
        method:"GET",
        data
    })
}

// -------------登录和登录测试--------------
interface loginRequestData{
    credential: string,
    credentialType: bigint,
    passcode: string
  }
export function loginRequest(data:loginRequestData){
    return service({
        url:"/user/login",
        method:"POST",
        data
    })
}
// -------------退出登录--------------
export function loginOut(){
    return service({
        url:"/user/logout",
        method:"GET"
    })
}

// -------------注册--------------
interface registerRequestData{
    confirmPassword: string,
    credential: string,
    credentialType: bigint,
    password: string,
    registerCode: string
  }
export function registerRequest(data:registerRequestData){
    return service({
        url:"/user/register",
        method:"POST",
        data
    })
}