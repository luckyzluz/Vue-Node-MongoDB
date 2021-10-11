import axios from "axios"
// 创建axios 赋值给常量service 
const service = axios.create();

// 添加请求拦截器（Interceptors）
service.interceptors.request.use(function (config) {
    // 发送请求之前做写什么
    // 在拦截器中需要得到 token（在本地存储中） 给后台
    // console.log(config)
    if(window.localStorage.getItem("token")==null){
      return config;
    }else{
      // ---------------注意  这里起了xxx
      config.headers.xxx=window.localStorage.getItem("token")
      return config;
    }
    
    
  }, function (error) {
    // 请求错误的时候做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default service