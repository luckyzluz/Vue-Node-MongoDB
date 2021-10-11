//退出登录
/**
 * @params force: number  是否强制退出 1强制 0非强制
*/
import router from '../router/index.js';
import { Message } from 'element-ui';
import { reqUrl,isProd } from "./request.js";
import { login } from "./api.js";

// 退出单独拎出来处理是为了错误单独处理; 请求失败时token不需要刷新
export function logout(force = 0) {
    if(force == 0){
        login.logout.then(resp => {
            const res = resp.data
            if (res.flag == 1) toLogin() 
            else Message.error(res.msg + ' 退出失败！---' + res.code)
        }).catch(e => {
            const res = e.response || null
            if(res) Message.error(res.msg + '退出失败! ---' + res.code)
        })
    }else toLogin();
    
    function toLogin(){
        store.commit("user/CLEAR_INFO"); // 清除登录信息
        sessionStorage.clear(); // 清除vuex，我选择的是sessionStorage存储
        router.replace({name: 'login'})
    }
}
