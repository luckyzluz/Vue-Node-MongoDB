// API接口汇总
// import instance from './request.js';
export let user = {
  userGet(params = {}){ // params为查询参数 page, name 等等
	return instance.get(`/user/`, { params })
 },
  userAdd(data){
    return instance.post('/user/',data)
  },
}
export const login = {
	login(){
		return instance.delete('/login/')
	}
}
