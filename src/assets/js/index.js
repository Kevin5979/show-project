import jQuery from "./jquery"
jQuery(document).ready(function($) {
	if(navigator.userAgent.toLowerCase().match(/firefox/)) {
		$('.browser-warning').removeClass('hidden');
		setTimeout(function() {
			$('.browser-warning').addClass('hidden');
		}, 6*1000);
	}
	$('.login').attr('style', '');
	initAnimation();
	$(document).on('click', '.trigger-anim-replay', resetAnimation);
	function initAnimation() {
		setTimeout(function() {
			fyll.go('fill username then fill password then click submit', function() {
				setTimeout(function() {
					$('#submit').addClass('done').closest('.login')
				}, 1500);
			});
		}, 3*1000);
	}
	function resetAnimation() {
		var win = $('.login');
		win.stop().fadeOut(500, function() {
			win.attr('style', '');
			win.find('input[type=text], input[type=password]').val('');
			win.find('.load-btn.loading').removeClass('loading done');
			win.removeClass('flip');
			win.before(win.clone(true)).remove();
			initAnimation();
		});
	}
});