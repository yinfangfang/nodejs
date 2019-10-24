
var express = require('express');
var router = express.Router();
const userModule = require("../models/connectDB");

/* GET home page. */
// router.get('/', function(req, res) {
//     res.render('order', { title: '添加了一个商品页' });
// });
// router.get('/list', function(req, res) {
//     res.jsonp({
//         mes:"hello"
//     })
// });

// 连接postMan接口
// router.post("/add",(req,res)=>{
//     //pascal cemeral
//     let item = req.body || {}
//     userModule.addUser(item,(err,results)=>{
//         res.json(results)
//     })
// });
router.get("/list",(req,res)=>{
    //pageIndex ?pid=1&size=1&title=
    let query = req.query || {}
    let where = {userName:query.userName}
    userModule.queryByPager(query.pid,10,where,(err,results)=>{
        res.json(results)
    })
})

module.exports = router;