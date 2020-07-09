(function ($) {
	'use strict';

	var browserWindow = $(window);

	// add class sidebar
	var current = location.pathname;
	$('.classynav ul li a').each(function () {
		var $this = $(this);
		// if the current path is like this link, make it active
		if ($this.attr('href').indexOf(current) !== -1) {
			$this.addClass('active');
		}
	})

	// Preloader Active Code
	browserWindow.on('load', function () {
		$('.preloader').delay(800).fadeOut('500', function () {
			$(this).remove();
		});
	});

	//  ScrollUp Active Code
if ($.fn.scrollUp) {
		browserWindow.scrollUp({
				scrollSpeed: 1000,
				scrollText: '<i class="fa fa-angle-up"></i>'
		});
}

	// progress bar animation code

		$('.progress .progress-bar').css("width",
				function() {
						return $(this).attr("aria-valuenow") + "%";
				}
			);


	// progress bar circulaire code
	if ($.fn.circleProgress) {
			$('#circle').circleProgress({
					size: 130,
					emptyFill: "#88939d",
					fill: '#393689',
					thickness: '3',
					reverse: true
			});
			$('#circle2').circleProgress({
					size: 130,
					emptyFill: "#88939d",
					fill: '#6e4d12',
					thickness: '3',
					reverse: true
			});
			$('#circle3').circleProgress({
					size: 130,
					emptyFill: "#88939d",
					fill: '#702c42',
					thickness: '3',
					reverse: true
			});
			$('#circle4').circleProgress({
					size: 130,
					emptyFill: "#88939d",
					fill: '#e53418',
					thickness: '3',
					reverse: true
			});
	}


	// Nav Active Code
	if ($.fn.classyNav) {
		$('#portfolioNav').classyNav();
	}
	// Sticky Active Code
	if ($.fn.sticky) {
		$(".portfolio-menu").sticky({
			topSpacing: 0
		});
	}

	// wow Active Code
	new WOW().init();


	// typed text slider
	var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
		typeSpeed: 70,
		backSpeed: 20,
		loop: true,
		loopCount: Infinity,
		showCursor: false,
  });



})(jQuery);
