// 使用方法   import url from "@/api/url.js"
let url="/api/"

export default {
    login:url+"zuser/find",
    register:url+"zuser/insert",
    checktoken:url+"zuser/check",
    imgup:url+"zupload/upload",
    imgce:url+"zupload/upload",
    listdata:url+"/home/listdata",
    deletedata:url+"/home/deletedata",
}