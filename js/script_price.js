
$(document).ready(function(){
	$(".tab_item").not(":first").hide();
	$(".tab_suere").not(":last").show();
	$(".wrapper .tab p").not(":last").addClass("act");
		$(".wrapper .tab").click(function() {
		$(".wrapper .tab p").removeClass("act").eq($(this).index()).addClass("act");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
		$(".tab_suere").hide().eq($(this).index()).fadeIn()
	});
});	