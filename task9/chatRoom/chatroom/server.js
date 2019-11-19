var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

function send404(response) {
    response.writeHead(404,{'content-Type':'text/plain'});
    response.write('抱歉,没有找到你的要的文件');
    response.end();
}

function  sendFile(response,filePath,fileContents) {
    response.writeHead(20




    0,{
        'content-Type':mime.getType(path.basename(filePath))
    });
    response.end(fileContents);
}

function serveStatic(response,cache,absPath) {
    if (cache[absPath]){
        sendFile(response,absPath,cache[absPath]);
    }else {
        fs.exists(absPath,function (exists) {
           if (exists) {
               fs.readFile(absPath,function (err,data) {
                   if (err){
                       send404(response);
                   }else {
                       cache[absPath] = data;
                       sendFile(response,absPath,data);
                   }
               });
           }else {
               send404(response);
           }
        });
    }
}

var server = http.createServer(function (request,response) {
    var filePath = false;

    if (request.url == '/'){
        filePath = 'public/index.html';
    }else {
        filePath = 'public' + request.url;
    }

    var absPath = './' + filePath;
    serveStatic(response,cache,absPath);
});
server.listen(3000,function () {
    console.log('Server liten on port 3000');
});
var chatServer = require('./lib/chat_server');
chatServer.listen(server);