import axios from 'axios' //导入axios

export function request(config) {
  console.log(config);
  config.method,
    config.url,
    config.data
  //创建实例
  const instance = axios.create({
    //这里设置axios配置
    baseURL: 'https://www.liulongbin.top:8888/api/private/v1',
    timeout: 5000,
    withcredentials: true,
    headers: {
      'content-Type': 'application/x-www-form-urlencoded'
    }
  })

  // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  //请求拦截
  instance.interceptors.request.use(config => {
    //操作后返回出去
    return config
  }, err => {})

  //响应拦截
  instance.interceptors.response.use(res => {
    //操作后返回出去
    return res.data
  }, err => {})

  //发送真正的网络请求
  return instance(config)
}