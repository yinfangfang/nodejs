const WebSocket  = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
// 监听wss服务对象判断是否连接成功
wss.on("connection",function connection(ws){
    console.log("linked success");
    // 监听客户发送的数据包
    ws.on("message",function message(data){
        console.log(data);
        // 点对点发送
        // ws.send(data);

        //广播 data 转发所有连接成功的客户端
        wss.clients.forEach(function (c) {
            c.send(data);
        })
    })
})
console.log("websocket server is listening on 8080")