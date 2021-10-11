let express = require("express")
let router = express.Router()
let jwt = require("jsonwebtoken")
// 图片上传插件
let multer = require("multer")

// -----------图片上传------------------------
// 图片上传模块.diskStorage({
//   设置上传的资源路径信息(destination):
//   设置资源的文件信息(filename):
//   })
// let upimg = multer.diskStorage({
//     destination:(req,file,cd)=>{

//       cd(null,"./imgup")
//     },

//     filename:(req,file,cd)=>{
//      let time= new Date().getTime()
//      let filetype=file.originalname.split(".")[1]
//     //  定义随机数据 在定义个随机内容
//       cd(null,`${time}.${filetype}`)
//       console.log(req.file);
//     }
//   })

//   let upload=multer({
//     storage:upimg
//   })

// // 图片上传必须用post
// router.post("/upload",upload.single("logo"),(req,res)=>{
//         res.send({msg:"这是图片上传接口"})
// })
// -----------------------

var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, './static/uploads/images')

    }, filename: function (req, file, cb) {

        var exts = file.originalname.split('.')

        var ext = exts[exts.length - 1]

        var tmpname = (new Date()).getTime() + parseInt(Math.random() * 9999)

        cb(null, `${tmpname}.${ext}`)

    }

})


var upload = multer({

    storage: storage

})


router.post('/upload', upload.single('hehe'), function (req, res) {

    var { size, mimetype, path } = req.file
    console.log(req.file);

    var types = ['jpg', 'jpeg', 'png', 'gif']//运行上传的类型

    var tmpType = mimetype.split('/')[1]

    if (size > 5000000) {

        return res.send({ err_code: -1, message: '尺寸过大' })

    } else if (types.indexOf(tmpType) == -1) {

        return res.send({ err_code: -2, message: '类型错误' })

    } else {

        res.status(200).json({

            err_code: 0,

            message: 'ok',

            img: req.file.path

        })

    }

})

router.post('/article', function (req, res) {

    var body = req.body

    new Article(body).save(function (err, data) {

        if (err) {

            res.status(500).json({

                err_code: 500,

                message: 'ok'

            })

        }

        res.status(200).json({

            err_code: 0,

            message: 'ok'

        })

    })

})
module.exports = router