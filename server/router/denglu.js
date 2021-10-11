let express=require("express");
let router=express.Router()
let coldemo=require("../db/index.js")
let crypto=require("crypto")
// 解析post请求体
let bodyParser=require("body-parser");
// 引用jsonwebtoken
let jwt=require("jsonwebtoken");

// 使用 开启解析
 let uE= bodyParser.urlencoded({extended:false})
// 需要把解析功能传入指定路由
router.post("/denglu",uE,(req,res)=>{
  

    // 接受前台的post数据   req.body.数据的key
    console.log(req.body.uname+"====="+req.body.upwd)
    // 加密
    let newupwd=crypto.createHash('md5').update(req.body.upwd).digest('hex');
    // 在数据库中开始查询
    coldemo.find({"uname":req.body.uname,"upwd":newupwd}).then((ok)=>{
        console.log(ok)
        // 没有查询出来的时候返回的是空数组
        // 查询出来了  就是查询成功的结果
        if(ok.length==0){
            // 查需不出来  就是登录失败
            res.send({msg:"登录失败",data:{loginid:0}})
        }else{
            // 查询出来了就是登录成功
            // Jsonwebtoken.sign(“你的那些登录信息的数据”,”密钥（你自己写一段乱码越短越好）”)
            // 在用户登录i成功之后生成一段token
            // 就是用户的登录成功信息
            let data={
                userok:true
            }
            // 密钥
            let mi="asdklfskdfljdfglikxcviugedfiwu"
           let token= jwt.sign(data,mi)
            res.send({msg:"登录成功",data:{loginid:1,token}})
        }
    })
})
module.exports=router