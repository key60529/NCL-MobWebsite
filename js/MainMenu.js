// JavaScript Document
$(function() {
	var state = true;
	$('.menuButton').click(function() {
		if (state) {
			$('.menuContainer').animate({
				width: "80%",
				opacity: 1}, 500);
				}	state = false;
	});
});

/*
$(function(){
	$('.menuCloseBn').click(function() {
		if (state == false) {
			$('.menuContainer').animate({
				width: "0",
				opcaity: 0}, 500);
		}	state = !state;
	});
});

*/