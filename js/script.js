$(function () {
    //    헤더

    $('nav>ul>li').mouseenter(function () {
        $(this).children('.sub').stop().slideDown();
    })
    $('nav>ul>li').mouseleave(function () {
        $(this).children('.sub').stop().slideUp();
    })

    $('nav>ul>li').focusin(function () {
        $(this).children('.sub').stop().slideDown();
        $(this).children('a').addClass('on');
    })
    $('nav>ul>li').focusout(function () {
        $(this).children('.sub').stop().slideUp();
        $(this).children('a').removeClass('on');

    })

    $('.sub>li').focusin(function () {
        $(this).children('a').addClass('on');
    })
    $('.sub>li').focusout(function () {
        $(this).children('a').removeClass('on');
    })





    // 슬라이드
    function slide() {
        $('.slide>ul').animate({ left: '-100%' }, 1000, function () {
            $(this).append($('.slide>ul>li').first())
            $('.slide>ul').css({ left: '0' })
        })
    }
    setInterval(slide, 3000)

    $('.pop_on').click(function () {
        $('.pop').show();
    })
    $('.pop_off').click(function () {
        $('.pop').hide();
    })

})