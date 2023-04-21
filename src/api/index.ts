import axios, { Axios } from 'axios'
const service = axios.create({
    baseURL:"localhost:8090",
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})
// 请求拦截
service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ""//在请求的时候携带token
    }
    return config
})
// 响应拦截
service.interceptors.response.use((res)=>{
    const code:number = res.data.code
    if (code != 200){//不等于200表示请求失败
        return Promise.reject
    }
    return res.data
},(err)=>{
    console.log(err)
}
)
// 返回service
export default service
