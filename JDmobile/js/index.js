$(function () {

    //轮播图部分
    var unslider04 = $('.jd-banner').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    })



})
