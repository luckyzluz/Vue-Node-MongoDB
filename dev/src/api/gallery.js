import service from "@/utils/service.js"

export function imgup(url,data){
    return new Promise((resolve)=>{
        service.request({
            url,
            method:"POST",
            // headers: {'Content-Type': 'multipart/form-data'},
            cache: false,
            processData: false,// 不处理数据
            contentType: false, // 不设置内容类型
            data
        }).then((ok)=>{
            resolve(ok)
        })
    })
}