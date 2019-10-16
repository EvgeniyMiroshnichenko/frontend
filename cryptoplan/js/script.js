new WOW().init();

$(document).ready(function() {

	if($('body').hasClass('home')){
		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene);
		if ($(window).width() <= '992'){
			parallaxInstance.destroy();
		}
	}

	/*btn*/
	$('.btn')
	.append('<span class="hover"></span>')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('.hover').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('.hover').css({top:relY, left:relX})
    });

	/**/
	$('#nav-trigger').on('click', function(){
		$('#nav').toggleClass('active');
		$(this).toggleClass('active');
	});

	/**/
	if ($(window).width() <= '992'){
		$offsetTop = 0;
	} else {
		$offsetTop = 0;
	}
	$(window).scroll(function (){
		if ($(this).scrollTop() > $offsetTop){
			$("body").addClass('sticky');
		} else{
			$("body").removeClass('sticky');
		}
	});

	/*  */
	$('.burses .carousel').slick({
		infinite: true,
		slidesToShow: 6,
		autoplay: false,
		arrows: true,
		dots: false,
		draggable: true,
		fade: false,
		speed: 500,
		appendArrows: $('.burses .carousel-nav'),
		prevArrow: $('.burses .carousel-nav .prev'),
		nextArrow: $('.burses .carousel-nav .next'),
		responsive: [
			{
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        arrows: false,
				dots: true,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 2,
		        dots: true,
		      }
		    },
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 1,
		        dots: true,
		      }
		    }
		]
	});

	$('.documentation .carousel').slick({
		infinite: false,
		slidesToShow: 3,
		autoplay: false,
		arrows: true,
		dots: false,
		draggable: true,
		fade: false,
		speed: 500,
		appendArrows: $('.documentation .carousel-nav'),
		prevArrow: $('.documentation .carousel-nav .prev'),
		nextArrow: $('.documentation .carousel-nav .next'),
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 2,
		      }
		    }
		]
	});

	$('.investor-reviews-v-1 .carousel').slick({
		infinite: true,
		slidesToShow: 2,
		autoplay: false,
		arrows: true,
		dots: true,
		draggable: true,
		fade: false,
		speed: 500,
		centerPadding: '150px',
		appendArrows: $('.investor-reviews-v-1 .carousel-nav'),
		prevArrow: $('.investor-reviews-v-1 .carousel-nav .prev'),
		nextArrow: $('.investor-reviews-v-1 .carousel-nav .next'),
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		]
	});

	$('.investor-reviews-v-2 .carousel').slick({
		infinite: true,
		slidesToShow: 1,
		autoplay: false,
		arrows: true,
		dots: true,
		draggable: true,
		fade: false,
		speed: 500,
		centerPadding: '150px',
		appendArrows: $('.investor-reviews-v-2 .carousel-nav'),
		prevArrow: $('.investor-reviews-v-2 .carousel-nav .prev'),
		nextArrow: $('.investor-reviews-v-2 .carousel-nav .next'),
	});

	/**/
	//$("#up").hide();
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

    /* calc */
    /*1*/
    $( function() {
	    $( "#slider-range-1" ).slider({
	      range: "min",
	      value: 300,
	      min: 100,
	      max: 30000,
	      step: 100,
	      slide: function( event, ui ) {
	        $( "#amount-1" ).val( ui.value );
	      }
	    });
	    $( "#amount-1" ).val( $( "#slider-range-1" ).slider( "value" ) );
	    $( "#amount-1" ).on( "change", function() {
	      $( "#slider-range-1" ).slider( "value", $(this).val() );
	    });
	});
	/*2*/
    $( function() {
	    $( "#slider-range-2" ).slider({
	      range: "min",
	      value: 210,
	      min: 0,
	      max: 360,
	      slide: function( event, ui ) {
	        $( "#amount-2" ).val( ui.value );
	      }
	    });
	    $( "#amount-2" ).val( $( "#slider-range-2" ).slider( "value" ) );
	    $( "#amount-2" ).on( "change", function() {
	      $( "#slider-range-2" ).slider( "value", $(this).val() );
	    });
	});
	/*3*/
    $( function() {
	    $( "#slider-range-3" ).slider({
	      range: "min",
	      value: 10,
	      min: 0,
	      max: 100,
	      slide: function( event, ui ) {
	        $( "#amount-3" ).val( ui.value );
	      }
	    });
	    $( "#amount-3" ).val( $( "#slider-range-3" ).slider( "value" ) );
	    $( "#amount-3" ).on( "change", function() {
	      $( "#slider-range-3" ).slider( "value", $(this).val() );
	    });
	});
	/*4*/
    $( function() {
	    $( "#slider-range-4" ).slider({
	      range: "min",
	      value: 80,
	      min: 0,
	      max: 120,
	      slide: function( event, ui ) {
	        $( "#amount-4" ).val( ui.value );
	      }
	    });
	    $( "#amount-4" ).val( $( "#slider-range-4" ).slider( "value" ) );
	    $( "#amount-4" ).on( "change", function() {
	      $( "#slider-range-4" ).slider( "value", $(this).val() );
	    });
	});

});

