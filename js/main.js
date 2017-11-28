/*-- Whizlab --*/


$(document).ready(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 605) {
            $('.navbar').addClass('fix');
            $('.brandYW').show();
        }
        if ($(window).scrollTop() < 595) {
            $('.navbar').removeClass('fix');
            $('.brandYW').hide();
        }

    });
    $('.brandYW').hide();
});

$('.click-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

$('body').scrollspy({
    target: '#mainNav',
    offset: 54
});

$(".socialIcons .fa-arrow-circle-up a[href^='#']").on('click', function (e) {

    e.preventDefault();

    var hash = this.hash;
    $('li a').removeClass("active");
    $(this).removeClass("active");

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 200, function () {

        window.location.hash = hash;
    });

});


$(".navbar-light ul li a[href^='#']").on('click', function (e) {

    e.preventDefault();

    var hash = this.hash;
    $('li a').removeClass("active");
    $(this).addClass("active");
    if (hash == "#cover") {
        $('.brandYW').hide();

    }
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {

        window.location.hash = hash;
    });

});