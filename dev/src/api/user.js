import service from "@/utils/service.js"

export function getlink(url,params){
  return new Promise((resolve)=>{
    service.request({
      url,
      method:"GET",
      params
    }).then((ok)=>{
      resolve(ok)
    })
  })
}
export function gettesting(url){
  return new Promise((resolve)=>{
    service.request({
        url,
        method:"GET"
    }).then((ok)=>{
        resolve(ok)
    })
})
}
export function postlink (url,data){
  return new Promise((resolve)=>{
      service.request({
          url,
          method:"POST",
          data
      }).then((ok)=>{
          resolve(ok)
      })
  })
}
// import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-element-admin/user/logout',
//     method: 'post'
//   })
// }
