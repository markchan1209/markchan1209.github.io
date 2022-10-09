$(document).ready(function () {
	
	//button
	$('.btn_menu').click(function(event) {
		$('menu').toggleClass('width');
		$("main").toggleClass('width');
	});
	
	$('.btn_member').click(function(event) {
		$("header .ul_flex").toggle();
		$(".btn_member").toggleClass('btn_hover');
	});
	$('main, menu').click(function(event) {
		$("header .ul_flex").hide();
		$(".btn_member").removeClass('btn_hover');
	})
	
	//menu
	$('#btn_onoff').click(function(event) {
		$(this).toggleClass('fa-chevron-down');
		$(this).toggleClass('fa-chevron-right');
		$("#menu_onoff").toggleClass('onoff');
	})
	
})