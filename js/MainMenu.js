// JavaScript Document
$(function() {
	$('.menuButton').click(function() {
			$('.menuContainer').animate({
				width: "80%",
				opacity: 1}, 500);
});
});


$(function(){
	$('.menuCloseBn').click(function() {
			$('.menuContainer').animate({
				width: "0",
				opcaity: 0}, 500);
	});
});

