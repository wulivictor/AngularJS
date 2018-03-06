//write by wuli



//初始化调用
window.onload=function () {

    //轮播图部分
    var unslider04 = $('#banner-img').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    })
    //清楚框架生成的多余ol
    var dots_hidden=document.getElementsByClassName("dots")[1];
    dots_hidden.style.display="none";



    //定义变量  变量一定要放在初始化函数中执行，才能呗赋值，要不然毫无作用
    slide_imgs=["images/11.jpg","images/22.jpg","images/33.jpg","images/44.jpg","images/55.jpg","images/66.jpg"];
    banner_img = document.getElementById("banner-img");
    close_banner = document.getElementById("close-banner");
    banner_img_pic=$("banner_img_pic");
    close_banner.onclick = function () {
        document.getElementById("ad").hidden = true;
    }

    //解决左右滑块隐藏
    var arrow = document.getElementById("arrow");

    banner_img.onmouseover=function () {
        arrow.style.display="block";
    }
    banner_img.onmouseout=function () {
        arrow.style.display="none";
    }

    //点击输入框清除文字
        var myinput=document.getElementById("jd-input");
        myinput.onfocus=function () {
            if(myinput.value=="iPhone8 256G"){
                myinput.value="";
                myinput.className="jd-input-after";
            }
        }
        myinput.onblur=function () {
            if(myinput.value===""){
                myinput.value="iPhone8 256G";
                myinput.className="jd-input"
            }
        }

    //调用方法

    //动态生成小圆点
    createCirecle();

    //创建图标
    createcon();

    }






//----------------------------------------------------------------------------------------------------------------------------------------------------------------




//实现方法
    //创建图标
        function  createcon() {
           var icon_array=document.getElementById("box4").getElementsByClassName("icon");
            for (var i=0;i<icon_array.length;i++){
                var Y=-25*i;
                icon_array[i].style.backgroundPositionY=Y+"px";
            }

        }

    //动态生成小圆点
        function  createCirecle() {
            // var box=document.getElementById("box");
            // var circle=document.createElement("ol");
            // box.appendChild(circle);
            // circle.setAttribute("class","dots");
            // // circle.setAttribute("id","circle");
            //
            // for (var i=0;i<slide_imgs.length;i++){
            //     var span=document.createElement("li");
            //     // span.setAttribute("id","click_nmber"+(i))
            //      span.innerHTML=i+1;
            //     span.setAttribute("class","dot")
            //     circle.appendChild(span);
            //     // if(i==0){
            //     //     span.setAttribute("class","currentCircle");
            //     // }
            // }
        }




        //将小圆点绑定到图片
        function  circle_with_picture(sequence) {
            var circle_span=document.getElementById("circle").getElementsByTagName("span");
            var slide_ul=document.getElementById("banner-img").getElementsByTagName("ul")[0];

            switch (sequence){
                case 0:{

                }
            }



        }

//封装选择器
function $(id) {
    return document.getElementById(id);

}