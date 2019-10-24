const express = require("express");
const router = express.Router();
let formidable = require("formidable");

router.get('/', function(req, res, next) {
    // 登录界面，首先判断是否存有用户之前的信息
    let user = req.session.userInfo;
    // 如果存在，直接跳转主页，不存在，则渲染登录页面
    if(user){
        res.redirect('/');
    }else{
        res.render('login', {});
    }
});
// 登录页面发送数据到check,保存用户登录信息至session,并且跳转至主页
router.post("/check",(req,res)=>{
    console.log(req.body);
    let user = req.body;
    // 获取form中的用户信息，加上判断逻辑，再选择存储用户信息
    req.session.userInfo = user;
    res.redirect("/");
})
router.get('/out',(req,res)=>{
    req.session.userInfo = null;
    res.redirect('/login');
})
router.get('/register',(req,res)=>{
    res.render('register',{});
})
router.post('/upload',(req,res)=>{
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';		//设置编辑
    // 静态文件不经过路由
    form.uploadDir = 'public/files';	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req,(err,fields,files)=>{
        // 打印文件上传的地方的路径地址
        res.send(files.f1.path.substr(6))
    })
})



module.exports = router;