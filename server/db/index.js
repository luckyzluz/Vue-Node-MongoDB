let mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/zblogs",{ useNewUrlParser: true,useUnifiedTopology: true })

// 开始连接，并且监听是否成功
let db=mongoose.connection;
db.on("error",console.error.bind(console,"连接错误"))
db.on("open",()=>{
    console.log("连接ok")
})
// 设置数据库操作对象schema
let userSchema=mongoose.Schema({
    zname:String,
    zpwd:String,
    zzgallery:String
})
// 设置集合
let zuserdemo=mongoose.model("zusers",userSchema)

let zgallery=mongoose.model("zgallerys",userSchema)

module.exports=zuserdemo,zgallery