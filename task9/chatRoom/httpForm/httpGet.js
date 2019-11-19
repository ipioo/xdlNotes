//get处理方式
var url = require('url');
var queryString = require('querystring');

function doGET(request,response){
    var Obj = queryString.parse(url.parse(request.url).query);
    console.log(Obj);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html>');
    response.write('<head>');
    response.write('<title>测试</title>');
    response.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
    response.write('</head>');
    response.write('<body>');
    response.write('<form method="POST" action=""> ');
    response.write('username:<input  name="username" value="ipioo">');
    response.write('password:<input name="password" type="password" value="123456">');
    response.write('<input type="submit" value="提交">' );
    response.write('</form>');
    response.write('</body>');
    response.write('</html>');
    // 发送响应数据 "Hello World"
    response.end();
}
exports.doGET = doGET;