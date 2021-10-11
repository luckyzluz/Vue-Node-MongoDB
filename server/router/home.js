let express=require("express");
let router=express.Router()
let jwt=require("jsonwebtoken")

let multer=require("multer")
let coldemo=require("../db/index.js")

router.get("/loginok",(req,res)=>{
//   得到前台发送过来的token并且解密
console.log(req.headers.xxx)
// 开始解密
  // 密钥


  if(req.headers.xxx!=undefined){
    //   判断这个登录信息 把是否登陆过的结果告诉前台
    let mi="asdklfskdfljdfglikxcviugedfiwu"
    let tokentext=jwt.verify(req.headers.xxx,mi)
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



  // 下面的内容是写在哪里？是路由内还是路由外？
  // 图片上传模块.diskStorage({
  //   设置上传的资源路径信息(destination):
  //   设置资源的文件信息(filename):
  //   })
  //  let upimg= multer.diskStorage({
let upimg = multer.diskStorage({
    destination:(req,file,cd)=>{

      cd(null,"./imgup")
    },

    filename:(req,file,cd)=>{
     let time= new Date().getTime()
     let filetype=file.originalname.split(".")[1]
    //  定义随机数据 在定义个随机内容

      cd(null,`${time}.${filetype}`)
    }
  })

  let upload=multer({
    storage:upimg
  })


// 图片上传接口
// 图片上传必须post
router.post("/img",upload.single("logo"),(req,res)=>{


  res.send({msg:"我是图片上传接口"})
})


router.get("/listdata",(req,res)=>{
  let zong=0
  coldemo.find().then((ok)=>{
   zong=ok.length;
      // 查询
    coldemo.find().skip(0).limit(2).then((ok)=>{
      console.log(ok)
      res.send({msg:"列表数据接口",data:{ok,zong}})
    })
  })
    
})


// 首页列表删除
router.delete("/deletedata",(req,res)=>{
  console.log(req.query._id)
  // 开始删除
  coldemo.remove({"_id":req.query._id}).then((ok)=>{


    coldemo.find().then((ok)=>{
      console.log(ok)
      res.send({msg:"列表删除成功返回的数据接口",data:ok})
    })

  })
  
})
// 首页列表修改
router.put("/putdata",(req,res)=>{
  console.log(req.query._id+"----"+req.query.upwd)

  coldemo.update({"_id":req.query._id},{$set:{"uname":req.query.uname,"upwd":req.query.upwd}}).then((ok)=>{
    console.log(ok)
  })

})

// 分页的接口
router.put("/pagedata",(req,res)=>{
  console.log(req.query.pagenum)
  let num =(req.query.pagenum-1)*2

  coldemo.find().skip(num).limit(2).then((ok)=>{
    console.log(ok)
    res.send({msg:"分页列表数据接口",data:{ok}})
  })

})
module.exports=router