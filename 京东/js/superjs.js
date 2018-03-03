//write by wuli
window.onload=function () {
    //封装选择器
    function $(id) {
        return document.getElementById(id);

    }



    //轮播图图片
    var slide_imgs=["images/11.jpg","images/22.jpg","images/33.jpg","images/44.jpg","images/55.jpg","images/66.jpg"];
    var banner_img = document.getElementById("banner-img");
    var close_banner = document.getElementById("close-banner");
    var banner_img_pic=$("banner_img_pic");

    close_banner.onclick = function () {
        document.getElementById("ad").hidden = true;
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
        for (var i=0;i<slide_imgs.length;i++){
            var span=document.createElement("span");
            span.setAttribute("id","click_nmber"+(i+1))
            span.innerHTML=i+1;
            span.setAttribute("class","preCircle")
            circle.appendChild(span);
            if(i==0){
                span.setAttribute("class","currentCircle");
            }
        }


        //解决左右滑块隐藏
        var arrow = document.getElementById("arrow");

        banner_img.onmouseover=function () {
            arrow.style.display="block";
        }
        banner_img.onmouseout=function () {
            arrow.style.display="none";
        }


        //去掉当前小圆点
        function clearcurrentCircle() {
            var prespan=document.getElementsByClassName("currentCircle")[0];
            if(prespan!=undefined){
                prespan.className="preCircle";
            }
        }


    //每隔一段时间切换轮播图
    var time=1;
    var circlespan=function () {
            debugger
            time=time%6;
            banner_img_pic.src=slide_imgs[time];
            //跟踪小圆点
            clearcurrentCircle();
            var circle=time+1;
            if(time==0){
                circle=1;
            }
            var click_nmber = $("click_nmber"+(circle));
            click_nmber.className="currentCircle";
            time++;
    };
   var interval= window.setInterval(circlespan,2500);


    //滑过切换轮播图
    function  slidepic(number) {

        var click_nmber = document.getElementById("click_nmber"+number);
        click_nmber.onmousemove=function () {
            window.clearInterval(interval);
            banner_img_pic.src = "images/"+number+number+".jpg";
            debugger;
            clearcurrentCircle();
            click_nmber.className="currentCircle";
        };
        click_nmber.onmouseout=function () {

            interval= window.setInterval(circlespan,2500);
        }

    }
    slidepic(1);
    slidepic(2);
    slidepic(3);
    slidepic(4);
    slidepic(5);
    slidepic(6);


    }


