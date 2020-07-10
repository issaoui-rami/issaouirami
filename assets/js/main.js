(function ($) {
	'use strict';

	var browserWindow = $(window);

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

