import axios from 'axios'
const service = axios.create({
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8",
        "authentication":"2b5d7640af954456b07e0604d90dbb83"
    }
})
// 请求拦截
// service.interceptors.request.use((config)=>{
//     // config.headers = config.headers || {}
//     // if(localStorage.getItem('token')){
//     //     config.headers.token = localStorage.getItem('token') || ""//在请求的时候携带token
//     // }
//     console.log('cdsacasdxa')
//     return config
// })
// 响应拦截
// service.interceptors.response.use((res)=>{
//     const code:number = res.data.code
//     if (code != 200){//不等于200表示请求失败
//         return Promise.reject
//     }
//     console.log(res)
//     return res.data
// },(err)=>{
//     console.log(err)
// }
// )
// 返回service
export default service
