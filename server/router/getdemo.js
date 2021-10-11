getlink('api/register/insert',{zname:this.ruleForm.username,zpwd:this.ruleForm.password}).then((ok)=>{
    console.log(ok);
})

// 设置注册接口
let express=require("express")
let router=express.Router()
let zuserdemo=require("../db/index.js")
let crypto=require("crypto")
router.get("/insert",(req,res)=>{
    console.log(req.query.zname+"-----"+req.query.zpwd)
    // req.query.前端发送来的key
    // 加密数据（密码）
    let newzupwd=crypto.createHash('md5').update(req.query.zpwd).digest('hex');
    // 1.确定新增的数据
    let zusers=new zuserdemo({
        zname: req.query.zname,
        zpwd: newzupwd
    })
    // node server.js
    // 2.开始新增
    zusers.save().then(()=>{
        // 注册成功即返回1
        res.send({msg:"注册成功",data:{registerok:1}})
    }).catch(()=>{
        res.send({msg:"注册失败",data:{registerok:0}})
    })
    
})
module.exports=router