var myWow = new WOW(
  {
    boxClass:     'myWow',
    animateClass: 'animated',
    offset:       500,
    mobile:       true,      
    live:         true,
    callback:     function(box) {
      svgAmimation1();
    },
    scrollContainer: null
  }
);
myWow.init();

function svgAmimation1(){
	var polygon21 = Snap("#polygon21");
	polygon21.animate({ points: "69.2,620 -0.1,580 -0.1,540 69.2,580" }, 2000);
	var polygon22 = Snap("#polygon22");
	polygon22.animate({ points: "138.5,580 69.2,620 69.2,580 138.5,540" }, 2000);
	var polygon23 = Snap("#polygon23");
	polygon23.animate({ points: "69.2,580 -0.1,540 69.2,500 138.5,540" }, 2000);

	var polygon31 = Snap("#polygon31");
	polygon31.animate({ points: "69.8,620 0.5,580 0.5,511 69.8,551" }, 2000);
	var polygon32 = Snap("#polygon32");
	polygon32.animate({ points: "139,580 69.8,620 69.8,551 139,511" }, 2000);
	var polygon33 = Snap("#polygon33");
	polygon33.animate({ points: "69.8,551 0.5,511 69.8,471 139,511" }, 2000);

	var polygon41 = Snap("#polygon41");
	polygon41.animate({ points: "69.4,620 0.1,580 0.1,457 69.4,497" }, 2000);
	var polygon42 = Snap("#polygon42");
	polygon42.animate({ points: "138.7,580 69.4,620 69.4,497 138.7,457" }, 2000);
	var polygon43 = Snap("#polygon43");
	polygon43.animate({ points: "69.4,497 0.1,457 69.4,417 138.7,457" }, 2000);

	var polygon51 = Snap("#polygon51");
	polygon51.animate({ points: "69.3,620 0,580 0,40 69.3,80" }, 2000);
	var polygon52 = Snap("#polygon52");
	polygon52.animate({ points: "138.6,580 69.3,620 69.3,80 138.6,40" }, 2000);
	var polygon53 = Snap("#polygon53");
	polygon53.animate({ points: "69.3,80 0,40 69.3,0 138.6,40" }, 2000);
}

var myWow2 = new WOW(
  {
    boxClass:     'myWow2',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,      
    live:         true,
    callback:     function(box) {
      svgAmimation2();
    },
    scrollContainer: null
  }
);
myWow2.init();

function svgAmimation2(){
	var polygon211 = Snap("#polygon211");
	polygon211.animate({ points: "63.1,197.9 0.2,161.6 0.2,73.5 63.1,109.9" }, 1500);
	var polygon212 = Snap("#polygon212");
	polygon212.animate({ points: "126,161.6 63.1,197.9 63.1,109.9 126,73.5" }, 1500);
	var polygon213 = Snap("#polygon213");
	polygon213.animate({ points: "63.1,109.9 0.2,73.5 63.1,37.2 126,73.5" }, 1500);

	var polygon221 = Snap("#polygon221");
	polygon221.animate({ points: "63.1,198.1 0,161.7 0,89 63.1,125.3" }, 1500);
	var polygon222 = Snap("#polygon222");
	polygon222.animate({ points: "126,161.7 63.1,198.1 63.1,125.3 126,89" }, 1500);
	var polygon223 = Snap("#polygon223");
	polygon223.animate({ points: "63.1,125.3 0,89 63.1,52.6 126,89" }, 1500);

	var polygon231 = Snap("#polygon231");
	polygon231.animate({ points: "63,197.9 0,161.6 0,36.4 63,72.7" }, 1500);
	var polygon232 = Snap("#polygon232");
	polygon232.animate({ points: "125.9,161.6 63,197.9 63,72.7 125.9,36.4" }, 1500);
	var polygon233 = Snap("#polygon233");
	polygon233.animate({ points: "63,72.7 0,36.4 63,0 125.9,36.4" }, 1500);

	var polygon241 = Snap("#polygon241");
	polygon241.animate({ points: "63.2,197.6 0.3,161.4 0.3,113.2 63.2,149.4" }, 1500);
	var polygon242 = Snap("#polygon242");
	polygon242.animate({ points: "126,161.4 63.2,197.6 63.2,149.4 126,113.2" }, 1500);
	var polygon243 = Snap("#polygon243");
	polygon243.animate({ points: "63.2,149.4 0.3,113.2 63.2,77.1 126,113.2" }, 1500);
}