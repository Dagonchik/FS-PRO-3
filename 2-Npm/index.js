import './node_modules/swiper/swiper-bundle.js';

const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true
});