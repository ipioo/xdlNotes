
function strChar(Num,str) {
    var charStr = " " + str;
    var charStrs = str;
    for (var i = 0; i < Num-1; i++){
        charStrs = charStrs + charStr;
    }
    return charStrs
}

function si(width,height,str,) {
    for (var j = 0; j < height; j++) {
        console.log(strChar(width,str))
    }
}

function san(height,str){
    for (var j = 0; j < height; j++) {
        console.log(strChar(j+1,str))
    }
}


si(5,5, "0");
console.log("\n");
san(5, "0");
console.log("\n");
