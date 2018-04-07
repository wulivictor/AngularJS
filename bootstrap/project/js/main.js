$(function () {
    //设置提示工具条
    $("[data-toggle='tooltip']").tooltip();

    //判断屏幕大小
    setting_slide_img();

    function setting_slide_img() {
        var small_broswer = window.innerWidth < 769;
        var list = $('#myCarousel .item');
        if (small_broswer) {
            list.each(function (index, ele) {
                var ele = $(ele);
                var img = document.createElement('img');
                $(img).attr('src', ele.attr('data-small-img'));
                ele.html('<img src="' + ele.attr('data-small-img') + '" alt="" />');
            })
        } else {
            list.each(function (index, ele) {
                //如果是大屏幕则用小盒子包裹大盒子的方式来居中
                var ele = $(ele);
                ele.html('');
                // $(ele).attr('data-big-img')
                ele.css("background-image", "url(" + ele.attr('data-big-img') + ")");
            })
        }
    }

    //处理resize事件
    $(window).resize(function () {
        setting_slide_img();
        scrollnav();
    });


    //新闻栏换标题
    $("#new .text-center").text($("#myTab li.active").data('title'));
    $("#myTab li").click(function () {
        $("#new .text-center").text($(this).data('title'))
    })


    //给推荐栏的ul设置宽度
    scrollnav();
    function scrollnav() {
        var li_lists = $("#buy ul li");
        var li_lengths = 0;
        li_lists.each(function (index, ele) {
            li_lengths = li_lengths + ele.offsetWidth;
        })
        if (window.innerWidth< li_lengths) {
            $("#buy ul").width(li_lengths);
        }
    }



    

})