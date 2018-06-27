import axios from 'axios'

const isDevelopment = process.env.NODE_ENV === 'development'
const devBaseUrl = 'https://www.easy-mock.com/mock/5a78059745c9a13f770d64c0/anything'
const prodBaseUrl = 'https://www.easy-mock.com/mock/5a78059745c9a13f770d64c0/anything'

// 实例化axios
const instance = axios.create({
    baseURL: isDevelopment ? devBaseUrl : prodBaseUrl,
    timeout: 20000,
})

// 响应拦截器
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config
}, (error) => {
    // Do something with request error
    return Promise.reject(error)
})

// 请求拦截器
instance.interceptors.response.use((res) => {
    // Do something with response data
    return res
}, (error) => {
    // Do something with response error
    Promise.reject(error)
})

const createAPI = (url, method, config) =>
    instance({
        url,
        method,
        ...config,
    })

export default createAPI
