import axios from 'axios'



export function request(config) {
    // axios实例
    const instancel = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    // axios拦截器
    instancel.interceptors.request.use(config => {
        return config
    }, err => {
    })
    instancel.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })


    return instancel(config)

}