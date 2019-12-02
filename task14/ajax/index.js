$(function(){
    $("#taskForm").click(
        $.ajax({
            type : 'post',
            url : './',
            dataType : 'json',
            data : {
                "username" : $("#username").serialize(),
                "contentMessage" : $("#contentMessage").serialize(),
            },
            success : function(data) {
                // console.log(' 提交成功');
            },
            error : function(){
                // console.log(' 提交失败');
            }
        })
    );
})


