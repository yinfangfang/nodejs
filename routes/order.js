var express = require("express");
var router = express.Router();
var orderModel = require('../models/orderModel');

router.get("/",(req,res)=>{
    res.render("order",{orders:orderModel.getOrders()});
});

module.exports = router;
