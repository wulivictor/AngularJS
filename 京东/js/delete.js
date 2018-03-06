


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
         time=time%6;
         banner_img_pic.src=slide_imgs[time];
         //跟踪小圆点
         clearcurrentCircle();
         var circle=time+1;
         if(time==0){
             circle=1;
         }
         var click_nmber = $("click_nmber"+(circle-1));
         click_nmber.className="currentCircle";
         time++;
 };
var interval= window.setInterval(circlespan,2500);


 //滑过切换轮播图
 function  slidepic(number) {

     var click_nmber = document.getElementById("click_nmber"+(number-1));
     click_nmber.onmousemove=function () {
         window.clearInterval(interval);
         banner_img_pic.src = "images/"+number+number+".jpg";
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


 $("bar_left").onclick=function () {
     var currentCircle=document.getElementsByClassName("currentCircle")[0];
     var current_number=currentCircle.innerHTML;
     debugger;
     var number=current_number-0-1;
     if (number<0){
         number=5;
     }
     banner_img_pic.src=slide_imgs[number];
     clearcurrentCircle();
     debugger;
     var click_nmber = $("click_nmber"+(number-1));
     click_nmber.className="currentCircle";

 }



 $("bar_right").onclick=function () {
     var currentCircle=document.getElementsByClassName("currentCircle")[0];
     var current_number=currentCircle.innerHTML;
     debugger;
     var number=current_number-0+1;
     if (number>5){
         number=0;
     }
     banner_img_pic.src=slide_imgs[number];
      clearcurrentCircle();
     debugger;
      var click_nmber = $("click_nmber"+(number-1));
      click_nmber.className="currentCircle";

 }
