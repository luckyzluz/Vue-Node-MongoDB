let express=require("express")
let app=express()

// let register=require("./router/register.js")
// let login=require("./router/login.js")
// let home=require("./router/home.js")
// let zeng=require("./router/zeng.js")
// let shan=require("./router/shan.js")
// let gai=require("./router/gai.js")
// let cha=require("./router/cha.js")
// let checktoken=require("./router/checktoken.js")
// let picupload=require("./router/picupload.js")
let zupload=require("./router/zupload.js")
let zuser=require("./router/zuser.js")
// 后端解决跨域  node cros（暂未实现，哼）
// app.use("*",(req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    //  千万不要忘了  next()

//      next()
// })
app.use("/zuser",zuser)
app.use("/zupload",zupload)
// app.use("/register",register)
// app.use("/login",login)
// app.use("/home",home)
// app.use("/zeng",zeng)
// app.use("/shan",shan)
// app.use("/gai",gai)
// app.use("/cha",cha)
// app.use("/checktoken",checktoken)
// app.use("/picupload",picupload)


app.listen(3000)