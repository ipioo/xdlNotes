var index = 0;
var imgObj = ["./img/5dccac000001839c18720764.jpg","./img/5de5bcda00018dc018720764.jpg","./img/5dd1fe8800013d1818720764.jpg","./img/5dceaccf0001f22c18720764.jpg","./img/5dddeaa1000108af18720764.jpg","./img/5db0fcf40001ae9d18720764.jpg"];


/*计算下标*/
function Sub(num) {
    index+=num;
    if(index == -1){
        index = 5;
    }else if(index == 6){
        index = 0;
    }
    console.log(index);
    Priod(index);
}
function Priod(index) {
    $(".bannerimg").attr("src",imgObj[index]);
    $(".banner-anchor>span").removeClass("active");
    $(".banner-anchor>span:eq("+index+")").addClass("active");
}
function Period(){
    setInterval(function () {
        Sub(1);
    },2000);
}
$(".click>.left").click(function () {
    Sub(-1);
});
$(".click>.right").click(function () {
    Sub(6);
});
$(function () {
    // Period();
});
console.log($(".banner-anchor>span").get(0));
