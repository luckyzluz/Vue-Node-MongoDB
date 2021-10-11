//封装操作localstorage本地存储的方法
 
var storage = {
 
    //存储
    set(key, value) {
        window.localStorage.setItem(key, value);
    },
    //取出数据
    get(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },
    // 删除数据
     remove(key) {
        window.localStorage.removeItem(key);
    }
 
}
 
// 暴露给外部访问
export default storage;
 
 