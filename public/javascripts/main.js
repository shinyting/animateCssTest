$(function () {
	$('.imgbox').on('mouseenter', function () {
		$(this).attr('class', 'imgbox');
		$(this).addClass('animated shake');
	});
	$('.imgbox').on('mouseleave', function () {
		$(this).removeClass('shake');
	});
})