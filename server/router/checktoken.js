let express=require("express");
let router=express.Router()
let jwt=require("jsonwebtoken")


router.get("/check",(req,res)=>{
//   得到前台发送过来的token并且解密
console.log(req.headers)
// 开始解密
  // 密钥
  if(req.headers.xxx != undefined){
      // 判断这个登录信息 把是否登陆过的结果告诉前台
    let mi="asdklfskdfljdfglikxcviugedfiwu"
    let tokentext=jwt.verify(req.headers.xxx,mi)
    console.log(tokentext);
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
module.exports=router