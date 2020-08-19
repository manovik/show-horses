$(function(){
  $('.feedback__box').slick({
    autoplay: true
  });

  $('.header__menu-btn').on('click', function() {
    $('.header__menu').slideToggle();
    $('.header__main-text').toggleClass('header__main-text--none');
    $('.header__menu-link').removeClass('active');
  });

  $('.photos__wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
		
  });
  
  new WOW().init();

  function backToTop () {
    let backUp = $('.back-to-top');

    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 900) {
        backUp.fadeIn();        
      } else {
        backUp.fadeOut();
      }
    });

    backUp.on('click', (e) => {
      e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    });
  };

  backToTop ();

});

