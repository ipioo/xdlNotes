
/*++++++++++++++++++++++++++++轮播图+++++++++++++++++++++++++++++*/


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
$(".navbarRightList #0").mouseover(function () {
    $(".down").removeClass("d-n");
});
$(".navbarRightList #0").mouseout(function () {
    $(".down").addClass("d-n");
});
//购物车事件
$(".navbarRightList #1").mouseover(function () {
    $(".cart").removeClass("d-n");
});
$(".navbarRightList #1").mouseout(function () {
    $(".cart").addClass("d-n");
});

$(".cart").mouseover(function () {
    $(".cart").removeClass("d-n");
});
$(".cart").mouseout(function () {
    $(".cart").addClass("d-n");
});
$(".down").mouseover(function () {
    $(".down").removeClass("d-n");
});
$(".down").mouseout(function () {
    $(".down").addClass("d-n");
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