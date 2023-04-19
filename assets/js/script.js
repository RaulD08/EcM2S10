$(document).ready(function(){
    $("#text1").css("background-color","mediumorchid")
    $("#text2").css("background-color","coral")
    $("#text2").css("display","none")

    $("#text1").mouseenter(function(){
        $("#text2").show()
    })
    $("#text1").mouseleave(function(){
        $("#text2").hide()
    })
    $("#img").click(function(){
        $(this).css("width","100%")
    })
    $("#img").mouseleave(function(){
        $(this).css("width","20%")
    })
    $("#caja3").dblclick(function(){
        $(this).css("font-size","1.5rem")
    })

})