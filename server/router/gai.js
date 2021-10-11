let express=require("express")
let router=express.Router()
router.put("/updata",(req,res)=>{
    res.send({msg:"这是一个修改接口"})
})
module.exports=router