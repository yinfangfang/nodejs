const mongoose = require("mongoose");

// 通过mongoose连接mongodb库 端口号27017
mongoose.connect("mongodb://127.0.0.1:27017/user",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// 监听连接信息
mongoose.connection.on("connected",function(){
    console.log("Mongodb connected successfully")
});
mongoose.connection.on("error",function(){
    console.log("Mongoose connection error")
});

// 操作数据库
// 定义映射mongodb的mongoose
var Schema = mongoose.Schema;
// 映射的mongoose库的信息
var userScheme = new Schema({
    userName:{type:String},
    userPwd:{type:Number}
})

// 与数据库对应集合绑定
var userModule = mongoose.model("information",userScheme);

// 对映射的集合进行操作
// 增加记录
// let user = new userModule({
//     userName:"加菲",
//     userPwd:123456
// });
// user.save(function (err, res){
//     if(err){
//         console.log("Error:" + err);
//     }else{
//         console.log("Res:" + res);
//     }
// });
// 更新记录
// var wherestr = {"userName":"加菲"};
// var updatestr = {"userName":"胖柴"};
// userModule.updateOne(wherestr,updatestr,function (err, res){
//     if(err){
//         console.log("Error:" + err);
//     }else{
//         console.log("Res:" + res);
//     }
// });
// 查询
// userModule.find({"userName":"lemon"},function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     } else {
//         console.log("Res:" + res);
//     }
// })
// 删除
// userModule.deleteOne({"userName":"xiaoyu"},function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     } else {
//         console.log("Res:" + res);
//     }
// })
// 封装
module.exports = {
    // 增加记录
    addUser(inf,cb){
        let user = new userModule(inf);
        user.save(cb);
    },
    // 更新记录
    updateProductByWhere(where,setObj,cb){
        userModule.updateOne(where,{$set:setObj},cb)
    },
    // 根据条件查询
    queryByWhere(where,cb){
        userModule.find(where).exec(cb)
    },
    // 分页查询
    queryByPager(pageIndex=0,pageSize=10,where,cb){
        userModule.find(where).skip(pageIndex *pageSize).limit(pageSize).exec(cb)
    },
    // 删除记录
    deleteProductByWhere(where,cb){
        userModule.deleteOne(where,cb)
    }
}