var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints : {
        0:{
            slidesPerView: 1,
        },768:{
            slidesPerView: 2,
        },1200:{
            slidesPerView: 3,
        },
    }
});