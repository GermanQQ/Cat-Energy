$('.main-nav__burger').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('main-nav__burger--active');
    $('.main-nav__wrapper').toggleClass('main-nav__wrapper--active');
});
