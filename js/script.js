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
        nav.removeClass('main-nav__wrapper--active'),
        $('.main-nav__burger').removeClass('main-nav__burger--active')
	} 
	scrollPrev = scrolled;
});

    $('#slider__desktop').twentytwenty({
        before_label: 'БЫЛО', // Set a custom before label
        after_label: 'СТАЛО', // Set a custom after label
        click_to_move: true,
    });

    
    

        // const activePage = document.querySelector('.main-nav-link');

        // if (activePage.classList.contains('main-nav-link--active')){
        //   document.querySelector('.main-nav-link').style.color = '#ffffff';
        // }  
});


function initMap(){

    const pos = {lat: 48.286225, lng: 25.933339};
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 16
      });


      const imageMarker = {
          url: '../img/map-icon.png'
      };

      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Cat Energy',
        optimized: true,
        icon: imageMarker,
        
      });
}

