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

	if(document.documentElement.clientWidth > 1023 && document.documentElement.clientHeight > 656) {
		createFullpage();
	}
	$(window).on('resize orientationChange', function() {
		if ( $(window).width() > 1023 && $(window).height() > 656 ) {
			createFullpage();
		} else {
			if(fullPageCreated == true) {
				fullPageCreated = false;
				fullpage_api.destroy('all');
			}
		}
	});

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
		      breakpoint: 1220,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        variableWidth: false,
		      }
		    },
		]
	});
	/* prizes */
	$('.prizes-carousel').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		dots: false,
		draggable: true,
		fade: false,
		speed: 1000,
		centerMode: true,
		centerPadding: "0px",
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		]
	});

	/* click button */
	$('.btn-vote').on('click', function(){
		var el = $(this).prev('.pack-img').find('img');
		el.removeClass('bounce');
		setTimeout(function(){
	       el.addClass('bounce');
	    },20);
	});

	/**/
	$(".scroll-box").mCustomScrollbar({});

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

if(document.documentElement.clientWidth < 1024 && document.documentElement.clientHeight < 657) {
	/* iphone 100vh */
	var vh = window.innerHeight * 0.01;
	document.getElementById('firstScreen').style.setProperty('--vh', vh + 'px');
	document.getElementById('firstScreenT').style.setProperty('--vh', vh + 'px');
}