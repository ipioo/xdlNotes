var net = require('net');
var clientList =[];
var server = net.createServer(function (socket) {
    clientList.push(socket);
    socket.write('连接成功');
    socket.on('data',function (data) {
        console.log(data.toString());
        broadcast(data);
    });
    socket.on('end',function () {
        socket.write('end!');
        clientList = [];
    });
});

function broadcast(data){
    for (var i = 0; i < clientList.length; i++) {
        clientList[i].write(data);
    }
}

server.listen(9999,'127.0.0.1');
