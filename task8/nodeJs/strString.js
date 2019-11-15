var test = "abcdef@qq.com@qq.com@qq.com@qq.com@qq.com";
var test1 = "cde";
var testArr = [1,2,3,4,5,6,7,8,9];
function strLength(str) {
    var str_arry = [];
    var str_length = 0;
    for (var i = 0;true;i++){
        if (str[i] == undefined) {
            break;
        }
            str_length++;
    }
    return str_length;
}
console.log("字符串数组长度>strLength:" + strLength(test));
function strToString(arry) {
    var str_toString = "";
    for (var i = 0;i < strLength(testArr);i++){
        str_toString += arry[i];
    }
    return str_toString;
}
console.log("数组转为字符串>strToString:" + strToString(testArr));

function str_splist(string,str) {
    var str_arry = [];
    var z = 0;
    var text = "";
    for (var i = 0;i<strLength(test)+1;i++){

        if (string[i] == str) {
            str_arry[z] = text;
            text ="";
            z++;
        }else if (string[i] == undefined) {
            str_arry[z] = text;
        }else {
            text += string[i];
        }
    }
    return str_arry;
}

console.log("分割字符串>str_splist:" + str_splist(test,"@"));

function str_strPos(str,str1) {
    var num = "";
    for (var i = 0 ;i < strLength(str);i++){
        if (str[i] == str1[0]) {
            for (var z = 1;z < strLength(str1);z++){
                if (str1[z] != str[i+z]){
                    break
                } else{
                    num = i;
                }
            }
            if (num) break;
        }
    }
    return num;
}
console.log("字符串搜索>str_strPos:" + str_strPos(test,test1));

function str_subStr(string,min,num,str = null) {
    var substr = "";
    for (var i = 0 ; i <strLength(string); i++) {
        if (i > min && i <= min + num) {
            substr += string[i];
        }
    }
    return substr;
}
console.log("字符串截取>str_subStr:" + str_subStr(test,5,5));