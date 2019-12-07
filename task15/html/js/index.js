
/*++++++++++++++++++++++++++++轮播图+++++++++++++++++++++++++++++*/
var index = 0;
// var num;
var imgObj = ["./img/5dccac000001839c18720764.jpg","./img/5de5bcda00018dc018720764.jpg","./img/5dd1fe8800013d1818720764.jpg","./img/5dceaccf0001f22c18720764.jpg","./img/5dddeaa1000108af18720764.jpg","./img/5db0fcf40001ae9d18720764.jpg"];
/*计算下标*/
function Sub(num) {
    index+=num;
    if(index < 0){
        index = 5;
    }else if(index > 5){
        index = 0;
    }
    // console.log(index);
    Priod(index);
    // index = 0;
}
/*设置属性*/
function Priod(index) {
    $(".bannerimg").attr("src",imgObj[index]);
    $(".banner-anchor>span").removeClass("active");
    $(".banner-anchor>span:eq("+index+")").addClass("active");
}
/*加载周期定时器*/
function Period(){
    setT = setInterval(function () {
        Sub(1);
    },2000);
}

/*鼠标移除事件-清空计时器*/
function over(){
    clearInterval(setT);
}
/*轮播图*/
//自动
Period();
//左右点击
$(".click>.left").click(function () {
    Sub(-1);
});
$(".click>.right").click(function () {
    Sub(1);
});
//下标点击
$(".banner-anchor span").click(function () {
    Priod($(this).index());
});
//
$(".bannerList").mouseout(function () {
    Period();
});
//清除周期
$(".bannerList").mouseover(function () {
    clearInterval(setT);
});

//目录左侧点击事件
$(".muluLeftList li").mouseover(function () {
    var index = $(this).index();
    console.log()
    $(".bannerLeftlist").removeClass("d-n");
    $(".bannerContent:eq("+index+")").removeClass("d-n");
});
$(".muluLeftList li").mouseout(function () {
    var index = $(this).index();
    $(".bannerLeftlist").addClass("d-n");
    $(".bannerContent:eq("+index+")").addClass("d-n");
});
$(".bannerContent").mouseover(function () {
    $(".bannerLeftlist").removeClass("d-n");
    $(this).removeClass("d-n");
});
$(".bannerContent").mouseout(function () {
    $(".bannerLeftlist").addClass("d-n");
    $(this).addClass("d-n");
});
//App 下载悬停事件
$("#appDown").mouseover(function () {
    $(".down").removeClass("d-n");
});
$("#appDown").mouseout(function () {
    $(".down").addClass("d-n");
});
//购物车事件
$("#shopping").mouseover(function () {
    $(".cart").removeClass("d-n");
});
$("#shopping").mouseout(function () {
    $(".cart").addClass("d-n");
});
/*++++++++++++++++++++++++++++监听返回顶部+++++++++++++++++++++++++++++*/
/*监听屏幕高度*/
$(window).scroll(function () {
    var windowHeight = $(window).height() * 0.4;
    if ($(window).scrollTop() < windowHeight){
        $("#black").stop().hide();
    }else{
        $("#black").stop().show();
    }
});




/*++++++++++++++++++++++++++++底部弹窗+++++++++++++++++++++++++++++*/
$(".fa-anchor-click").click(function () {
    $(".bottom-AD").removeAttr("href");
    $(".bottom-AD").addClass("d-n");
});
$(".footer-wechat").mouseover(function () {
    $(".footerQrcode").removeClass("d-n");
});
$(".footer-wechat").mouseout(function () {
    $(".footerQrcode").addClass("d-n");
})
/*++++++++++++++++++++++++++++右侧悬浮框+++++++++++++++++++++++++++++*/
$(".rightList li").mouseover(function () {
    var index =$(this).index() + 1;
    console.log(index);
    switch (index) {
        case 1:
            $(this).text("意见反馈");
            break;
        case 2:
            $(this).text("帮助中心");
            break;
        case 3:
            $(this).text("APP下载");
            $(".rightQrcode").removeClass("d-n");
            $("#qrcode").addClass("qrcode-app");
            break;
        case 4:
            $(this).text("官方微信");
            $(".rightQrcode").removeClass("d-n");
            $("#qrcode").addClass("qrcode-wechat");

            break;
        case 5:
            $(this).text("返回顶部");
            break;
        default:
            console.log("不存在！");
            break;

    }
});
$(".rightList li").mouseout(function () {
    var index =$(this).index() + 1;
    console.log(index);
    switch (index) {
        case 1:
            $(this).html("<i class=\"fa fa-info-circle fa-2x\"></i>");
            break;
        case 2:
            $(this).html("<i class=\"fa fa-question fa-2x\"></i>");
            break;
        case 3:
            $(this).html("<i class=\"fa fa-mobile fa-2x\"></i>");
            $(".rightQrcode").addClass("d-n");
            $("#qrcode").removeClass("qrcode-app");
            break;
        case 4:
            $(this).html("<i class=\"fa fa-wechat fa-2x\"></i>");
            $(".rightQrcode").addClass("d-n");
            $("#qrcode").removeClass("qrcode-wechat");

            break;
        case 5:
            $(this).html("<i class=\"fa fa-angle-up fa-2x\"></i>");
            break;
        default:
            console.log("不存在！");
            break;

    }
});

/*++++++++++++++++++++++++++++切换+++++++++++++++++++++++++++++*/
$(".ListcontentThree>.ListHeader .intro").click(function () {
    $(".ListcontentThree>.ListHeader .intro").removeClass("spanActive");
    $(this).addClass("spanActive")
    var index = $(this).index() - 1;
    $(".ListcontentThree>.ListContent .ThreeContentList").addClass("d-n");
    console.log(index);
    $(".ListcontentThree>.ListContent .ThreeContentList:eq("+index+")").removeClass("d-n")
});
$(".ListcontentFour>.ListHeader .intro").click(function () {
    $(".ListcontentFour>.ListHeader .intro").removeClass("spanActive");
    $(this).addClass("spanActive")
    var index = $(this).index() - 1;
    $(".ListcontentFour>.ListContent .FourContentList").addClass("d-n");
    console.log("four"+index);
    $(".ListcontentFour>.ListContent .FourContentList:eq("+index+")").removeClass("d-n")
});
/*输入框焦点事件*/
$(".searchIput").focus(function () {
    $(".searchLl").hide();
});
$(".searchIput").blur(function () {
    $(".searchLl").show();
});

//点击返回顶部
$("#black").click(function () {
    $('html , body').animate({scrollTop: 0},'slow');
});