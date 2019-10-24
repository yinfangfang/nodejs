const userModule = require("../models/connectDB");
// var inf = {
//     userName:"dabai",
//     userPwd:"09876"
// }
// userModule.addUser(inf,function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     } else {
//         console.log("Res:" + res);
//     }
// })
// userModule.updateProductByWhere({"userName":"胖柴"},{"userName":"加菲"},function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     } else {
//         console.log("Res:" + res);
//     }
// })
// userModule.queryByWhere({"userName":"dabai"},function(err,res){
//     if (err) {
//         console.log("Error:" + err);
//     } else {
//         console.log("Res:" + res);
//     }
// })
// userModule.queryByPager(1,1,{},(err,results)=>{
//     console.log(results)
// })
userModule.deleteProductByWhere({"userName":"dabai"},function(err,res){
    if (err) {
        console.log("Error:" + err);
    } else {
        console.log("Res:" + res);
    }
})