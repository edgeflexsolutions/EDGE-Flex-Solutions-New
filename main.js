$(document).ready(function(){

    // Swiper initialization
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#000000','box-shadow':'0 .5rem .12rem rgba(0,0,0,.4)'});
        } else {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    $('.accordion-header').click(function() {
        var accordion = $(this).parent('.accordion');
        if (accordion.hasClass('active')) {
            accordion.removeClass('active');
            accordion.find('.accordion-body').slideUp();
        } else {
            $('.accordion.active').removeClass('active');
            $('.accordion-body').slideUp();
            accordion.addClass('active');
            accordion.find('.accordion-body').slideDown();
        }
    });

    let container = document.querySelector('.container');

    // Clone the first box-container and append it to the end
    let cloneContainer = container.firstElementChild.cloneNode(true);
    container.appendChild(cloneContainer);

    // Set interval for continuous scrolling
    setInterval(() => {
        container.scrollLeft += container.firstElementChild.offsetWidth;
    }, 3000); // Adjust the scroll speed (in milliseconds) as needed

});
