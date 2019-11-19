var queryString = require('querystring');
//post处理方式

function doPOST(request,response){
    var formData = '';
    request.on('data',function (data) {
        formData += data;
    });
    request.on('end',function () {
        var Obj = queryString.parse(formData);
        console.log(Obj);
        response.end('nihao');
    });
}
exports.doPOST = doPOST;