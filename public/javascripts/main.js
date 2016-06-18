$(function () {
	$('.start').on('click', function () {
		if ($(this).html() === 'start') {
			$('.imggroup').attr('class', 'imggroup');
			$('.imggroup').show();
			$(this).html('end');
		}
		else {
			$('.imggroup').addClass('animated slideOutRight');
			setTimeout(function () {
				$('.imggroup').hide();
			}, 500);
			$(this).html('start');
		}
	})


	$('.imgbox').on('mouseenter', function () {
		$(this).attr('class', 'imgbox');
		$(this).addClass('animated swing');
	});
	$('.imgbox').on('mouseleave', function () {
		$(this).removeClass('swing');
	});
})