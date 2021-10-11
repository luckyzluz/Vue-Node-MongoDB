// 设置用户接口（登录、注册)
let express = require("express")
let router = express.Router()

let zuserdemo = require("../db/index.js")
// 引用crypto（加密数据）
let crypto = require("crypto")
// 引用jsonwebtoken（生成totken）
let jwt=require("jsonwebtoken");

// ---------------登录----------------------
// 解析post请求体
let bodyParser = require("body-parser");
// 使用 开启解析
let uE = bodyParser.urlencoded({ extended: false })
// 需要把解析功能传入指定路由
router.post("/find", uE, (req, res) => {
    // 接受前台的post数据   req.body.数据的key
    console.log(req.body.zname + "=====" + req.body.zpwd)
    // 加密
    let newzupwd = crypto.createHash('md5').update(req.body.zpwd).digest('hex');
    // 在数据库中开始查询
    zuserdemo.find({ "zname": req.body.zname, "zpwd": newzupwd }).then((ok) => {
        console.log(ok)
        // 没有查询出来的时候返回的是空数组
        // 查询出来了  就是查询成功的结果
        if (ok.length == 0) {
            // 查需不出来  就是登录失败
            res.send({ msg: "登录失败", data: { loginok: 0 } })
        } else {
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
            res.send({ msg: "登录成功", data: { loginok: 1,token } })

        }
    })
})

// -----------------注册---------------------
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

// --------------检查token------------------
router.get("/check",(req,res)=>{
    //   得到前台发送过来的token并且解密
    // console.log(req.headers)
    // 开始解密
      // 密钥
      if(req.headers.xxx != undefined){
          // 判断这个登录信息 把是否登陆过的结果告诉前台
        let mi="asdklfskdfljdfglikxcviugedfiwu"
        let tokentext=jwt.verify(req.headers.xxx,mi)
        // console.log(tokentext);
        if(tokentext.userok){
            // 用户登陆过
            res.send({msg:"判断用户登陆过的接口",data:{ok:1}})
        }else{
            res.send({msg:"判断用户登陆过的接口",data:{ok:0}})
        }
     
      }else{
        res.send({msg:"判断用户登陆过的接口",data:{ok:0}})
      }
    
    
    })

module.exports = router