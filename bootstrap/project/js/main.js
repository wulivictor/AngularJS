$(function () {

    $("[data-toggle='tooltip']").tooltip();

    //判断屏幕大小
    var small_broswer=window.innerWidth<769;
    var list=$('#myCarousel .item');
    if(small_broswer){
        list.each(function (index,ele) {
            //如果是大屏幕则用小盒子包裹大盒子的方式来居中
            debugger;
            var ele=$(ele);
            var img=document.createElement('img');
            $(img).attr('src',ele.attr('data-small-img'));

            // ele.css('height',$(img).offsetHeight+"px");
            ele.append(img);
        })






    }else {
        list.each(function (index,ele) {
            //如果是大屏幕则用小盒子包裹大盒子的方式来居中
            var ele=$(ele);
            // $(ele).attr('data-big-img')
            ele.css("background-image","url("+ele.attr('data-big-img')+")");
        })


    }



})