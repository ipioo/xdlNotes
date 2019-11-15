function strChar(solid = false,width,height,str,j) {
    var charStr = " " + str;
    var charStrs = "";
    if (solid) {
        for (var i = 0; i <= width-1; i++){
            charStrs = charStrs + charStr;
        }
    }else {
        if (j == 0 || j == height-1){
            for (var i = 0; i <= width-1; i++){
                charStrs = charStrs + charStr;
            }
        }else {
            charStrs = charStr;
            for (var i = 0; i <= width-3; i++){
                charStrs = charStrs + "  ";
            }
            charStrs = charStrs + charStr
        }
    }
    return charStrs
}

function si(solid,width,height,str,) {
    for (var j = 0; j < height; j++) {
        console.log(strChar(solid,width,height,str,j))
    }
}

function san(solid,height,str){
    for (var j = 0; j < height; j++) {
        console.log(sanstrChar(solid,j+1,height,str))
    }
}

function sanstrChar(solid = false,height,height1,str) {
    var charStr = " " + str;
    var charStrs = "";
    if (solid) {
        for (var i = 0; i <= height-1; i++){
            charStrs += charStr;
        }
    }else {
        if (height < 3 || height == height1){
            for (var i = 0; i <= height-1; i++){
                charStrs += charStr;
            }
        }else {
            charStrs = charStr;
            for (var i = 0; i <= height-3; i++){
                charStrs = charStrs + "  ";
            }
            charStrs = charStrs + charStr

        }

    }

    return charStrs;
}

function f(solid = false,line,i,str) {
    var charstr = "";
    if (i <= (line - 1)/2) {
        for (var j = 1; j < (line- 1)/2 + 1 - i; j++) {
            charstr =  charstr + "  ";
        }
        for (var l = 0; l < 2 * i + 1; l++) {
            if (solid || l == 0 || l == 2 * i ) {
                charstr =  charstr + " " + str;
            }else{
                charstr =  charstr + "  ";
            }

        }
    } else {
        for (var j = 1; j <= i - (line - 1)/2; j++) {
            charstr =  charstr + "  ";
        }
        for (var l = (line - i) * 2 - 1; l > 0; l--) {

            if (solid || l == 1 || l == 2 * (line -i)-1){
                charstr =  charstr + " " + str;
            } else {
                charstr =  charstr + "  ";
            }

        }
    }
    return  charstr;
}

function ling(solid,line,str) {
    for(var i=0;i<2*line-1;i++) {
        console.log(f(solid,2*line-1,i,str));
    }
}


function tiChar(solid = false,line,i,str,width) {
    var charstr = "";

    for (var j = 1; j < (line- 1)/2 + 1 - i; j++) {
        charstr =  charstr + "  ";
    }
    for (var l = 0; l < 2 * i + width; l++) {

        if (solid || l == 0 || l == 2 * i + width -1 || i == 0 || i == (line + 1)/2 - 1) {
            charstr =  charstr + " " + str;
        }else{
            charstr =  charstr + "  ";
        }

    }
    return  charstr;
}

function ti(solid,line,width,str) {
    for(var i=0;i<line;i++) {
        console.log(tiChar(solid,2*line-1,i,str,width));
    }
}

function  hui(wai,nei,str) {
    if (nei%2 != 0 || wai%2 != 0 || nei < 3 || wai-nei < 4 ){
        console.log("不满足条件");
        return false;
    }
    for (var i = 0; i < wai; i++){
        console.log(huiChar(wai,nei,str,i));
    }
}

function huiChar(wai,nei,str,j){
    var huistr = "";
    for (var i = 0; i < wai; i++){
        if (i == 0 || i == wai-1 || j == 0 || j == wai - 1 || (j > (wai - nei)/2 -1 && j < (wai - nei)/2 +nei) && ((i >= (wai - nei)/2  && i <= (wai - nei)/2 +nei - 1) && (j >= (wai - nei)/2  &&  j <= (wai - nei)/2 +nei - 1) ) ){
            if (j > (wai - nei)/2 && j < (wai - nei)/2 +nei-1 && i > (wai - nei)/2  && i < (wai - nei)/2 +nei -1){
                huistr+= "  ";
            }else{
                huistr+= " " + str;
            }
        } else {
            huistr+= "  ";
        }

    }
    return huistr;
}

si(false,5,5, 1,"0");
console.log("\n");
si(true,5,5, 1,"0");
console.log("\n");
san(true,7, 1,"0");
console.log("\n");
san(false,9, 1,"0");
console.log("\n");
ling(false,5,"5");
console.log("\n");
ling(true,5,"5");
console.log("\n");
ti(true,6, 2,"5");
console.log("\n");
ti(false,6,2,"5");
console.log("\n");
hui(10 ,6,"+");
console.log("\n");



