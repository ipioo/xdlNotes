### Jquery	

> 1. onload的使用
>
>    ```javascript
>    $(function(){
>    
>    });
>    ```
>    
> 3. 变量名
>
>    ```javascript
>    var $Obj = $('.class/#id/标签'); //选择标签
>    
>    $('.class/#id/标签').fadeIn  //使用
>    ```
>    
> 3. DOM 对象与 Jquery 对象相互转换
>
>    >1. DOM 转 Jquery
>    >
>    >   ```javascript
>    >   var $obj = $(dom 对象);
>    >   ```
>    >
>    >2.  Jquery 转  DOM
>    >
>    >   ```javascript
>    >   var $obj = $obj.get(下标);
>    >   ```
>    >
>    > 
>    
> 5. 筛选常用函数
>
>    >1. 基本选择器
>    >
>    >```javascript
>    >first;last;eq;gt;lt;event;odd;
>    >
>    >//实例
>    >	$("p:first").css("")
>    >```
>    >
>    >2. 排除筛选择器
>    >
>    >```javascript
>    >//格式:
>    >// 选择器1:not(选择器2);
>    >//实例:
>    >
>    >$("p:not(p:contains('马飞')").fadeOut(1000);
>    >```
>    >
>    >3. 内容筛选择器
>    >
>    >```javascript
>    >//格式
>    >// :contains("包含的内容");
>    >//实例:
>    >
>    >$("p:contains('马飞')").css("color","red");
>    >
>    >```
>    >
>    >4. 可见性筛选择器
>    >
>    >```javascript
>    >//可见 
>    >	$("div:visible");
>    >//不可见
>    >	$("div:hidden");
>    >```
>    >
>    >5. 表单筛选择器
>    >
>    >```javascript
>    >//格式 input->type
>    >		//所有type==pass
>    >	$(":pass").css("color","red");
>    >
>    >		//匹配 type == pass
>    >	$(".div2>input:pass").css("color","red");
>    >```
>    >
>    >6. 属性筛选选择器
>    >
>    >```javascript
>    >//格式
>    >//所有
>    >$("img[title]").css("color","red");
>    >```
>    >
>
> 6. Jquery 修改元素的属性   
>
>    >```javascript
>    >setInterval(function(){},1000);
>    >```
>    
>    >1. 普通属性
>    >
>    >  ```javascript
>    >  //Js:
>    >  	取出属性:  DOM 对象:属性名;
>    >    设置属性:	 DOM 对象.属性名 = 值;
>    >  //jquery
>    >  	格式一: 设置单个属性-用于一次操作
>    >  		取出属性:  var 属性值 = $Obj.attr("属性名");
>    >    	设置属性:	 $Obj.attr("属性名","属性值");
>    >  	格式二: 一次设置多个属性
>    >    	$Obj.attr(对象);
>    >  			//数组或者 JSON
>    >  		实例:
>    >  				var x1= new Object();
>    >  				x1.src = "./img/img.jpg";
>    >  				x1.style = "width:50px";
>    >  				$img.attr(x1);
>    >  				//或者
>    >  				$img.attr({"src":"./img/img.jpg","style":"width:50px"})
>    >  ```
>    > 
>    >1. 特殊属性的修改  
>    >
>    >   >1. Class 属性
>    >   >
>    >   >   ```javascript
>    >   >   //格式
>    >   >   	-添加 Class
>    >   >     	$Obj.addClass("值");
>    >   >     -删除 Class
>    >   >     	$Obj.removeClass("值");
>    >   >     -替换 Class
>    >   >     	$Obj.toggleClass("值");
>    >   >   ```
>    >   >
>    >   >2. value 属性
>    >   >
>    >   >   ```javascript
>    >   >   //格式1 - 使用 html 函数;
>    >   >   	- 设置 value
>    >   >   		$Obj.val(值);
>    >   >   	- 获取 value
>    >   >     	$Obj = val();
>    >   >   //格式2 - 使用 text 函数;
>    >   >   	- 设置 value
>    >   >   		$Obj.text(值);
>    >   >   	- 获取 value
>    >   >     	$Obj = text();
>    >   >   ***///
>    >   >   常见面试题:
>    >   >   		HTML 函数能获取到标签,text 函数只能获取到内容
>    >   >   ***///
>    >   >   ```
>    >   >
>    
> 6. 显示隐藏函数
>
>    ```javascript
>    - 基本显示隐藏
>    	- 显示 : $Obj.show();
>    	- 隐藏 : $Obj.hide();
>    	- 切换 : $Obj.toggle();
>    - 左上角折叠淡入淡出
>    	- 显示 : $Obj.show(毫秒数);
>    	- 隐藏 : $Obj.hide(毫秒数);
>    	- 切换 : $Obj.toggle(毫秒数);
>    - 上下折叠
>    	- 显示 : $Obj.slideDown();
>    	- 隐藏 : $Obj.slideUp();
>    	- 切换 : $Obj.slideToggle();
>    - 淡入淡出
>    	- 淡入 : $Obj.fadeIn;   
>    	-	淡出 : $Obj.fadeOut;
>    
>    ```
>
> 7. 动画函数
>
>    ```javascript
>    //格式
>    	$Obj.animate(style,time,[function]);
>    		-	style		:对象参数,动画执行完毕时的元素样式;
>    		-	time		:从当前样式过渡到目标样式 毫秒时长;
>        -	function: 可选参数,动画执行完毕时的事件监听函数;
>    ```
>
> 8. Jquery 事件
>
>    >1. 事件的绑定与解绑
>    >
>    >   ```javascript
>    >   //格式
>    >   	- 绑定事件 : (一个元素可以绑定多个同类事件)
>    >   		$Obj.bind("事件类型",function);
>    >   	- 解绑事件 : (一次解绑所有事件);
>    >   		$Obj.unbind("事件类型");
>    >   	-	模拟出发事件 
>    >   		$Obj.trigger("事件类型");
>    >   
>    >   ***///
>    >     事件类型: click
>    >     焦点事件: blur
>    >   ```
>    >
>    >2. 事件函数
>    >
>    >   ```javascript
>    >   //格式
>    >   	$Obj.事件类型(function(){
>    >       
>    >     });
>    >   ```
>    >
>    >   
>    
> 9. 文档函数
>
>   >1. 文档查找函数
>   >
>   >   ```javascript
>   >    根据一个已经存在的 Jquery 对象,查找与其相关的其他 Jquery 对象
>   >    //格式
>   >   
>   >    - 查找子元素 
>   >    	$Obj.children("选择器");
>   >    - 查找后代元素 
>   >    	$Obj.find("选择器");
>   >    - 查找下一个兄弟元素 
>   >    	$Obj.next();
>   >    - 查找上一个兄弟元素 
>   >    	$Obj.prev();
>   >    - 查找父级元素 
>   >    	$Obj.parent();
>   >    - 查找后代元素 
>   >    	$Obj.parents("选择器");
>   >   ```
>   >
>   >2. 文档处理元素
>   >
>   >    ```javascript
>   >     - 创建元素
>   >     	var $Obj = $("html字符串");
>   >     - 添加元素
>   >     	-向父元素内部追加子元素
>   >           $父元素.append($新元素);
>   >     	-向父元素内部前置子元素
>   >       		$父元素.prepend($新元素);
>   >     	-向元素后面添加兄弟元素
>   >           $父元素.after($新元素);
>   >     	-向元素前面面添加兄弟元素
>   >           $父元素.before($新元素);
>   >     - 删除元素
>   >     		$Obj.remove();
>   >     - 清空元素
>   >     		$Obj.html(""); 
>   >     		//或者 
>   >     		$Obj.remove();
>   >     - 克隆元素
>   >     	- 忽略事件 克隆
>   >       	var $xin对象 = $Obj.clone();
>   >       - 忽略事件 克隆
>   >        	var $xin对象 = $Obj.clone(true);
>   >    ```
>   >
>   
> 10. Jquery插件
>
>    ```javascript
>    //1. 二维码
>    
>    	引入 Jquery
>      引入 插件 Jquery.qrcode.js
>    //2.layer
>    	引入 Jquery
>      引入 插件 layer.js
>    ```
>
> 11. Jquery后补笔记
>
>    >1. 实现返回顶部效果，首先需要监听页面的scroll事件，其次才是获取到页面当前的滚动高度
>    >
>    >   $(window).scrollTop();
>    >
>    >
>    >```javascript
>    >$(window).scrollTop()
>    >
>    >//实例
>    >$(window).scroll(function () {
>    >   if ($(window).scrollTop() > 300){
>    >       $(".nav").stop().hide();
>    >   }else{
>    >       $(".nav").stop().show();
>    >   }
>    >});
>    >
>    >//
>    >jquery获取页面元素的一些边界值（宽，高，滚动高度......）总结：
>    >1.$(window).height();           浏览器可是区域的高度
>    >2.$(window).width();            浏览器可视区域的宽度
>    >3.$(document).height();        获取文档文档的高度
>    >4.$(document).width();         获取文档文档的宽度
>    >5.$(body,html).height();　　　　获取文档body的高度
>    >6.$(body,html).width();        获取文档body的宽度
>    >7.$(document).scrollTop();     获取滚动条到顶部的垂直高度 
>    >8.$(document).scrollLeft();    获取滚动条到左边的垂直宽度 
>    >9.$(obj).width();              获取或设置元素的宽度
>    >10.$(obj).height();            获取或设置元素的高度
>    >11.obj.offset().top;           某个元素的上边界到body最顶部的距离
>    >12.obj.offset().left;          某个元素的左边界到body最左边的距离
>    >```
>    >
>    >2. 轮播图：
>    >
>    >   ```javascript
>    >   var index = 0;
>    >   // var num;
>    >   var imgObj = ["./img/5dccac000001839c18720764.jpg","./img/5de5bcda00018dc018720764.jpg","./img/5dd1fe8800013d1818720764.jpg","./img/5dceaccf0001f22c18720764.jpg","./img/5dddeaa1000108af18720764.jpg","./img/5db0fcf40001ae9d18720764.jpg"];
>    >   /*计算下标*/
>    >   function Sub(num) {
>    >       index+=num;
>    >       if(index < 0){
>    >           index = 5;
>    >       }else if(index > 5){
>    >           index = 0;
>    >       }
>    >       // console.log(index);
>    >       Priod(index);
>    >       // index = 0;
>    >   }
>    >   function Priod(index) {
>    >       $(".bannerimg").attr("src",imgObj[index]);
>    >       $(".banner-anchor>span").removeClass("active");
>    >       $(".banner-anchor>span:eq("+index+")").addClass("active");
>    >   }
>    >   function Period(){
>    >       setT = setInterval(function () {
>    >           Sub(1);
>    >       },2000);
>    >   }
>    >   function out(){
>    >       setT=setInterval(function(){
>    >           Sub(1);
>    >       }, 2000)
>    >   }
>    >   function over(){
>    >       clearInterval(setT);
>    >   }
>    >   $(function () {
>    >       Period();
>    >   
>    >   });
>    >   ```
>    >
>    >   3. 
>    >
>    >