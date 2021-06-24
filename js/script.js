$(document).ready(function() {
	$('#navbar nav ul li a').click(function(event) {
		event.preventDefault();
		part = $(this).attr('href'); 
		position = $(part).offset().top; 
		$('html, body').animate({scrollTop: position},1400,'easeInOutSine');
	});
	$('.footer-links li a').click(function(event) {
		event.preventDefault();
		part = $(this).attr('href'); 
		position = $(part).offset().top; 
		$('html, body').animate({scrollTop: position},1400,'easeInOutSine');
	});
});