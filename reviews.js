// Initialize Swiper with autoplay and continuous scrolling
const swiper = new Swiper('.swiper', {
    loop: true, // Enable continuous looping
    autoplay: {
        delay: 3000, // Adjust the delay as needed (in milliseconds)
        disableOnInteraction: false, // Continue autoplay even when user interacts with slider
    },
    speed: 1000, // Adjust the speed of the continuous scrolling (in milliseconds)

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
