var fs = require("fs");

fs.readFile('inputs.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");


