var http = require('http');
var url = require('url');
var queryString = require('querystring');
var get = require('./httpGet');
var post = require('./httpPost');
http.createServer(function (request, response) {

    if (request.method == "GET"){

        get.doGET(request,response);

    } else if (request.method == "POST") {

        post.doPOST(request,response);

    }else {

        response.end();

    }

}).listen(8888,'127.0.0.1');






// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');