$(document).ready(function(){
	$('.image-box').hover(
		function(){
			$(this).find('.caption').fadeIn(500);
		},
	function(){
			$(this).find('.caption').fadeOut(500);
		}
	);
});