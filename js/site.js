$window = $(window);

//:: 7.0 WOW active code
if ($window.width() > 767) {
    new WOW().init();
}


// :: 8.0 Sticky Active Code
$window.on('scroll', function () {
    if ($window.scrollTop() > 48) {
        $('.header_area').addClass('sticky slideInDown');
    } else {
        $('.header_area').removeClass('sticky slideInDown');
    }
});

// :: 9.0 Magnific popup code
$('.magnific-popup-link').magnificPopup({
  type: 'image',
//  removalDelay: 300,
//  mainClass: 'mfp-fade'
});
