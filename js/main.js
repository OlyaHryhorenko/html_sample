$(document).ready(function(){
	new WOW().init();

	$(window).scroll(function(){

		var st = $(this).scrollTop();
	
		$(".logo-cont").css({
			"transform" : "translate(0%, -" + st/25 + "%"
		});
	});

});