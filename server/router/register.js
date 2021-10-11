// 设置注册接口
let express=require("express")
let router=express.Router()
let zuserdemo=require("../db/index.js")
let crypto=require("crypto")

// 解析post请求体
let bodyParser = require("body-parser");
// 使用 开启解析
let uE = bodyParser.urlencoded({ extended: false })
// 需要把解析功能传入指定路由

router.post("/insert",uE,(req,res)=>{
    console.log(req.body.zname+"-----"+req.body.zpwd)
    // req.query.前端发送来的key
    // 加密数据（密码）
    let newzupwd=crypto.createHash('md5').update(req.body.zpwd).digest('hex');
    // 1.确定新增的数据
    let zusers=new zuserdemo({
        zname: req.body.zname,
        zpwd: newzupwd
    })
    // node server.js
    // 2.开始新增
    zusers.save().then(()=>{
        // 注册成功即返回1
        res.send({msg:"注册成功",data:{registerok:1}})
    }).catch(()=>{
        res.send({msg:"注册失败",data:{registerok:0}})
    })
    
})
module.exports=router