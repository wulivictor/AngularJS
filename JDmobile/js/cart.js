$(function () {

    //绑定按钮事件
    $('.alert-box button').on('click',function () {

        $('.window-alert').hide();
    })



    //单个按钮点击 效果
    function check(btn) {
        var val=btn.attr("checked");
        if (val == undefined) {
            btn.attr("checked", "");
        } else{
            btn.removeAttr("checked");
        }
    }
    //标题按钮点击效果
    $('.jd-shop-title .jd-check').on('click',function () {
        var sons=$(this).parent().parent().siblings().children().children();
        check($(this));
        check(sons);
    })
    //底部复选框按钮的点击
    $('.totalsum .jd-check').on('click',function () {
        check($('.jd-check'));
    })

    //店铺里的复选框都满了，就把标题栏的点上
    $('.jd-shop-content .jd-check').on('click',function () {
        check($(this));
        var sibling=$(this).parent().parent().siblings();
        var content=$('.jd-shop-content .jd-check');
        var checks=sibling.find(content);
        var flag=true;
        checks.each(function (index,ele) {
            var val= $(ele).attr('checked');
            if (val == undefined) {
                flag=false;
            }
        })
        if(flag){
            var content=$('.jd-check');
            check($(this).parent().parent().parent().find(content));
        }
    })



})