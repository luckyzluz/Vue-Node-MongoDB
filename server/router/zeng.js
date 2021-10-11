let express=require("express")
let router=express.Router()
let zusers=require("../db/index.js")
router.post("/insert",(req,res)=>{
    // 1.确定新增的数据
    let demouser=new zusers({
        username:"admin1",
        password:"1234561"
    })
    // 2.开始新增
    demouser.save().then((ok)=>{
        console.log(ok);
    })
    res.send({msg:"这是一个新增接口"})
})
module.exports=router