
$(function () {
    $("button").click(function(){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "./" ,
            data: $('form').serialize(),
            success: function (result) {
                if (result.resultCode == 200) {
                    alert("SUCCESS");
                };
            },
            error : function() {
                alert('ERROR');
            }
        });
    });
});




