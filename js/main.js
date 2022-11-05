$(function () {
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $('.posts-slide').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });
})
//
// $(document).on('click', '.navbar-toggler',function () {
//     $('body').addClass('overlapblackbg')
// })
// $(document).on('click', '.navbar-collapse-close',function () {
//     $('body').removeClass('overlapblackbg')
//     $(this).closest('.navbar-collapse').removeClass('show')
// })