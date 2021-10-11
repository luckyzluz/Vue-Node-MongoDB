let express=require("express")
let router=express.Router()
let jwt=require("jsonwebtoken")
// 图片上传插件
let multer=require("multer")

 // 图片上传模块.diskStorage({
  //   设置上传的资源路径信息(destination):
  //   设置资源的文件信息(filename):
  //   })

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

// 图片上传必须用post
router.post("/upload",upload.single("logo"),(req,res)=>{
        res.send({msg:"这是图片上传接口"})
})
module.exports=router