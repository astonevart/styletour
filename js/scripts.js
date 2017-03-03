$(function () {
    var $menu = $('#menu');
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 150 && $menu.hasClass('normal') ){
            $menu.removeClass('normal').addClass('fix');
        } else if($(this).scrollTop() <= 150 && $menu.hasClass("fix")) { $menu.removeClass("fix").addClass("normal"); } });
    $('.carousel').carousel({
        interval: 3000
    });
    $('.search').on('click', function () {
        $('.main-menu .navbar-form').slideToggle();
    });
    $('#elastislide').elastislide();
});
$(window).load(function () {
    var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
     $('#carousel-sidebar img').each(function () {
         $(this).attr('width',carouselCaptionWidth);
     });
    $('#carousel-sidebar .sidebar-carousel-caption').css('max-width',carouselCaptionWidth + 'px');
    $('#carousel-sidebar .carousel-indicators').css('max-width',carouselCaptionWidth + 'px');
    $('.sidebar .banner').css('max-width',carouselCaptionWidth + 'px');
});
