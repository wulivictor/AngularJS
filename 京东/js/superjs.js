//write by wuli
window.onload=function () {

    var close_banner = document.getElementById("close-banner");
    close_banner.onclick = function () {
        document.getElementById("ad").hidden = true;
    }

//封装选择器
    function $(id) {
        return document.getElementById(id);

    }




    //点击输入框清除文字
        var myinput=$("jd-input");
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

            //alert(this.value);
        }


        //动态生成小圆点

        var box=document.getElementById("box");
        var circle=document.createElement("div");
        box.appendChild(circle);
        circle.setAttribute("class","circle");
         circle.setAttribute("id","circle");

    // var ul=document.getElementById("ul").getElementsByTagName("li");
        for (var i=0;i<6;i++){
            var span=document.createElement("span");
            span.setAttribute("id","click_nmber"+(i+1))
            span.innerHTML=i+1;
            span.setAttribute("class","preCircle")
            circle.appendChild(span);
        }


        //解决左右滑块隐藏

        var banner_img = document.getElementById("banner-img");
        var arrow = document.getElementById("arrow");

        banner_img.onmouseover=function () {
            arrow.style.display="block";
        }
        banner_img.onmouseout=function () {
            arrow.style.display="none";

        }

        // var a=1
        // click_nmber1.style.backgroundColor="#b61b1f";
        // //设置轮播切换图
        //
        // function slideimg() {
        //     var img_arr=["images/slider1.jpg","images/22.jpg","images/33.jpg","images/44.jpg","images/55.jpg","images/66.jpg"];
        //     banner_img_pic.src=img_arr[a%6];
        //     var click_nmber = document.getElementById("click_nmber"+a%7+"");
        //     a++;
        //
        // }
        // window.setInterval(slideimg,3000);
        //悬浮小圆点切换图片
        function  slidepic(number) {

            var click_nmber = document.getElementById("click_nmber"+number);
            click_nmber.onmousemove=function () {
                banner_img_pic.src = "images/"+number+number+".jpg";
                debugger;
                var prespan=document.getElementsByClassName("currentCircle")[0];
                    if(prespan!=undefined){
                        prespan.className="preCircle";
                    }
                click_nmber.className="currentCircle";

            }

        }
        slidepic(1);
        slidepic(2);
        slidepic(3);
        slidepic(4);
        slidepic(5);
        slidepic(6);

    }


