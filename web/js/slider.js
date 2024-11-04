var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
  
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })


  console.log('help')