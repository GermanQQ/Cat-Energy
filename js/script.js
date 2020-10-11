$(document).ready(function(){

    $('.main-nav__burger').on('click', function(e){
        e.preventDefault;
        $(this).toggleClass('main-nav__burger--active');
        $('.main-nav__wrapper').toggleClass('main-nav__wrapper--active');
    });

    $('.before-after__slider-block').slick({ 
        dots: true,
        infinite: false
    });

    let nav = $('.main-nav__wrapper'),
	scrollPrev = 0;

$(window).scroll(function() {
	let scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		nav.removeClass('main-nav__wrapper--active');
	} 
	scrollPrev = scrolled;
});
});


