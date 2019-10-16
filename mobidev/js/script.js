$(window).on('load', function () {
    $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
var wow = new WOW({
    mobile: false, 
});
wow.init();
$(document).ready(function() {

	$(window).scroll(function (){
		if ($(this).scrollTop() > 0){
			$("body").addClass('sticky');
		} else{
			$("body").removeClass('sticky');
		}
	});

	$('#nav-trigger, .bg-hide').on('click', function(){
		$('#nav').toggleClass('active');
		$('.nav-trigger').toggleClass('active');
		$('body').toggleClass('menu-active');
		$("body").toggleClass('search-active');
		return false;
	});

	$('#searchButton').on('click', function(){
		if($("body").hasClass('search-active-page')){
			$("body").removeClass('search-active-page');
		}else{
			$("body").toggleClass('search-active');
		}
		return false;
	});
	$('#bgHideSearch').on( 'click', function() {
		$('body').removeClass('search-active');
	});

	$('#nav .menu-item-has-children > a').after('<span class="plus"></span>');
	$('#nav .menu-item-has-children > .plus').on('click', function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass('active');
		return false;
	});

	/**/
	$('.carousel-full').slick({
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		arrows: true,
		dots: true,
		draggable: true,
		fade: true,
		speed: 1000,
		autoplaySpeed: 5000,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		      }
		    }
		]
	});

	/**/
	jcf.setOptions('File', {
		buttonText: 'DROP YOUR FILES HERE or load from computer',
		placeholderText: 'Max attachment size: 25 Mb'
	});
	jcf.replaceAll();

	/**/
	$('.jcf-upload-button').each(function() {
	    var text = $(this).text();
	    $(this).html(text.replace('load', '<span>load</span>')); 
	});

	/**/


	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if(!isMobile.any()) {
		$(".scroll-box").mCustomScrollbar({
			theme: "minimal",
			scrollInertia: 400,
		});
	}else{
		$(".scroll-box").addClass('scroll-destroy');
	}

	/**/
    $(window).scroll(function (){
	    if ($(this).scrollTop() > 800){
	      $("#up").fadeIn();
	    } else{
	      $("#up").fadeOut();
	    }
    });
    $("#up").click(function (){
	    $("body,html").animate({
	      scrollTop:0
	    }, 600);
	    return false;
    });

    /**/
    $('.next-block, .anchors a').click(function() {
		var objectTo = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(objectTo).offset().top - 90 + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
    });

    /**/
    let url = location.href.replace(/\/$/, "");
 
	  if (location.hash) {
	    const hash = url.split("#");
	    $('#clients-tab a[href="#'+hash[1]+'"], #events-tab a[href="#'+hash[1]+'"]').tab("show");
	    $('a.accordion-nav').addClass("collapsed");
	    $('a.accordion-nav[href="#'+hash[1]+'"]').removeClass("collapsed");
	    url = location.href.replace(/\/#/, "#");
	    history.replaceState(null, null, url);
	    setTimeout(() => {
	      $(window).scrollTop(0);
	    }, 400);
	  } 
	   
	  $('a[data-toggle="tab"]').on("click", function() {
	    let newUrl;
	    const hash = $(this).attr("href");
	    if(hash == "#home") {
	      newUrl = url.split("#")[0];
	    } else {
	      newUrl = url.split("#")[0] + hash;
	    }
	    newUrl += "/";
	    history.replaceState(null, null, newUrl);
	  });

	/**/
	var $grid = $('.grid').isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'
	});

	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};

	$('.filters-button-group').on( 'click', 'a', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	  return false;
	});
	// change is-checked class on buttons
	$('.filters-button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'a', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	    $('.additional-menu .active-text').text($(this).text());
	  });
	});

	if(!$('.additional-menu ul').hasClass('filters-button-group')){
		$('.additional-menu .active-text').text($('.additional-menu .current-menu-item a').text());
	}

	var $additionalMenuFlag = false;
	$('.additional-menu').on( 'click', '.active-filter', function() {
		$('body').toggleClass('additional-menu-active');
		$('.additional-menu ul').slideToggle();
		$(document).trigger('cssClassChanged');
	});

	$(document).on('cssClassChanged', function(){ 
		$('#bgHideAdMenu, .additional-menu ul a').on( 'click', function() {
			$('body').removeClass('additional-menu-active');
			$('.additional-menu ul').slideUp();
		});
	});
	/**/
	$('[data-toggle="tooltip"]').tooltip();

});

		

