
var swiper = new Swiper(".mySwiper", {
      autoplay:true,
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {  
        '320': {
          slidesPerView: 1,
          spaceBetween: 30,
         },
        '640': {
          slidesPerView: 2,
          spaceBetween: 50, },
        '992': {
            slidesPerView: 3,
            spaceBetween: 40, },
        '1024': {
              slidesPerView: 4,
              spaceBetween: 30, },
      },
      

    });
    var swiper2 = new Swiper(".mySwiper2", {
        autoplay:true,
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
    });

