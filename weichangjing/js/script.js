var swiper = new Swiper('.swiper-container', {
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',
    //图片加载
    preloadImages:false,
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //让分页器支持点击
        clickable: true,
    },
    // 前进按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //开始时的索引
    initialSlide:6,
    
    //  动画效果
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});


/* 音乐按钮 */
var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector(".mp3btn");
mp3btn.onclick = function(){
    if(mp3.paused){
        mp3.play();
        mp3btn.style.animationPlayState="running";
    }else{
        mp3.pause();
        mp3btn.style.animationPlayState="paused";
    }
};


/* s4横条效果 */
var swiper_warper = document.querySelector(".swiper-wrapper").style.transform;
var swiper_slide = document.querySelectorAll(".swiper-slide");
var tab = document.querySelectorAll(".s4 .main .datatable .tab");
for(i=0;i<swiper_slide.length;i++){
    if(swiper_slide[3].className=="swiper-slide swiper-slide-active"){
        if(i==3){
            console.log("3");
            tab[0].style.animation="tab1 2s";
        }
    }
}
/*if(swiper_slide[3].className=="swiper-slide swiper-slide-active"){
    console.log("3");
    tab[0].style.animation="tab1 2s";
}else{
    console.log("4");
}*/


