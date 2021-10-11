let express=require("express")
let router=express.Router()
let zusers=require("../db/index.js")
router.get("/find",(req,res)=>{
    // 查询所有数据find(空),
    zusers.find().then((ok)=>{
        console.log(ok);
        res.send({msg:"这是一个查询接口",data:ok})
    })
})
module.exports=router