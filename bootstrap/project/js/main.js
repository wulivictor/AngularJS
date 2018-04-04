$(function () {
    //设置提示工具条
    $("[data-toggle='tooltip']").tooltip();

    //判断屏幕大小
    setting_slide_img();
    function setting_slide_img() {
        var small_broswer=window.innerWidth<769;
        var list=$('#myCarousel .item');
        if(small_broswer){
            list.each(function (index,ele) {
                var ele=$(ele);
                var img=document.createElement('img');
                $(img).attr('src',ele.attr('data-small-img'));
                ele.html('<img src="'+ele.attr('data-small-img')+'" alt="" />');
            })
        }else {
            list.each(function (index,ele) {
                //如果是大屏幕则用小盒子包裹大盒子的方式来居中
                var ele=$(ele);
                ele.html('');
                // $(ele).attr('data-big-img')
                ele.css("background-image","url("+ele.attr('data-big-img')+")");
            })
        }
    }
    //处理resize事件
    $(window).resize(function(){
        setting_slide_img();
    });


})