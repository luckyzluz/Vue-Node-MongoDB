let express=require("express")
let router=express.Router()
router.delete("/remove",(req,res)=>{
    res.send({msg:"这是一个删除接口"})
})
module.exports=router