let express=require("express");
let router=express.Router()
let coldemo=require("../db/index.js")
let crypto=require("crypto")

router.get("/zhuce",(req,res)=>{
    // 接收前台发送过来的get数据  
    // uname和upwd
    // req.query.你发送过来的key
    console.log(req.query.uname+"-----"+req.query.upwd)

    // 加密
    let newupwd=crypto.createHash('md5').update(req.query.upwd).digest('hex');
    // 把得到的数据插入数据库
    let usercol=new coldemo({
        uname:req.query.uname,
        upwd:newupwd
    })
    usercol.save().then(()=>{
        // 当存成功了返回1
        res.send({"msg":"注册成功",data:{loginok:1}})
    }).catch(()=>{
        res.send({"msg":"注册失败",data:{loginok:0}})
    })

 
})
module.exports=router