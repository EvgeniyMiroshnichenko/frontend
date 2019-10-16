$(window).on('load', function () {
    $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $('body').addClass('loaded');

    /* init animation */
    $('.pasta-images').addClass('active');   
});

if(document.documentElement.clientWidth < 1024 && document.documentElement.clientHeight < 701) {
	
}
window.onscroll = function () {

};

// Сначала получаем высоту окна просмотра 
// и умножаем ее на 1%
let vh = window.innerHeight * 0.01;
// Затем устанавливаем значение свойства --vh
// для корневого элемента
document.getElementById('firstScreen').style.setProperty('--vh', `${vh}px`);

/**/
$(document).ready(function() {

	/* fullpage */
	function createFullpage() {
		if(fullPageCreated === false) {
			fullPageCreated = true;
			new fullpage('#fullpage', {
				licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
				verticalCentered: false,
				css3: false,
				scrollingSpeed: 700,
				easingcss3: 'ease',
				scrollOverflow: false,
			});
		}
	}
	var fullPageCreated = false;

	if(document.documentElement.clientWidth > 1023 && document.documentElement.clientHeight > 700) {
		createFullpage();
	}
	$(window).on('resize orientationChange', function() {
		if ( $(window).width() > 1023 && $(window).height() > 700 ) {
			createFullpage();
		} else {
			if(fullPageCreated == true) {
				fullPageCreated = false;
				fullpage_api.destroy('all');
			}
		}
	});

	/* menu */
	$('.nav-trigger').on('click', function(){
		$('#nav').toggleClass('active');
		$('.nav-trigger').toggleClass('active');
		return false;
	});

	/* key */
	$('.over-key').on('click', function(){
		$('.key-form-wrap').addClass('active');
		return false;
	});

	/* tooltip */
	$('[data-toggle="tooltip"]').tooltip({
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
	});
	$('[data-toggle="tooltip-stage"]').tooltip({
		template: '<div class="tooltip tooltip-stage" role="tooltip"><div class="tooltip-inner"></div></div>',
	});

	/* second screen slider */
	$('.prize-prev').click(function(){
		$prev = $('.prizes-carousel .first');
		$centered = $('.prizes-carousel .centered');
		$next = $('.prizes-carousel .last');

		$centered.addClass('last').removeClass('centered');
	    $next.addClass('first').removeClass('last');
	    $prev.addClass('centered').removeClass('first');

	    addHint();

	    return false;
	});
	$('.prize-next').click(function(){
		$prev = $('.prizes-carousel .first');
		$centered = $('.prizes-carousel .centered');
		$next = $('.prizes-carousel .last');

		$centered.addClass('first').removeClass('centered');
	    $next.addClass('centered').removeClass('last');
	    $prev.addClass('last').removeClass('first');

	    addHint();

	    return false;
	});

	function addHint(){
		$title = $('.prizes .centered .hint').data('original-title');
		$('#prizeHint').text($title);
		console.log($title);
	}
	addHint();

	/* stages */
	$('.stages').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: false,
		draggable: true,
		fade: false,
		speed: 1000,
		variableWidth: true,
		responsive: [
		    {
		      breakpoint: 1250,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		]
	});

	/**/
	$(".scroll-box").mCustomScrollbar({
	    
	});

});


/* Parallax */
function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.parallax',
        layers: options.layers || '.parallax-layer',
        deep: options.deep || 'data-parallax-deep'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
      	for(var i = 0; i < parallaxWrappers.length; i++){
			(function(i){
				parallaxWrappers[i].addEventListener('mousemove', function(e){
					var x = e.clientX,
						y = e.clientY,
						layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
					for(var j = 0; j < layers.length; j++){
            (function(j){
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                  disallow = layers[j].getAttribute('data-parallax-disallow'),
                  itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                  itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                  if(disallow && disallow === 'both') return;
                  layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);  
					}
				})
			})(i);
      	}
    };
    this.init();
    return this;
}

window.addEventListener('load', function(){
    new Parallax();
});

/**/