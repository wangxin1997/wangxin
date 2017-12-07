var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  // 分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
   // 前进按钮
   navigation: {
    nextEl: '.swiper-button-next',
  },
});